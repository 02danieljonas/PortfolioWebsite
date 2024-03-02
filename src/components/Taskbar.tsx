import { useState } from "react";
import Menu from "./Menu/Menu";

const Taskbar = () => {
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

    return (
        <>
            <div
                className="bg-black opacity-30 fixed top-0 bottom-0 left-0 right-0 z-40"
                style={{ display: isMenuActive ? "initial" : "none" }}
                onClick={() => {
                    setIsMenuActive(false);
                }}
            />
            <div className="bg-opacity-65 bg-cyan-500 w-full h-14 flex justify-between relative">
                <div
                    className="absolute bottom-full z-50"
                    style={{ display: isMenuActive ? "initial" : "none" }}
                >
                    <Menu />
                </div>
                <div
                    className="h-full p-2 group relative cursor-pointer"
                    onClick={() => setIsMenuActive(!isMenuActive)}
                >
                    <img
                        src="/logo.svg"
                        alt="SVG Image"
                        className={`h-full p-2 group-hover:opacity-100 absolute z-10 top-0 left-0 transition duration-300 ${
                            isMenuActive
                                ? "opacity-100 rotate-180"
                                : "opacity-0"
                        }`}
                    />
                    <img
                        src="/logo-circle.svg"
                        alt="SVG Image"
                        className="h-full z-0"
                    />
                </div>

                <div>Other side</div>
            </div>
        </>
    );
};

export default Taskbar;
