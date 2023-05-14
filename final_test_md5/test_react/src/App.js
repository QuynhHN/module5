import logo from './logo.svg';
import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";
import {Book} from "./components/Book"
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Create} from "./components/Create";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Book/>}/>
                <Route path='/create' element={<Create/>}/>
            </Routes>
            <ToastContainer/>
        </>
    );
}

export default App;
