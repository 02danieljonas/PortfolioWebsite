import { useRef } from "react";
import AppShortcut from "./AppShortcut";
import AppWindow from "./AppWindow";
import Taskbar from "./Taskbar";
import useAppContext from "./context/useAppContext";
const Screen = () => {
    const screenRef = useRef<HTMLDivElement>(null);
    const { appList, openAppsList } = useAppContext();

    const filteredApps = appList.filter((app) => app.tags.includes("screen"));

    return (
        <div
            className="bg-background1 w-screen h-screen flex flex-col relative overflow-hidden bg-cover"
            ref={screenRef}
        >
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

            {/* <AppWindow
                width="400px"
                height="500px"
                screenRef={screenRef}
                appIcon={"https://danieljonas.dev/assets/Logo.baf2f7b5.svg"}
                appName={"My Portfolio"}
                appUrl={"https://danieljonas.dev/"}
            /> */}

            <div className="w-full flex-auto h-5 p-4">
                <span className="grid px-1 gap-x-8 gap-y-4 grid-cols-[repeat(auto-fit,minmax(3rem,1fr))] grid-flow-row">
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
