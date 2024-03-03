import { useRef } from "react";
import AppShortcut from "./AppShortcut";
import AppWindow from "./AppWindow";
import Taskbar from "./Taskbar";

const Screen = () => {
    const screenRef = useRef<HTMLDivElement>(null);
    return (
        <div
            className="bg-background w-screen h-screen flex flex-col relative overflow-hidden"
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
                    <AppShortcut
                        name="App 1"
                        tags={[]}
                        path={""}
                        img={""}
                        url={"https://example.com/"}
                    />
                    <AppShortcut
                        name="App 2"
                        tags={[]}
                        path={""}
                        img={""}
                        url={"https://example.com/"}
                    />
                    <AppShortcut
                        name="App 3"
                        tags={[]}
                        path={""}
                        img={""}
                        url={"https://example.com/"}
                    />
                    <AppShortcut
                        name="App 4"
                        tags={[]}
                        path={""}
                        img={""}
                        url={"https://example.com/"}
                    />
                    <AppShortcut
                        name="App 5"
                        tags={[]}
                        path={""}
                        img={""}
                        url={"https://example.com/"}
                    />
                    <AppShortcut
                        name="App 6"
                        tags={[]}
                        path={""}
                        img={""}
                        url={"https://example.com/"}
                    />
                    <AppShortcut
                        name="App 7"
                        tags={[]}
                        path={""}
                        img={""}
                        url={"https://example.com/"}
                    />
                    <AppShortcut
                        name="App 8"
                        tags={[]}
                        path={""}
                        img={""}
                        url={"https://example.com/"}
                    />
                    <AppShortcut
                        name="App 9"
                        tags={[]}
                        path={""}
                        img={""}
                        url={"https://example.com/"}
                    />
                    <AppShortcut
                        name="App 10"
                        tags={[]}
                        path={""}
                        img={""}
                        url={"https://example.com/"}
                    />
                    <AppShortcut
                        name="App 11"
                        tags={[]}
                        path={""}
                        img={""}
                        url={"https://example.com/"}
                    />
                    <AppShortcut
                        name="App 12"
                        tags={[]}
                        path={""}
                        img={""}
                        url={"https://example.com/"}
                    />
                    <AppShortcut
                        name="App 13"
                        tags={[]}
                        path={""}
                        img={""}
                        url={"https://example.com/"}
                    />
                    <AppShortcut
                        name="App 14"
                        tags={[]}
                        path={""}
                        img={""}
                        url={"https://example.com/"}
                    />
                    <AppShortcut
                        name="App 15"
                        tags={[]}
                        path={""}
                        img={""}
                        url={"https://example.com/"}
                    />
                    <AppShortcut
                        name="App 16"
                        tags={[]}
                        path={""}
                        img={""}
                        url={"https://example.com/"}
                    />
                    <AppShortcut
                        name="App 17"
                        tags={[]}
                        path={""}
                        img={""}
                        url={"https://example.com/"}
                    />
                    <AppShortcut
                        name="App 18"
                        tags={[]}
                        path={""}
                        img={""}
                        url={"https://example.com/"}
                    />
                    <AppShortcut
                        name="App 19"
                        tags={[]}
                        path={""}
                        img={""}
                        url={"https://example.com/"}
                    />
                    <AppShortcut
                        name="App 20"
                        tags={[]}
                        path={""}
                        img={""}
                        url={"https://example.com/"}
                    />
                    <AppShortcut
                        name="A really long name to see what happendsdawdadw adaw??"
                        tags={[]}
                        path={""}
                        img={""}
                        url={""}
                    />
                </span>
            </div>
            <Taskbar />
        </div>
    );
};

export default Screen;
