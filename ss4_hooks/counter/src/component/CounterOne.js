import {useState} from "react";

export function CounterOne() {
    const [count, setCount] = useState(0);
    const addHandle = () => {
        setCount(count + 1)
    }
    return (
        <>
            <h4>Count : {count}</h4>
            <button onClick={() => addHandle()}>Add 1</button>
        </>
    )
}