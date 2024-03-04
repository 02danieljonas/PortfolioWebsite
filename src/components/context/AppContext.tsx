import { createContext, useState, ReactNode, useEffect } from "react";
import App from "../types/App.interface";
import Apps from "./appList.json";

interface AppContext {
    appList: App[];
    openAppsList: number[];
    closeApp: (id: number) => void;
    openApp: (id: number) => void;
}

export const AppContext = createContext<AppContext>({
    appList: [],
    openAppsList: [],
    closeApp: () => null,
    openApp: () => null,
});

interface AppContextProviderProps {
    children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [appList, setAppList] = useState<App[]>([]);

    const [openAppsList, setOpenAppsList] = useState<number[]>([]);

    useEffect(() => {
        const processedApps: App[] = Apps.map((app, index) => {
            return { ...app, id: index };
        });
        setAppList(processedApps);
    }, []);

    const closeApp = (id: number) => {
        const updatedOpenAppsList = openAppsList.filter(
            (appId) => appId !== id
        );
        setOpenAppsList(updatedOpenAppsList);
    };

    const openApp = (id: number) => {
        if (!openAppsList.includes(id)) {
            setOpenAppsList([...openAppsList, id]);
        }
    };

    const AppValue = { appList, openAppsList, closeApp, openApp };

    return (
        <AppContext.Provider value={AppValue}>
            <>{children}</>
        </AppContext.Provider>
    );
};
