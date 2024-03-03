import AppShortcut from "../AppShortcut";
import App from "../types/App.interface";

interface AllAppContainerProps {
    search: string;
}

const AllAppContainer = ({ search }: AllAppContainerProps) => {
    const appList: App[] = [];

    const filteredApps = appList.filter((app) =>
        app.name.toLowerCase().includes(search.trim().toLowerCase())
    );

    return (
        <div className="flex flex-wrap p-5 gap-x-8 gap-y-4">
            {filteredApps.map((e) => (
                <AppShortcut
                    name={e.name}
                    key={e.id}
                    tags={e.tags}
                    path={e.path}
                    img={e.img}
                    url={e.url}
                />
            ))}
        </div>
    );
};

export default AllAppContainer;
