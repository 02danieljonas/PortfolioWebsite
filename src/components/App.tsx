import React, { ReactNode } from "react";

interface AppsProps {
    name: ReactNode;
}

const Apps = ({ name }: AppsProps) => {
    return (
        <div className="relative pb-8">
            <div className="w-12 h-12 bg-white p-2 text-black "></div>
            <div className="absolute overflow-hidden w-24 text-center left-6 -translate-x-1/2 bg text-white">
                {name}
            </div>
        </div>
    );
};

export default Apps;
