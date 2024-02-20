import Apps from "./App";

const Screen = () => {
    return (
        <div className="bg-background w-screen h-screen flex flex-col">
            <div className="w-full flex-auto h-5 p-4">
                <span className="grid px-1 gap-x-8 gap-y-4 grid-cols-[repeat(auto-fit,minmax(3rem,1fr))] grid-flow-row">
                    {/* <span className="grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(100px,1fr))]"> */}
                    <Apps name="App 1" />
                    <Apps name="App 2" />
                    <Apps name="App 3" />
                    <Apps name="App 4" />
                    <Apps name="App 5" />
                    <Apps name="App 6" />
                    <Apps name="App 7" />
                    <Apps name="App 8" />
                    <Apps name="App 9" />
                    <Apps name="App 10" />
                    <Apps name="App 11" />
                    <Apps name="App 12" />
                    <Apps name="App 13" />
                    <Apps name="App 14" />
                    <Apps name="App 15" />
                    <Apps name="App 16" />
                    <Apps name="App 17" />
                    <Apps name="App 18" />
                    <Apps name="App 19" />
                    <Apps name="App 20" />
                    <Apps name="A really long name to see what happendsdawdadwadaw" />
                </span>
            </div>
            <div className="bg-opacity-65 bg-cyan-500 w-full h-14">Hello</div>
        </div>
    );
};

export default Screen;
