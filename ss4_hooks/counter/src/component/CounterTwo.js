import {useState} from "react";

export function CounterTwo() {
    const [countOne, setCountOne] = useState(0);
    const addHandleOne = () => {
        setCountOne(countOne + 1)
    }
    return (
        <>
            <h4>Count : {countOne}</h4>
            <button onClick={() => addHandleOne()}>add 2</button>
        </>
    )

}