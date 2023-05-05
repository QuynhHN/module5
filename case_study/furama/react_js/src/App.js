import logo from './logo.svg';
import './App.css';
// import './Header';
import React from "react";
import {Header} from "./component/Header";
import {Footer} from "./component/Footer";
import {Home} from "./component/Home";
import {CreateFacility} from "./component/CreateFacility";
import {ListFacility} from "./component/ListFacility";
import {UpdateFacility} from "./component/UpdateFacility";
import {ListCustomer} from "./component/ListCustomer";
import {CreateCustomer} from "./component/CreateCustomer";
import {UpdateCustomer} from "./component/UpdateCustomer";
import {ListContract} from "./component/ListContract";
import {CreateContract} from "./component/CreateContract";

function App() {
    return (
        <>
            {/*<Header/>*/}
            {/*<Home/>*/}
            {/*<Footer/>*/}
            {/*<CreateFacility/>*/}
            {/*<ListFacility/>*/}
            {/*<UpdateFacility/>*/}
            {/*<ListCustomer/>*/}
            {/*<CreateCustomer/>*/}
            {/*<UpdateCustomer/>*/}
            <ListContract/>
            {/*<CreateContract/>*/}
        </>
    );
}

export default App;
