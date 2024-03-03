import Screen from "./components/Screen";
import { AppContextProvider } from "./components/context/AppContext";

function App() {
    return (
        <AppContextProvider>
            <Screen />
        </AppContextProvider>
    );
}

export default App;
