import {Component} from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {facilityData} from "../data/FacilityData";
import {accompaniedService} from "../data/FacilityData";

export class ListFacility extends Component{
    render() {
        return(
            <>
                <>
                    <Header/>
                    </>
                <>
                    <>
                        <div className="row mx-0" style={{ marginTop: 96 }}>
                            <img
                                className="img-fluid px-0"
                                style={{ height: 400 }}
                                src="https://cdn.azvd.asia/images/furama/draf1-2.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <h2 className="text-center pt-4" style={{ fontFamily: '"Bahnschrift"' }}>
                                Danh sách phòng
                            </h2>
                        </div>
                        {/*thêm mới*/}
                        <div>
                            <button
                                type="button"
                                className="btn btn-success"
                                style={{
                                    marginBottom: "2%",
                                    marginLeft: "8%",
                                    backgroundColor: "#a5eee6"
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    color="black"
                                    className="bi bi-cart4"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                </svg>
                                <a href="#" style={{ textDecoration: "none", color: "#1d1d1d" }}>
                                    <i className="bi bi-cart4"> Thêm phòng mới</i>
                                </a>
                            </button>
                        </div>
                        <div className="row mx-0 mt-3 py-1" style={{ padding: "0 100px" }}>
                            {facilityData.map((facility,index) => (
                                <div className="col-4 d-flex justify-content-center">
                                    <div className="card" style={{ width: 380 }}>
                                        <img
                                            src={facility.img}
                                            className="card-img-top"
                                            alt="..."
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{facility.nameFacility}</h5>
                                            <p className="card-text">Diện tích phòng: {facility.usableArea} </p>
                                            <p>Dịch vụ đi kèm: {accompaniedService.find(
                                                (accompaniedService) => accompaniedService.id===facility.accompaniedService) ?.name
                                            }</p>
                                            {/*button edit, delete*/}
                                            <a href="#" className="btn btn-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-pencil-square"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                                    />
                                                </svg>
                                            </a>
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-trash"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                </svg>
                                            </button>
                                            {/* Modal xóa */}
                                            <div
                                                className="modal fade"
                                                id="exampleModal"
                                                tabIndex={-1}
                                                aria-labelledby="exampleModalLabel"
                                                aria-hidden="true"
                                            >
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">
                                                                Modal title
                                                            </h5>
                                                            <button
                                                                type="button"
                                                                className="btn-close"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close"
                                                            />
                                                        </div>
                                                        <div className="modal-body">...</div>
                                                        <div className="modal-footer">
                                                            <button
                                                                type="button"
                                                                className="btn btn-secondary"
                                                                data-bs-dismiss="modal"
                                                            >
                                                                Close
                                                            </button>
                                                            <button type="button" className="btn btn-primary">
                                                                Save changes
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/*<div className="col-4 d-flex justify-content-center">*/}
                            {/*    <div className="card" style={{ width: 380 }}>*/}
                            {/*        <img*/}
                            {/*            src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-768x497.jpg"*/}
                            {/*            className="card-img-top"*/}
                            {/*            alt="..."*/}
                            {/*        />*/}
                            {/*        <div className="card-body">*/}
                            {/*            <h5 className="card-title">PHÒNG SUITE HƯỚNG BIỂN</h5>*/}
                            {/*            <p className="card-text">Diện tích phòng: 85.8m2 </p>*/}
                            {/*            /!*button edit, delete*!/*/}
                            {/*            <a href="#" className="btn btn-primary">*/}
                            {/*                <svg*/}
                            {/*                    xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                    width={16}*/}
                            {/*                    height={16}*/}
                            {/*                    fill="currentColor"*/}
                            {/*                    className="bi bi-pencil-square"*/}
                            {/*                    viewBox="0 0 16 16"*/}
                            {/*                >*/}
                            {/*                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />*/}
                            {/*                    <path*/}
                            {/*                        fillRule="evenodd"*/}
                            {/*                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"*/}
                            {/*                    />*/}
                            {/*                </svg>*/}
                            {/*            </a>*/}
                            {/*            <button*/}
                            {/*                type="button"*/}
                            {/*                className="btn btn-danger"*/}
                            {/*                data-bs-toggle="modal"*/}
                            {/*                data-bs-target="#exampleModal"*/}
                            {/*            >*/}
                            {/*                <svg*/}
                            {/*                    xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                    width={16}*/}
                            {/*                    height={16}*/}
                            {/*                    fill="currentColor"*/}
                            {/*                    className="bi bi-trash"*/}
                            {/*                    viewBox="0 0 16 16"*/}
                            {/*                >*/}
                            {/*                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />*/}
                            {/*                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />*/}
                            {/*                </svg>*/}
                            {/*            </button>*/}
                            {/*            /!* Modal xóa *!/*/}
                            {/*            <div*/}
                            {/*                className="modal fade"*/}
                            {/*                id="exampleModal"*/}
                            {/*                tabIndex={-1}*/}
                            {/*                aria-labelledby="exampleModalLabel"*/}
                            {/*                aria-hidden="true"*/}
                            {/*            >*/}
                            {/*                <div className="modal-dialog">*/}
                            {/*                    <div className="modal-content">*/}
                            {/*                        <div className="modal-header">*/}
                            {/*                            <h5 className="modal-title" id="exampleModalLabel">*/}
                            {/*                                Modal title*/}
                            {/*                            </h5>*/}
                            {/*                            <button*/}
                            {/*                                type="button"*/}
                            {/*                                className="btn-close"*/}
                            {/*                                data-bs-dismiss="modal"*/}
                            {/*                                aria-label="Close"*/}
                            {/*                            />*/}
                            {/*                        </div>*/}
                            {/*                        <div className="modal-body">...</div>*/}
                            {/*                        <div className="modal-footer">*/}
                            {/*                            <button*/}
                            {/*                                type="button"*/}
                            {/*                                className="btn btn-secondary"*/}
                            {/*                                data-bs-dismiss="modal"*/}
                            {/*                            >*/}
                            {/*                                Close*/}
                            {/*                            </button>*/}
                            {/*                            <button type="button" className="btn btn-primary">*/}
                            {/*                                Save changes*/}
                            {/*                            </button>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="col-4 d-flex justify-content-center">*/}
                            {/*    <div className="card" style={{ width: 380 }}>*/}
                            {/*        <img*/}
                            {/*            src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-768x496.jpg"*/}
                            {/*            className="card-img-top"*/}
                            {/*            alt="..."*/}
                            {/*        />*/}
                            {/*        <div className="card-body">*/}
                            {/*            <h5 className="card-title">PHÒNG SUITE HƯỚNG BIỂN</h5>*/}
                            {/*            <p className="card-text">Diện tích phòng: 85.8m2 </p>*/}
                            {/*            /!*button edit, delete*!/*/}
                            {/*            <a href="#" className="btn btn-primary">*/}
                            {/*                <svg*/}
                            {/*                    xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                    width={16}*/}
                            {/*                    height={16}*/}
                            {/*                    fill="currentColor"*/}
                            {/*                    className="bi bi-pencil-square"*/}
                            {/*                    viewBox="0 0 16 16"*/}
                            {/*                >*/}
                            {/*                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />*/}
                            {/*                    <path*/}
                            {/*                        fillRule="evenodd"*/}
                            {/*                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"*/}
                            {/*                    />*/}
                            {/*                </svg>*/}
                            {/*            </a>*/}
                            {/*            <button*/}
                            {/*                type="button"*/}
                            {/*                className="btn btn-danger"*/}
                            {/*                data-bs-toggle="modal"*/}
                            {/*                data-bs-target="#exampleModal"*/}
                            {/*            >*/}
                            {/*                <svg*/}
                            {/*                    xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                    width={16}*/}
                            {/*                    height={16}*/}
                            {/*                    fill="currentColor"*/}
                            {/*                    className="bi bi-trash"*/}
                            {/*                    viewBox="0 0 16 16"*/}
                            {/*                >*/}
                            {/*                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />*/}
                            {/*                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />*/}
                            {/*                </svg>*/}
                            {/*            </button>*/}
                            {/*            /!* Modal xóa *!/*/}
                            {/*            <div*/}
                            {/*                className="modal fade"*/}
                            {/*                id="exampleModal"*/}
                            {/*                tabIndex={-1}*/}
                            {/*                aria-labelledby="exampleModalLabel"*/}
                            {/*                aria-hidden="true"*/}
                            {/*            >*/}
                            {/*                <div className="modal-dialog">*/}
                            {/*                    <div className="modal-content">*/}
                            {/*                        <div className="modal-header">*/}
                            {/*                            <h5 className="modal-title" id="exampleModalLabel">*/}
                            {/*                                Modal title*/}
                            {/*                            </h5>*/}
                            {/*                            <button*/}
                            {/*                                type="button"*/}
                            {/*                                className="btn-close"*/}
                            {/*                                data-bs-dismiss="modal"*/}
                            {/*                                aria-label="Close"*/}
                            {/*                            />*/}
                            {/*                        </div>*/}
                            {/*                        <div className="modal-body">...</div>*/}
                            {/*                        <div className="modal-footer">*/}
                            {/*                            <button*/}
                            {/*                                type="button"*/}
                            {/*                                className="btn btn-secondary"*/}
                            {/*                                data-bs-dismiss="modal"*/}
                            {/*                            >*/}
                            {/*                                Close*/}
                            {/*                            </button>*/}
                            {/*                            <button type="button" className="btn btn-primary">*/}
                            {/*                                Save changes*/}
                            {/*                            </button>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        {/*<div className="row mx-0 mt-5 py-5" style={{ padding: "0 100px" }}>*/}
                        {/*    <div className="col-4 d-flex justify-content-center">*/}
                        {/*        <div className="card" style={{ width: 380 }}>*/}
                        {/*            <img*/}
                        {/*                src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-768x497.jpg"*/}
                        {/*                className="card-img-top"*/}
                        {/*                alt="..."*/}
                        {/*            />*/}
                        {/*            <div className="card-body">*/}
                        {/*                <h5 className="card-title">PHÒNG SUITE HƯỚNG BIỂN</h5>*/}
                        {/*                <p className="card-text">Diện tích phòng: 85.8m2 </p>*/}
                        {/*                /!*button edit, delete*!/*/}
                        {/*                <a href="#" className="btn btn-primary">*/}
                        {/*                    <svg*/}
                        {/*                        xmlns="http://www.w3.org/2000/svg"*/}
                        {/*                        width={16}*/}
                        {/*                        height={16}*/}
                        {/*                        fill="currentColor"*/}
                        {/*                        className="bi bi-pencil-square"*/}
                        {/*                        viewBox="0 0 16 16"*/}
                        {/*                    >*/}
                        {/*                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />*/}
                        {/*                        <path*/}
                        {/*                            fillRule="evenodd"*/}
                        {/*                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"*/}
                        {/*                        />*/}
                        {/*                    </svg>*/}
                        {/*                </a>*/}
                        {/*                <button*/}
                        {/*                    type="button"*/}
                        {/*                    className="btn btn-danger"*/}
                        {/*                    data-bs-toggle="modal"*/}
                        {/*                    data-bs-target="#exampleModal"*/}
                        {/*                >*/}
                        {/*                    <svg*/}
                        {/*                        xmlns="http://www.w3.org/2000/svg"*/}
                        {/*                        width={16}*/}
                        {/*                        height={16}*/}
                        {/*                        fill="currentColor"*/}
                        {/*                        className="bi bi-trash"*/}
                        {/*                        viewBox="0 0 16 16"*/}
                        {/*                    >*/}
                        {/*                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />*/}
                        {/*                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />*/}
                        {/*                    </svg>*/}
                        {/*                </button>*/}
                        {/*                /!* Modal xóa *!/*/}
                        {/*                <div*/}
                        {/*                    className="modal fade"*/}
                        {/*                    id="exampleModal"*/}
                        {/*                    tabIndex={-1}*/}
                        {/*                    aria-labelledby="exampleModalLabel"*/}
                        {/*                    aria-hidden="true"*/}
                        {/*                >*/}
                        {/*                    <div className="modal-dialog">*/}
                        {/*                        <div className="modal-content">*/}
                        {/*                            <div className="modal-header">*/}
                        {/*                                <h5 className="modal-title" id="exampleModalLabel">*/}
                        {/*                                    Modal title*/}
                        {/*                                </h5>*/}
                        {/*                                <button*/}
                        {/*                                    type="button"*/}
                        {/*                                    className="btn-close"*/}
                        {/*                                    data-bs-dismiss="modal"*/}
                        {/*                                    aria-label="Close"*/}
                        {/*                                />*/}
                        {/*                            </div>*/}
                        {/*                            <div className="modal-body">...</div>*/}
                        {/*                            <div className="modal-footer">*/}
                        {/*                                <button*/}
                        {/*                                    type="button"*/}
                        {/*                                    className="btn btn-secondary"*/}
                        {/*                                    data-bs-dismiss="modal"*/}
                        {/*                                >*/}
                        {/*                                    Close*/}
                        {/*                                </button>*/}
                        {/*                                <button type="button" className="btn btn-primary">*/}
                        {/*                                    Save changes*/}
                        {/*                                </button>*/}
                        {/*                            </div>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="col-4 d-flex justify-content-center">*/}
                        {/*        <div className="card" style={{ width: 380 }}>*/}
                        {/*            <img*/}
                        {/*                src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-768x497.jpg"*/}
                        {/*                className="card-img-top"*/}
                        {/*                alt="..."*/}
                        {/*            />*/}
                        {/*            <div className="card-body">*/}
                        {/*                <h5 className="card-title">PHÒNG SUITE HƯỚNG BIỂN</h5>*/}
                        {/*                <p className="card-text">Diện tích phòng: 85.8m2 </p>*/}
                        {/*                /!*button edit, delete*!/*/}
                        {/*                <a href="#" className="btn btn-primary">*/}
                        {/*                    <svg*/}
                        {/*                        xmlns="http://www.w3.org/2000/svg"*/}
                        {/*                        width={16}*/}
                        {/*                        height={16}*/}
                        {/*                        fill="currentColor"*/}
                        {/*                        className="bi bi-pencil-square"*/}
                        {/*                        viewBox="0 0 16 16"*/}
                        {/*                    >*/}
                        {/*                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />*/}
                        {/*                        <path*/}
                        {/*                            fillRule="evenodd"*/}
                        {/*                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"*/}
                        {/*                        />*/}
                        {/*                    </svg>*/}
                        {/*                </a>*/}
                        {/*                <button*/}
                        {/*                    type="button"*/}
                        {/*                    className="btn btn-danger"*/}
                        {/*                    data-bs-toggle="modal"*/}
                        {/*                    data-bs-target="#exampleModal"*/}
                        {/*                >*/}
                        {/*                    <svg*/}
                        {/*                        xmlns="http://www.w3.org/2000/svg"*/}
                        {/*                        width={16}*/}
                        {/*                        height={16}*/}
                        {/*                        fill="currentColor"*/}
                        {/*                        className="bi bi-trash"*/}
                        {/*                        viewBox="0 0 16 16"*/}
                        {/*                    >*/}
                        {/*                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />*/}
                        {/*                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />*/}
                        {/*                    </svg>*/}
                        {/*                </button>*/}
                        {/*                /!* Modal xóa *!/*/}
                        {/*                <div*/}
                        {/*                    className="modal fade"*/}
                        {/*                    id="exampleModal"*/}
                        {/*                    tabIndex={-1}*/}
                        {/*                    aria-labelledby="exampleModalLabel"*/}
                        {/*                    aria-hidden="true"*/}
                        {/*                >*/}
                        {/*                    <div className="modal-dialog">*/}
                        {/*                        <div className="modal-content">*/}
                        {/*                            <div className="modal-header">*/}
                        {/*                                <h5 className="modal-title" id="exampleModalLabel">*/}
                        {/*                                    Modal title*/}
                        {/*                                </h5>*/}
                        {/*                                <button*/}
                        {/*                                    type="button"*/}
                        {/*                                    className="btn-close"*/}
                        {/*                                    data-bs-dismiss="modal"*/}
                        {/*                                    aria-label="Close"*/}
                        {/*                                />*/}
                        {/*                            </div>*/}
                        {/*                            <div className="modal-body">...</div>*/}
                        {/*                            <div className="modal-footer">*/}
                        {/*                                <button*/}
                        {/*                                    type="button"*/}
                        {/*                                    className="btn btn-secondary"*/}
                        {/*                                    data-bs-dismiss="modal"*/}
                        {/*                                >*/}
                        {/*                                    Close*/}
                        {/*                                </button>*/}
                        {/*                                <button type="button" className="btn btn-primary">*/}
                        {/*                                    Save changes*/}
                        {/*                                </button>*/}
                        {/*                            </div>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="col-4 d-flex justify-content-center">*/}
                        {/*        <div className="card" style={{ width: 380 }}>*/}
                        {/*            <img*/}
                        {/*                src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-768x496.jpg"*/}
                        {/*                className="card-img-top"*/}
                        {/*                alt="..."*/}
                        {/*            />*/}
                        {/*            <div className="card-body">*/}
                        {/*                <h5 className="card-title">PHÒNG SUITE HƯỚNG BIỂN</h5>*/}
                        {/*                <p className="card-text">Diện tích phòng: 85.8m2 </p>*/}
                        {/*                /!*button edit, delete*!/*/}
                        {/*                <a href="#" className="btn btn-primary">*/}
                        {/*                    <svg*/}
                        {/*                        xmlns="http://www.w3.org/2000/svg"*/}
                        {/*                        width={16}*/}
                        {/*                        height={16}*/}
                        {/*                        fill="currentColor"*/}
                        {/*                        className="bi bi-pencil-square"*/}
                        {/*                        viewBox="0 0 16 16"*/}
                        {/*                    >*/}
                        {/*                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />*/}
                        {/*                        <path*/}
                        {/*                            fillRule="evenodd"*/}
                        {/*                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"*/}
                        {/*                        />*/}
                        {/*                    </svg>*/}
                        {/*                </a>*/}
                        {/*                <button*/}
                        {/*                    type="button"*/}
                        {/*                    className="btn btn-danger"*/}
                        {/*                    data-bs-toggle="modal"*/}
                        {/*                    data-bs-target="#exampleModal"*/}
                        {/*                >*/}
                        {/*                    <svg*/}
                        {/*                        xmlns="http://www.w3.org/2000/svg"*/}
                        {/*                        width={16}*/}
                        {/*                        height={16}*/}
                        {/*                        fill="currentColor"*/}
                        {/*                        className="bi bi-trash"*/}
                        {/*                        viewBox="0 0 16 16"*/}
                        {/*                    >*/}
                        {/*                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />*/}
                        {/*                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />*/}
                        {/*                    </svg>*/}
                        {/*                </button>*/}
                        {/*                /!* Modal xóa *!/*/}
                        {/*                <div*/}
                        {/*                    className="modal fade"*/}
                        {/*                    id="exampleModal"*/}
                        {/*                    tabIndex={-1}*/}
                        {/*                    aria-labelledby="exampleModalLabel"*/}
                        {/*                    aria-hidden="true"*/}
                        {/*                >*/}
                        {/*                    <div className="modal-dialog">*/}
                        {/*                        <div className="modal-content">*/}
                        {/*                            <div className="modal-header">*/}
                        {/*                                <h5 className="modal-title" id="exampleModalLabel">*/}
                        {/*                                    Modal title*/}
                        {/*                                </h5>*/}
                        {/*                                <button*/}
                        {/*                                    type="button"*/}
                        {/*                                    className="btn-close"*/}
                        {/*                                    data-bs-dismiss="modal"*/}
                        {/*                                    aria-label="Close"*/}
                        {/*                                />*/}
                        {/*                            </div>*/}
                        {/*                            <div className="modal-body">...</div>*/}
                        {/*                            <div className="modal-footer">*/}
                        {/*                                <button*/}
                        {/*                                    type="button"*/}
                        {/*                                    className="btn btn-secondary"*/}
                        {/*                                    data-bs-dismiss="modal"*/}
                        {/*                                >*/}
                        {/*                                    Close*/}
                        {/*                                </button>*/}
                        {/*                                <button type="button" className="btn btn-primary">*/}
                        {/*                                    Save changes*/}
                        {/*                                </button>*/}
                        {/*                            </div>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*Phân trang*/}
                        <nav
                            className="d-flex justify-content-center"
                            aria-label="Page navigation example"
                        >
                            <ul className="pagination">
                                <li className="page-item">
                                    <a
                                        className="page-link"
                                        href="#"
                                        style={{
                                            border: "none",
                                            backgroundColor: "#daeae9",
                                            color: "#1d1d1c"
                                        }}
                                    >
                                        Trước
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                        className="page-link"
                                        href="#"
                                        style={{
                                            border: "none",
                                            backgroundColor: "#daeae9",
                                            color: "#1d1d1c"
                                        }}
                                    >
                                        1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                        className="page-link"
                                        href="#"
                                        style={{
                                            border: "none",
                                            backgroundColor: "#daeae9",
                                            color: "#1d1d1c"
                                        }}
                                    >
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                        className="page-link"
                                        href="#"
                                        style={{
                                            border: "none",
                                            backgroundColor: "#daeae9",
                                            color: "#1d1d1c"
                                        }}
                                    >
                                        3
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                        className="page-link"
                                        href="#"
                                        style={{
                                            border: "none",
                                            backgroundColor: "#daeae9",
                                            color: "#1d1d1c"
                                        }}
                                    >
                                        Sau
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </>

                    </>
                <>
                    <Footer/>
                    </>
                </>

        )
    }

}