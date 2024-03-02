import { useState } from "react";
import AppShortcut from "../AppShortcut";

interface AllAppContainerProps {
    search: string;
}

interface App {
    name: string;
    id: number;
    tags: string[];
    path: string;
    img: string;
    url: string;
}

const AllAppContainer = ({ search }: AllAppContainerProps) => {
    const [appNames] = useState<App[]>([
        {
            id: 1,
            name: "Example",
            tags: ["menu-pinned"],
            path: "",
            img: "/app-icons/example.jpg",
            url: "https://example.com/",
        },
        { id: 2, name: "Microsoft Word", tags: [], path: "", img: "", url: "" },
        { id: 3, name: "Google Chrome", tags: [], path: "", img: "", url: "" },
        { id: 4, name: "VS Code", tags: [], path: "", img: "", url: "" },
        { id: 5, name: "File Explorer", tags: [], path: "", img: "", url: "" },
        { id: 6, name: "Resume", tags: [], path: "", img: "", url: "" },
        { id: 7, name: "Firefox", tags: [], path: "", img: "", url: "" },
        { id: 8, name: "Notes", tags: [], path: "", img: "", url: "" },
        { id: 9, name: "Calculator", tags: [], path: "", img: "", url: "" },
        { id: 10, name: "CodeClash", tags: [], path: "", img: "", url: "" },
        { id: 11, name: "Memory Game", tags: [], path: "", img: "", url: "" },
        { id: 12, name: "Youtube", tags: [], path: "", img: "", url: "" },
        { id: 13, name: "Github", tags: [], path: "", img: "", url: "" },
        { id: 14, name: "Minecraft", tags: [], path: "", img: "", url: "" },
    ]);

    const filteredApps = appNames.filter((app) =>
        app.name.toLowerCase().includes(search.trim().toLowerCase())
    );

    return (
        <div className="flex flex-wrap p-5 gap-x-8 gap-y-4">
            {filteredApps.map((e) => (
                <AppShortcut name={e.name} key={e.id} tags={e.tags} path={e.path} img={e.img} url={e.url} />
            ))}
        </div>
    );
};

export default AllAppContainer;
