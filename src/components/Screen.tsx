import { useRef } from "react";
import AppShortcut from "./AppShortcut";
import AppWindow from "./AppWindow";
import Taskbar from "./Taskbar";
import useAppContext from "./context/useAppContext";
const Screen = () => {
    const screenRef = useRef<HTMLDivElement>(null);
    const { appList } = useAppContext();

    const filteredApps = appList.filter((app) => app.tags.includes("screen"));

    return (
        <div
            className="bg-background1 w-screen h-screen flex flex-col relative overflow-hidden bg-cover"
            ref={screenRef}
        >
            <AppWindow
                width="400px"
                height="500px"
                screenRef={screenRef}
                appIcon={"/app-icons/example.jpg"}
                appName={"Example App"}
                appUrl={"https://example.com/"}
            />

            <AppWindow
                width="400px"
                height="500px"
                screenRef={screenRef}
                appIcon={"https://danieljonas.dev/assets/Logo.baf2f7b5.svg"}
                appName={"My Portfolio"}
                appUrl={"https://danieljonas.dev/"}
            />

            <div className="w-full flex-auto h-5 p-4">
                <span className="grid px-1 gap-x-8 gap-y-4 grid-cols-[repeat(auto-fit,minmax(3rem,1fr))] grid-flow-row">
                    {filteredApps.map((el) => (
                        <AppShortcut appInfo={el} />
                    ))}
                </span>
            </div>
            <Taskbar />
        </div>
    );
};

export default Screen;
