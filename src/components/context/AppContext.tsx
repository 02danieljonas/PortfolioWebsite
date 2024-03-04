import { createContext, useState, ReactNode, useEffect } from "react";
import App from "../types/App.interface";
import Apps from "./appList.json";

interface AppContext {
    appList: App[];
    openAppsList: number[];
    isMenuActive: boolean;
    setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
    closeApp: (id: number) => void;
    openApp: (id: number) => void;
    appWindowLRU: number[];
    appendAppWindowLRU: (id: number) => void;
}

export const AppContext = createContext<AppContext>({
    appList: [],
    openAppsList: [],
    appWindowLRU: [],
    isMenuActive: false,
    setIsMenuActive: () => {
        throw new Error("setIsMenuActive function not implemented.");
    },
    closeApp: () => {
        throw new Error("closeApp function not implemented.");
    },
    openApp: () => {
        throw new Error("openApp function not implemented.");
    },
    appendAppWindowLRU: () => {
        throw new Error("updateAppWindowLRU function not implemented.");
    },
});

interface AppContextProviderProps {
    children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

    const [appList, setAppList] = useState<App[]>([]);

    useEffect(() => {
        const processedApps: App[] = Apps.map((app, index) => {
            return { ...app, id: index };
        });
        setAppList(processedApps);
    }, []);

    const [openAppsList, setOpenAppsList] = useState<number[]>([]);

    const [appWindowLRU, setAppWindowLRU] = useState<number[]>([]);

    const appendAppWindowLRU = (id: number) => {
        const updatedAppWindowLRU = appWindowLRU.filter(
            (appId) => appId !== id
        );

        if (updatedAppWindowLRU.length > 9) {
            updatedAppWindowLRU.pop();
        }
        setAppWindowLRU([id, ...updatedAppWindowLRU]);
    };

    const removeAppWindowLRU = (id: number) => {
        const updatedAppWindowLRU = appWindowLRU.filter(
            (appId) => appId !== id
        );
        setAppWindowLRU([...updatedAppWindowLRU]);
    };

    const closeApp = (id: number) => {
        const updatedOpenAppsList = openAppsList.filter(
            (appId) => appId !== id
        );
        setOpenAppsList(updatedOpenAppsList);
        removeAppWindowLRU(id);
    };

    const openApp = (id: number) => {
        setIsMenuActive(false);
        appendAppWindowLRU(id);
        if (!openAppsList.includes(id)) {
            setOpenAppsList([...openAppsList, id]);
        }
    };

    const AppValue = {
        appList,
        openAppsList,
        closeApp,
        openApp,
        appWindowLRU,
        appendAppWindowLRU,
        isMenuActive,
        setIsMenuActive,
    };

    return (
        <AppContext.Provider value={AppValue}>
            <>{children}</>
        </AppContext.Provider>
    );
};
