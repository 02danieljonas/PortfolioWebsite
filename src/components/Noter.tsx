import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    // Function to increment count
    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    );
}

export default Counter;
