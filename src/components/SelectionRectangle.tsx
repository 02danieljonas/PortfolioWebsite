import Position from "./types/Position.interface";
import useAppContext from "./context/useAppContext";

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

    return (
        <>
            {isSelectionActive && (
                <SelectionRectangle startPos={startPos} endPos={endPos} />
            )}
            <div
                className={`absolute top-0 left-0 right-0 bottom-0 ${
                    isSelectionActive ? "z-[100]" : "z-0"
                } `}
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
            ></div>
        </>
    );
};

export default SelectionRectangleContainer;
