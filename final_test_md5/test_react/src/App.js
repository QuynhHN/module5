import logo from './logo.svg';
import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Product} from "./components/Product"
import {Update} from "./components/Update"
import {Create} from "./components/Create";
function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Product/>}/>
                <Route path='/create' element={<Create/>}/>
                <Route path='/update' element={<Update/>}/>
            </Routes>
            <ToastContainer/>
        </>
    );
}

export default App;
