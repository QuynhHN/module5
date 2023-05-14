import logo from './logo.svg';
import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";
import {Book} from "./components/Book"
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Book/>}/>
            </Routes>
            <ToastContainer/>
        </>
    );
}

export default App;
