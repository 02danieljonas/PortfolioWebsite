import { useRef, useState } from "react";
import AppShortcut from "./AppShortcut";
import AppWindow from "./AppWindow";
import Taskbar from "./Taskbar/Taskbar";
import useAppContext from "./context/useAppContext";
import SelectionRectangle from "./SelectionRectangle";
import Position from "./types/Position.interface";

const Screen = () => {
    const screenRef = useRef<HTMLDivElement>(null);
    const { appList, openAppsList } = useAppContext();

    const filteredApps = appList.filter((app) => app.tags.includes("screen"));

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [startPos, setStartPos] = useState<Position>({ x: 100, y: 100 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isActive, setIsActive] = useState<boolean>(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [endPos, setEndPos] = useState<Position>({ x: 100, y: 100 });

    return (
        <div
            className={`bg-background1 w-screen h-screen flex flex-col l relative overflow-hidden bg-cover ${"hjjpl-20"} `}
            ref={screenRef}
        >
            <div
                className="absolute top-0 left-0 right-0 bottom-0 z-0"
                onMouseDown={(e) => {
                    setIsActive(true);
                    startPos.x = e.nativeEvent.offsetX;
                    startPos.y = e.nativeEvent.offsetY;
                    setStartPos({ ...startPos });
                }}
                onMouseMove={(e) => {
                    endPos.x = e.nativeEvent.offsetX;
                    endPos.y = e.nativeEvent.offsetY;
                    setEndPos({ ...endPos });
                }}
                onMouseUp={() => {
                    setIsActive(false);
                }}
            >
                {isActive && (
                    <SelectionRectangle startPos={startPos} endPos={endPos} />
                )}
            </div>
            {openAppsList.map((e) => {
                return (
                    <AppWindow
                        key={appList[e].id}
                        width="400px"
                        height="500px"
                        screenRef={screenRef}
                        appInfo={appList[e]}
                    />
                );
            })}

            <div className="w-full h-[calc(100%-3.5rem)] p-6 overflow-hidden">
                <span className="h-full flex px-1 gap-x-8 gap-y-4 flex-wrap flex-col items-start place-content-start">
                    {filteredApps.map((el) => (
                        <AppShortcut appInfo={el} key={el.id} />
                    ))}
                </span>
            </div>
            <Taskbar />
        </div>
    );
};

export default Screen;
