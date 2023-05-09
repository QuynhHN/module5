import logo from './logo.svg';
import './App.css';
import {List} from './components/List';
import { Route, Routes } from 'react-router-dom'
import {Create} from './components/Create';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import {Update} from './components/Update';
import * as libraryService from "./service/libraryService";
import React from "react";

function App() {
  return (
      <>
        <Routes>
          <Route path='/' element = {<List />} />
          <Route path='/create' element = {<Create />} />
          <Route path='/edit/:id'
                 element={<Update />}
          />
        </Routes>
        <ToastContainer />
      </>
  );
}

export default App;
