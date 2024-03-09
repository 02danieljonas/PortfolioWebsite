import Position from "./types/Position.interface";
import useAppContext from "./context/useAppContext";
import { useState } from "react";

interface SelectionRectangleProps {
    startPos: Position;
    endPos: Position;
}

const SelectionRectangle = ({ startPos, endPos }: SelectionRectangleProps) => {
    const smallX = Math.min(startPos.x, endPos.x);
    const smallY = Math.min(startPos.y, endPos.y);
    const bigX = Math.max(startPos.x, endPos.x);
    const bigY = Math.max(startPos.y, endPos.y);
    return (
        <div
            className="fixed bg-cyan-500 opacity-40 border-2 border-blue-950 pointer-events-none z-[1]"
            style={{
                top: smallY,
                left: smallX,
                width: bigX - smallX,
                height: bigY - smallY,
            }}
        ></div>
    );
};

const SelectionRectangleContainer = () => {
    const {
        startPos,
        endPos,
        isSelectionActive,
        setIsSelectionActive,
        setStartPos,
        setEndPos,
        setSingleSelectedApp,
    } = useAppContext();
    const [isContextMenuActive, setIsContextMenuActive] =
        useState<boolean>(false);

    const [clickPosition, setClickPosition] = useState<Position>({
        x: 0,
        y: 0,
    });
    return (
        <>
            {isSelectionActive && (
                <SelectionRectangle startPos={startPos} endPos={endPos} />
            )}
            <div
                className={`absolute z-50 top-0 bottom-0 right-0 left-0 bg-black opacity-10 ${
                    isContextMenuActive || "hidden"
                }`}
                onClick={() => {
                    console.log("Should hide");

                    setIsContextMenuActive(false);
                }}
            ></div>
            <div
                className={`absolute rounded-lg bg-[#2c2c2c] p-10 text-white w-50 h-40 z-[51] ${
                    isContextMenuActive || "hidden"
                }`}
                style={{
                    top: clickPosition.y,
                    left: clickPosition.x,
                }}
            >
                <h1>You can right click again for normal functionality</h1>
                Photo by{" "}
                <a href="https://unsplash.com/@lucamicheli?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                    Luca Micheli
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/photos/photo-of-mountain-ruWkmt3nU58?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                    Unsplash
                </a>
                <br />
                <a
                    href="https://unsplash.com/photos/photo-of-mountain-ruWkmt3nU58"
                    target="_blank"
                >
                    Click here for background image
                </a>
                {/* <div>Click here for new background image</div> */}
            </div>
            <div
                className={`absolute top-0 left-0 right-0 bottom-0 ${
                    isSelectionActive ? "z-[100]" : "z-0"
                } `}
                onContextMenu={(e) => {
                    e.preventDefault();
                    setIsContextMenuActive(true);
                    setClickPosition({
                        x: e.nativeEvent.offsetX,
                        y: e.nativeEvent.offsetY,
                    });
                    console.log("Right Click on SR");
                }}
                onMouseDown={(e) => {
                    setSingleSelectedApp(null);
                    setIsSelectionActive(true);
                    startPos.x = e.nativeEvent.offsetX;
                    startPos.y = e.nativeEvent.offsetY;
                    setStartPos({ ...startPos });
                    setEndPos({ ...startPos });
                }}
                onMouseMove={(e) => {
                    if (!isSelectionActive) {
                        return;
                    }
                    endPos.x = e.nativeEvent.offsetX;
                    endPos.y = e.nativeEvent.offsetY;
                    setEndPos({ ...endPos });
                }}
                onMouseUp={() => {
                    setSingleSelectedApp(null);
                    setIsSelectionActive(false);
                }}
            />
        </>
    );
};

export default SelectionRectangleContainer;
