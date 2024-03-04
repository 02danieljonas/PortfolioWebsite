const Ticket = () => {
    return (
        <div className="flex flex-row ">
            <img className="-m-1" src="/ticket/left.svg" alt="" />
            <img
                className="-m-1 flex-auto"
                src="/ticket/middle.svg"
                alt=""
                style={{ width: "100%" }}
            />
            <img className="-m-1" src="/ticket/right.svg" alt="" />
        </div>
    );
};

export default Ticket;
