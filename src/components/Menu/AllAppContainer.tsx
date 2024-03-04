import AppShortcut from "../AppShortcut";
import useAppContext from "../context/useAppContext";

interface AllAppContainerProps {
    search: string;
}

const AllAppContainer = ({ search }: AllAppContainerProps) => {
    const { appList } = useAppContext();

    const filteredApps = appList.filter((app) =>
        app.name.toLowerCase().includes(search.trim().toLowerCase())
    );

    return (
        <div className="flex flex-wrap p-5 gap-x-8 gap-y-4">
            {filteredApps.map((el) => (
                <AppShortcut appInfo={el} />
            ))}
        </div>
    );
};

export default AllAppContainer;
