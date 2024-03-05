import useAppContext from "../context/useAppContext";

const Ticket = () => {
    const { visitorNumber } = useAppContext();

    return (
        <div className="flex flex-row ">
            <div className="-m-1" style={{ height: "100%" }}>
                <img src="/ticket/left.svg" alt="" />
            </div>
            <div className="-m-1 flex-auto" style={{ height: "100%" }}>
                <h1 className="absolute ">{visitorNumber}</h1>
                <img src="/ticket/middle.svg" alt="" />
            </div>
            <div className="-m-1" style={{ height: "100%" }}>
                <img src="/ticket/right.svg" alt="" />
            </div>
        </div>
    );
};

export default Ticket;
