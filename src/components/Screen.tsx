import { useRef } from "react";
import DragAppShortcut from "./DragAppShortcut";
import AppWindow from "./AppWindow";
import Taskbar from "./Taskbar/Taskbar";
import useAppContext from "./context/useAppContext";
import SelectionRectangle from "./SelectionRectangle";
import Background from "./Background";
import { useDragControls } from "framer-motion";

const Screen = () => {
    const screenRef = useRef<HTMLDivElement>(null);
    const { appList, openAppsList } = useAppContext();

    const filteredApps = appList.filter((app) => app.tags.includes("screen"));

    const controls = useDragControls();

    return (
        // TODO use unsplash API to

        // TODO look into this for mouse pass through: http://web.archive.org/web/20160401052004/www.vinylfox.com/forwarding-mouse-events-through-layers/
        //TODO get the position of the click, then call document.elementFromPoint on the position of the click, simulate click on that element.
        // TODO you could do this on every overlay
        //! can't do this, The overlay would need to close before the document.elementFromPoint could capture the element underneath
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
                            <DragAppShortcut
                            controls={controls}
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
