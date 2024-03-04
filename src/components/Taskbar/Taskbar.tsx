import TaskbarLeft from "./TaskbarLeft";
import TaskbarRight from "./TaskbarRight";

const Taskbar = () => {
    return (
        <>
            <div className="bg-opacity-65 bg-cyan-500 w-full h-14 flex justify-between relative z-40">
                <TaskbarLeft />
                <TaskbarRight />
            </div>
        </>
    );
};

export default Taskbar;
