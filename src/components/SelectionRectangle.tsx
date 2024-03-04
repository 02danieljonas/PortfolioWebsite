import { useState } from "react";

interface Position {
    x: number;
    y: number;
}

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
            className="fixed bg-cyan-500 opacity-40 border-2 border-blue-950 pointer-events-none"
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
    const [startPos, setStartPos] = useState<Position>({ x: 0, y: 0 });
    const [isSelectionActive, setIsSelectionActive] = useState<boolean>(true);
    const [endPos, setEndPos] = useState<Position>({ x: 0, y: 0 });

    return (
        <div
            className="absolute top-0 left-0 right-0 bottom-0 z-0"
            onMouseDown={(e) => {
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
                setIsSelectionActive(false);
            }}
        >
            {isSelectionActive && (
                <SelectionRectangle startPos={startPos} endPos={endPos} />
            )}
        </div>
    );
};

export default SelectionRectangleContainer;
