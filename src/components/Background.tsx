const Background = () => {
    return (
        <div
            className={`absolute bg-background1 w-screen h-screen bg-cover `}
            onContextMenu={(e) => {
                e.preventDefault(); // prevent the default behaviour when right clicked
                console.log("Right Click");
            }}
            onDoubleClick={() => {
                console.log("hello");
            }}
        ></div>
    );
};

export default Background;
