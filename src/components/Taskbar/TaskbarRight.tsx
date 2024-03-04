import { useEffect, useState } from "react";

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
        <div className="flex flex-row text-white text-right pr-4">
            {/* TODO fix centering on time and date */}
            <div>
                <h2>{time}</h2>
                <h2>{date}</h2>
            </div>
        </div>
    );
};

export default TaskbarRight;
