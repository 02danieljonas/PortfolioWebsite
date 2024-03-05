import {
    createContext,
    useState,
    ReactNode,
    useEffect,
    SetStateAction,
} from "react";
import App from "../types/App.interface";
import Apps from "./appList.json";
import Position from "../types/Position.interface";

type SingleSelectedApp = null | number;

// TODO merge startPos and endPos into a more cohesive variable
// TODO merge setStartPos and setEndPos into a more cohesive function, my call it setSelectPos(x, y, 1), third variable represents if startPos or endPos should be modified

interface AppContext {
    appList: App[];
    visitorNumber: number;
    isVNumLoading: boolean;
    openAppsList: number[];
    isMenuActive: boolean;
    setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
    closeApp: (id: number) => void;
    openApp: (id: number) => void;
    appWindowLRU: number[];
    appendAppWindowLRU: (id: number) => void;
    startPos: Position;
    setStartPos: React.Dispatch<React.SetStateAction<Position>>;
    isSelectionActive: boolean;
    setIsSelectionActive: React.Dispatch<SetStateAction<boolean>>;
    endPos: Position;
    setEndPos: React.Dispatch<React.SetStateAction<Position>>;
    singleSelectedApp: SingleSelectedApp;
    setSingleSelectedApp: React.Dispatch<
        React.SetStateAction<SingleSelectedApp>
    >;
}

export const AppContext = createContext<AppContext>({
    appList: [],
    visitorNumber: 1,
    isVNumLoading: true,
    openAppsList: [],
    appWindowLRU: [],
    isMenuActive: false,
    startPos: { x: 0, y: 0 },
    endPos: { x: 0, y: 0 },
    singleSelectedApp: null,
    isSelectionActive: false,
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
        throw new Error("appendAppWindowLRU function not implemented.");
    },
    setStartPos: () => {
        throw new Error("setStartPos function not implemented.");
    },
    setIsSelectionActive: () => {
        throw new Error("setIsSelectionActive function not implemented.");
    },
    setEndPos: () => {
        throw new Error("setEndPos function not implemented.");
    },
    setSingleSelectedApp: () => {
        throw new Error("setSingleSelectedApp function not implemented.");
    },
});

interface AppContextProviderProps {
    children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [singleSelectedApp, setSingleSelectedApp] =
        useState<SingleSelectedApp>(null);

    const [startPos, setStartPos] = useState<Position>({ x: 0, y: 0 });
    const [isSelectionActive, setIsSelectionActive] = useState<boolean>(false);
    const [endPos, setEndPos] = useState<Position>({ x: 0, y: 0 });

    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

    const [appList, setAppList] = useState<App[]>([]);

    const [visitorNumber, setVisitorNumber] = useState<number>(1);
    const [isVNumLoading, setIsVNumLoading] = useState(true);

    useEffect(() => {
        if (window.frameElement === null) {
            setVisitorNumber(305);
            setIsVNumLoading(false);
        } else {
            setVisitorNumber(0);
            setIsVNumLoading(false);
        }
    }, []);

    useEffect(() => {
        const processedApps: App[] = Apps.map((app, index) => {
            if (!app.height) app.height = 500;
            if (!app.width) app.width = 400;
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

    const AppValue: AppContext = {
        appList,
        visitorNumber,
        isVNumLoading,
        openAppsList,
        closeApp,
        openApp,
        appWindowLRU,
        appendAppWindowLRU,
        isMenuActive,
        setIsMenuActive,
        startPos,
        setStartPos,
        isSelectionActive,
        setIsSelectionActive,
        endPos,
        setEndPos,
        singleSelectedApp,
        setSingleSelectedApp,
    };

    return (
        <AppContext.Provider value={AppValue}>
            <>{children}</>
        </AppContext.Provider>
    );
};
