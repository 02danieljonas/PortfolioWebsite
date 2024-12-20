import useAppContext from "../../context/useAppContext";
import Numerals from "./Numerals";
import numToBase20Arr from "./numToBase20Arr";

const Ticket = () => {
    // Maybe use a web socket so that every time someone visits it the number get updated, if you go down that path have it so instead of a ticket its an eye ball and every new view the eyeball blinks in a cool animated way
    // If I am going down the websocket path, I can also set up a messaging app, but I would need moderation which openai has a an API for: https://platform.openai.com/docs/guides/moderation/overview
    const { visitorNumber } = useAppContext();
    const base20 = numToBase20Arr(visitorNumber);

    return (
        <div className="flex flex-row ">
            <div className="-m-1 h-full">
                <img src="/ticket/left.svg" alt="" />
            </div>
            <div className="-m-1 flex-auto h-full relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                    <Numerals numbers={base20} />
                </div>
                <img src="/ticket/middle.svg" alt="" />
            </div>
            <div className="-m-1 h-full">
                <img src="/ticket/right.svg" alt="" />
            </div>
        </div>
    );
};

export default Ticket;
