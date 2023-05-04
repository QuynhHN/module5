import './App.css';
import {useState} from "react";
import {CounterOne} from "./component/CounterOne";
import {CounterTwo} from "./component/CounterTwo";

function App() {
    return (
        <>
            <CounterOne/>
            <CounterTwo/>
        </>
    );
}

export default App;
