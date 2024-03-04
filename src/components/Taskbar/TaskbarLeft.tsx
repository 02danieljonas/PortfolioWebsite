import useAppContext from "../context/useAppContext";
import Menu from "./Menu/Menu";

const TaskbarLeft = () => {
    const { isMenuActive, setIsMenuActive } = useAppContext();
    return (
        <>
            <Menu />
            
            <div
                className="h-full p-2 group relative cursor-pointer"
                onClick={() => setIsMenuActive(!isMenuActive)}
            >
                <img
                    src="/logo.svg"
                    alt="SVG Image"
                    className={`h-full p-2 group-hover:opacity-100 absolute z-10 top-0 left-0 transition duration-300 ${
                        isMenuActive ? "opacity-100 rotate-180" : "opacity-0"
                    }`}
                />
                <img
                    src="/logo-circle.svg"
                    alt="SVG Image"
                    className="h-full z-0"
                />
            </div>
        </>
    );
};

export default TaskbarLeft;
