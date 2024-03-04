import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import AllAppContainer from "./AllAppContainer";
import useAppContext from "../../context/useAppContext";

const Menu = () => {
    const [filterString, setFilterString] = useState<string>("");
    const { isMenuActive, setIsMenuActive } = useAppContext();
    return (
        <>
            <div
                className="bg-black opacity-30 fixed top-0 bottom-0 left-0 right-0 z-40"
                style={{ display: isMenuActive ? "initial" : "none" }}
                onClick={() => {
                    setIsMenuActive(false);
                }}
            />
            <div
                className="absolute bottom-full z-50"
                style={{ display: isMenuActive ? "initial" : "none" }}
            >
                <div className="z-10 flex flex-col w-96 bg-gradient-to-r from-cyan-500 to-blue-500 h-[50vh] m-5 rounded p-2">
                    <div className="relative h-10 ">
                        <IoSearch className="absolute p-2 text-white h-full w-auto top-1/2 -translate-y-1/2 z-0" />
                        <input
                            type="search"
                            name="Search app"
                            className="bg-blue-600 pr-2 pl-10 h-full w-full rounded-xl text-white border-b-2 focus:border-black focus:outline-none"
                            placeholder="Search for apps"
                            value={filterString}
                            onChange={(e) => {
                                setFilterString(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex-1 overflow-auto">
                        <AllAppContainer search={filterString} />
                    </div>
                    <div className="flex justify-between text-white">
                        <div className="flex gap-2">
                            <FaUser className="h-full" />
                            <div>Daniel Jonas</div>
                        </div>
                        <FaGear className="h-full" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;
