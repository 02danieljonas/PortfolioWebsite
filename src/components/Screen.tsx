import { useRef } from "react";
import AppShortcut from "./AppShortcut";
import AppWindow from "./AppWindow";
import Taskbar from "./Taskbar/Taskbar";
import useAppContext from "./context/useAppContext";
import SelectionRectangle from "./SelectionRectangle";
import Background from "./Background";

const Screen = () => {
    const screenRef = useRef<HTMLDivElement>(null);
    const { appList, openAppsList } = useAppContext();

    const filteredApps = appList.filter((app) => app.tags.includes("screen"));

    return (
        // TODO use unsplash API to

        // TODO look into this for mouse pass through: http://web.archive.org/web/20160401052004/www.vinylfox.com/forwarding-mouse-events-through-layers/
        //TODO get the position of the click, then call document.elementFromPoint on the position of the click, simulate click on that element. 
        // TODO you could do this on every overlay
        <>
            <div
                ref={screenRef}
                className="w-screen h-screen flex flex-col l overflow-hidden relative"
            >
                <Background />
                <SelectionRectangle />
                {openAppsList.map((e) => {
                    return (
                        <AppWindow
                            key={appList[e].id}
                            screenRef={screenRef}
                            appInfo={appList[e]}
                        />
                    );
                })}

                <div className="w-full h-[calc(100%-3.5rem)] p-6 overflow-hidden">
                    <span className="h-full flex px-1 gap-x-8 gap-y-4 flex-wrap flex-col items-start place-content-start">
                        {filteredApps.map((el) => (
                            <AppShortcut
                                appInfo={el}
                                key={el.id}
                                isHighlightable
                            />
                        ))}
                    </span>
                </div>
                <Taskbar />
            </div>
        </>
    );
};

export default Screen;
