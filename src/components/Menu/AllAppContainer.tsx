import { useState } from "react";
import AppShortcut from "../AppShortcut";

interface AllAppContainerProps {
    search: string;
}

interface App {
    name: string;
    id: number;
}

const AllAppContainer = ({ search }: AllAppContainerProps) => {
    const [appNames] = useState<App[]>([
        { id: 1, name: "Minecraft" },
        { id: 2, name: "Microsoft Word" },
        { id: 3, name: "Google Chrome" },
        { id: 4, name: "VS Code" },
        { id: 5, name: "File Explorer" },
        { id: 6, name: "Resume" },
        { id: 7, name: "Firefox" },
        { id: 8, name: "Notes" },
        { id: 9, name: "Calculator" },
        { id: 10, name: "CodeClash" },
        { id: 11, name: "Memory Game" },
        { id: 12, name: "Youtube" },
        { id: 13, name: "Youtube" },
        { id: 14, name: "Youtube" },
    ]);

    const filteredApps = appNames.filter((app) =>
        app.name.toLowerCase().includes(search.trim().toLowerCase())
    );

    return (
        <div className="flex flex-wrap p-5 gap-x-8 gap-y-4">
            {filteredApps.map((e) => (
                <AppShortcut name={e.name} key={e.id} />
            ))}
        </div>
    );
};

export default AllAppContainer;
