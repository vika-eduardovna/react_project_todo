import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
        console.log(count);
    };
    const decrement = () => {
        setCount(count -1);
        console.log(count);
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>

    )
}
