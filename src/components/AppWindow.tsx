import { MdOutlineOpenInNew, MdClose } from "react-icons/md";
import { motion, useDragControls } from "framer-motion";

interface AppWindowProps {
    appIcon: string;
    appName: string;
    appUrl: string;
    screenRef: React.RefObject<HTMLDivElement>;
    width: string;
    height: string;
}

const AppWindow = ({
    appIcon,
    appUrl,
    appName,
    screenRef,
    width,
    height,
}: AppWindowProps) => {
    const controls = useDragControls();

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
                    <img src={appIcon} alt="Logo" width={28} height={28} />
                    {appName}
                </div>
                <div className="flex flex-row">
                    <a href={appUrl} target="_blank" className="items-center">
                        <MdOutlineOpenInNew size={28} />
                    </a>
                    <div
                        className="cursor-pointer"
                        onClick={() => {
                            console.error(
                                "You have not implemented closing yet!!!"
                            );
                        }}
                    >
                        <MdClose size={28} />
                    </div>
                </div>
            </div>
            <iframe
                src={appUrl}
                allowFullScreen={false}
                title={`iframe for app: ${appName}`}
                className="flex-auto focus:outline-none"
            />
        </motion.div>
    );
};

export default AppWindow;
