import { MdOutlineOpenInNew, MdClose } from "react-icons/md";
import { motion, useDragControls } from "framer-motion";
import useAppContext from "./context/useAppContext";
import App from "./types/App.interface";

interface AppWindowProps {
    appInfo: App;
    screenRef: React.RefObject<HTMLDivElement>;
    width: string;
    height: string;
}

const AppWindow = ({ appInfo, screenRef, width, height }: AppWindowProps) => {
    const controls = useDragControls();
    const { closeApp, appendAppWindowLRU, appWindowLRU } = useAppContext();

    return (
        <motion.div
            className="bg-gray-400 absolute rounded overflow-hidden flex flex-col text-white select-none"
            style={{
                width: width,
                height: height,
                zIndex: 20 + (10 - appWindowLRU.indexOf(appInfo.id)),
            }}
            drag
            dragControls={controls}
            dragConstraints={screenRef}
            dragElastic={1}
            dragMomentum={false}
            dragListener={false}
            onClick={(e) => {
                if (
                    e.target instanceof HTMLElement &&
                    e.target.classList.contains("do-not-update-appWindowLRU")
                ) {
                    return;
                }
                appendAppWindowLRU(appInfo.id);
            }}
        >
            <div
                className="bg-gray-500 h-7 flex justify-between"
                onPointerDown={(e) => {
                    controls.start(e);
                }}
            >
                <div className="flex flex-row pointer-events-none">
                    <img src={appInfo.img} alt="Logo" width={28} height={28} />
                    {}
                </div>
                <div className="flex flex-row">
                    <a
                        href={appInfo.url}
                        target="_blank"
                        className="items-center"
                    >
                        <MdOutlineOpenInNew size={28} />
                    </a>
                    <div
                        className="cursor-pointer do-not-update-appWindowLRU"
                        onClick={() => {
                            closeApp(appInfo.id);
                        }}
                    >
                        <MdClose size={28} className="pointer-events-none" />
                    </div>
                </div>
            </div>
            <iframe
                src={appInfo.url}
                allowFullScreen={false}
                title={`iframe for app: ${appInfo.name}`}
                className="flex-auto focus:outline-none"
            />
        </motion.div>
    );
};

export default AppWindow;
