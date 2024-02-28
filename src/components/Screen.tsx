import App from "./App";
import Taskbar from "./Taskbar";

const Screen = () => {
    return (
        <div className="bg-background w-screen h-screen flex flex-col">
            <div className="w-full flex-auto h-5 p-4">
                <span className="grid px-1 gap-x-8 gap-y-4 grid-cols-[repeat(auto-fit,minmax(3rem,1fr))] grid-flow-row">
                    <App name="App 1" />
                    <App name="App 2" />
                    <App name="App 3" />
                    <App name="App 4" />
                    <App name="App 5" />
                    <App name="App 6" />
                    <App name="App 7" />
                    <App name="App 8" />
                    <App name="App 9" />
                    <App name="App 10" />
                    <App name="App 11" />
                    <App name="App 12" />
                    <App name="App 13" />
                    <App name="App 14" />
                    <App name="App 15" />
                    <App name="App 16" />
                    <App name="App 17" />
                    <App name="App 18" />
                    <App name="App 19" />
                    <App name="App 20" />
                    <App name="A really long name to see what happendsdawdadw adaw??" />
                </span>
            </div>
            <Taskbar />
        </div>
    );
};

export default Screen;
