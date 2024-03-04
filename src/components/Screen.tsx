import { useRef } from "react";
import AppShortcut from "./AppShortcut";
import AppWindow from "./AppWindow";
import Taskbar from "./Taskbar/Taskbar";
import useAppContext from "./context/useAppContext";
import SelectionRectangle from "./SelectionRectangle";

const Screen = () => {
    const screenRef = useRef<HTMLDivElement>(null);
    const { appList, openAppsList } = useAppContext();

    const filteredApps = appList.filter((app) => app.tags.includes("screen"));

    return (
        <div
            className={`bg-background1 w-screen h-screen flex flex-col l relative overflow-hidden bg-cover ${"hjjpl-20"} `}
            ref={screenRef}
        >
            <SelectionRectangle />
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
                        <AppShortcut appInfo={el} key={el.id} isHighlightable />
                    ))}
                </span>
            </div>
            <Taskbar />
        </div>
    );
};

export default Screen;
