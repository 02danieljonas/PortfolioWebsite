import { createContext, useState, ReactNode } from "react";
import App from "../types/App.interface";

interface AppContext {
    appList: App[];
    // setAppList: React.Dispatch<React.SetStateAction<App[]>>;
}

export const AppContext = createContext<AppContext>({
    appList: [],
    // setAppList: () => {},
});

interface AppContextProviderProps {
    children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [appList] = useState<App[]>([
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

    const AppValue = { appList };

    return (
        <AppContext.Provider value={AppValue}>
            <>{children}</>
        </AppContext.Provider>
    );
};
