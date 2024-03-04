import App from "./types/App.interface";

interface AppShortcutProps {
    appInfo: App;
}

const AppShortcut = ({ appInfo }: AppShortcutProps) => {
    return (
        <div className="relative pb-8">
            <div className="w-12 h-12 bg-white p-2 text-black ">
                <img src={appInfo.img} alt={`Image of ${appInfo.name}`} />
            </div>
            <div className="absolute overflow-hidden w-24 text-center left-6 -translate-x-1/2 bg text-white leading-4">
                {appInfo.name}
            </div>
        </div>
    );
};

export default AppShortcut;
