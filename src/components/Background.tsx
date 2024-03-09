const Background = () => {
    return (
        <div
            className={`absolute bg-background1 w-screen h-screen bg-cover `}
            onDoubleClick={() => {
                console.log("hello");
            }}
        ></div>
    );
};

export default Background;
