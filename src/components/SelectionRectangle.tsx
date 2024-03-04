import Position from "./types/Position.interface";

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

export default SelectionRectangle;
