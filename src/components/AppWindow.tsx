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
    const { closeApp } = useAppContext();

    return (
        <motion.div
            className="bg-gray-400 absolute rounded overflow-hidden flex flex-col z-20 text-white select-none"
            style={{ width: width, height: height }}
            drag
            dragControls={controls}
            dragConstraints={screenRef}
            dragElastic={1}
            dragMomentum={false}
            dragListener={false}
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
                        className="cursor-pointer"
                        onClick={() => {
                            closeApp(appInfo.id);
                        }}
                    >
                        <MdClose size={28} />
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
