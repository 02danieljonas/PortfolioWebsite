import React from "react";

const Taskbar = () => {
    return (
        <div className="bg-opacity-65 bg-cyan-500 w-full h-14 flex justify-between">
            <div className="h-full p-2 group relative">
                <img
                    src="/logo.svg"
                    alt="SVG Image"
                    className="h-full p-2 hidden group-hover:block absolute z-10 top-0 left-0"
                />
                <img
                    src="/logo-circle.svg"
                    alt="SVG Image"
                    className="h-full z-0"
                />
            </div>

            <div>Other side</div>
        </div>
    );
};

export default Taskbar;
