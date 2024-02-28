import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import AppContainer from "./AppContainer";

const Menu = () => {
    const [filterString, setFilterString] = useState<string>("");
    return (
        <div className="flex flex-col w-96 bg-gradient-to-r from-cyan-500 to-blue-500 h-[50vh] m-5 rounded p-2">
            <div className="flex h-10 bg-blue-600 rounded-xl px-3 py-2 text-white border-b-2">
                <IoSearch className="text-white h-full w-auto" />
                <input
                    type="search"
                    name="Search app"
                    className="bg-transparent"
                    placeholder="Search for apps"
                    value={filterString}
                    onChange={(e) => {
                        setFilterString(e.target.value);
                    }}
                />
            </div>
            <div className="flex-auto">
                <AppContainer />
            </div>
            <div className="flex justify-between text-white">
                <div className="flex gap-2">
                    <FaUser className="h-full" />
                    <div>Daniel Jonas</div>
                </div>
                <FaGear className="h-full" />
            </div>
        </div>
    );
};

export default Menu;
