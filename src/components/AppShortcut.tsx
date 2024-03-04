import useAppContext from "./context/useAppContext";
import App from "./types/App.interface";

interface AppShortcutProps {
    appInfo: App;
}

const AppShortcut = ({ appInfo }: AppShortcutProps) => {
    const { openApp } = useAppContext();
    return (
        <div
            className="relative pb-8 cursor-pointer w-16"
            onClick={() => openApp(appInfo.id)}
        >
            <div className="bg-white absolute opacity-15 w-full h-full"></div>
            <div className="w-12 h-12 p-2 text-black mx-auto">
                <img src={appInfo.img} alt={`Image of ${appInfo.name}`} />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 line-clamp-2 text-center mx-auto text-white leading-4">
                {appInfo.name}
            </div>
        </div>
    );
};

export default AppShortcut;
