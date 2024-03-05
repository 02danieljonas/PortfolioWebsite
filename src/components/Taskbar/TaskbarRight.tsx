import { useEffect, useState } from "react";
import Ticket from "./Ticket";

const timeOption: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
};

const getTime = () => {
    return new Intl.DateTimeFormat([], timeOption).format(new Date());
};

const getDate = () => {
    return new Date().toLocaleDateString();
};

const TaskbarRight = () => {
    const [date, setDate] = useState<string>(getDate());
    const [time, setTime] = useState<string>(getTime());

    useEffect(() => {
        const now = new Date();
        const secondsUntilNextMinute = 61 - now.getSeconds();

        const timerID = setInterval(tick, secondsUntilNextMinute * 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(getDate());
        setTime(getTime());
    }

    return (
        <>
            <div className="fixed w-40 h-5 left-1/2 right-1/2">
                <Ticket />
            </div>
            <div className="flex flex-row text-white text-right pr-4">
                {/* TODO fix centering on time and date */}
                <div>
                    <h2>{time}</h2>
                    <h2>{date}</h2>
                </div>
            </div>
        </>
    );
};

export default TaskbarRight;
