import AppShortcut from "./AppShortcut";
import Taskbar from "./Taskbar";

const Screen = () => {
    return (
        <div className="bg-background w-screen h-screen flex flex-col">
            <div className="w-full flex-auto h-5 p-4">
                <span className="grid px-1 gap-x-8 gap-y-4 grid-cols-[repeat(auto-fit,minmax(3rem,1fr))] grid-flow-row">
                    <AppShortcut name="App 1" />
                    <AppShortcut name="App 2" />
                    <AppShortcut name="App 3" />
                    <AppShortcut name="App 4" />
                    <AppShortcut name="App 5" />
                    <AppShortcut name="App 6" />
                    <AppShortcut name="App 7" />
                    <AppShortcut name="App 8" />
                    <AppShortcut name="App 9" />
                    <AppShortcut name="App 10" />
                    <AppShortcut name="App 11" />
                    <AppShortcut name="App 12" />
                    <AppShortcut name="App 13" />
                    <AppShortcut name="App 14" />
                    <AppShortcut name="App 15" />
                    <AppShortcut name="App 16" />
                    <AppShortcut name="App 17" />
                    <AppShortcut name="App 18" />
                    <AppShortcut name="App 19" />
                    <AppShortcut name="App 20" />
                    <AppShortcut name="A really long name to see what happendsdawdadw adaw??" />
                </span>
            </div>
            <Taskbar />
        </div>
    );
};

export default Screen;
