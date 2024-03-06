import useAppContext from "../context/useAppContext";

const Ticket = () => {
  // Maybe use a web socket so that every time someone visits it the number get updated, if you go down that path have it so instead of a ticket its an eye ball and every new view the eyeball blinks in a cool animated way
  // If I am going down the websocket path, I can also set up a messaging app, but I would need moderation which openai has a an API for: https://platform.openai.com/docs/guides/moderation/overview
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
