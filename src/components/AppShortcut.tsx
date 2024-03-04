import { useEffect, useRef, useState } from "react";
import useAppContext from "./context/useAppContext";
import App from "./types/App.interface";

interface AppShortcutProps {
    appInfo: App;
    isHighlightable: boolean;
}

const AppShortcut = ({ appInfo, isHighlightable }: AppShortcutProps) => {
    const {
        openApp,
        setSingleSelectedApp,
        singleSelectedApp,
        startPos,
        endPos,
    } = useAppContext();

    const [isThisAppSelected, setIsThisAppSelected] = useState<boolean>(
        singleSelectedApp === appInfo.id
    );
    const appShortcutRef = useRef<HTMLDivElement>(null);

    // TODO modify this code so that either this is calculated in AppContext or startPos and endPos are use better
    const smallX = Math.min(startPos.x, endPos.x);
    const smallY = Math.min(startPos.y, endPos.y);
    const bigX = Math.max(startPos.x, endPos.x);
    const bigY = Math.max(startPos.y, endPos.y);
    useEffect(() => {
        if (!isHighlightable) {
            return;
        }
        if (singleSelectedApp === appInfo.id) {
            setIsThisAppSelected(true);
            return;
        }
        if (singleSelectedApp !== null) {
            setIsThisAppSelected(false);
            return;
        }
        if (!appShortcutRef.current) {
            return;
        }

        const divElement = appShortcutRef.current;

        const handleResize = () => {
            const rect = divElement.getBoundingClientRect();
            const divTopLeft = { x: rect.left, y: rect.top };
            const divBottomRight = { x: rect.right, y: rect.bottom };

            const overlapsX =
                smallX <= divBottomRight.x && bigX >= divTopLeft.x;
            const overlapsY =
                smallY <= divBottomRight.y && bigY >= divTopLeft.y;

            const isInsidePoints = overlapsX && overlapsY;

            setIsThisAppSelected(isInsidePoints);
        };
        handleResize();
    }, [singleSelectedApp, appInfo.id, isHighlightable, smallX, bigX, smallY, bigY]);

    return (
        <div
            className="relative pb-8 cursor-pointer w-16"
            onClick={() => {
                if (isHighlightable) {
                    setSingleSelectedApp(appInfo.id);
                } else {
                    openApp(appInfo.id);
                }
            }}
            onDoubleClick={() => {
                if (isHighlightable) {
                    openApp(appInfo.id);
                }
            }}
        >
            <div
                ref={appShortcutRef}
                className={`bg-white absolute ${
                    isThisAppSelected ? "!opacity-20" : "opacity-0"
                } w-full h-full  ${
                    isHighlightable ? "hover:opacity-10" : "hover:opacity-20"
                } `}
            ></div>
            <div className="w-12 h-12 p-2 text-black mx-auto">
                <img src={appInfo.img} alt={`Image of ${appInfo.name}`} />
            </div>
            <div
                className={`absolute left-1/2 -translate-x-1/2 ${
                    singleSelectedApp === appInfo.id || "line-clamp-2"
                } text-center mx-auto text-white leading-4 pointer-events-none`}
            >
                {appInfo.name}
            </div>
        </div>
    );
};

export default AppShortcut;
