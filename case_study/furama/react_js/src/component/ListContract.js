import {Component} from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {contractData} from "../data/ContractData";

export class ListContract extends Component {

    render() {
        return (
            <>
                <>
                    <Header/>
                </>
                <>
                    <>
                        <div className="row mx-0" style={{marginTop: 96}}>
                            <img
                                className="img-fluid px-0"
                                style={{height: 400}}
                                src="https://saigonrealestate.vn/wp-content/uploads/2022/03/phoi-canh-biet-thu-Furama-Resort-Spa-Phu-Quoc.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <h2 className="text-center pt-4" style={{fontFamily: '"Bahnschrift"'}}>
                                Danh sách hợp đồng
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
                                    <path
                                        d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                                </svg>
                                <a href="#" style={{textDecoration: "none", color: "#1d1d1d"}}>
                                    <i className="bi bi-cart4"> Thêm hợp đồng mới</i>
                                </a>
                            </button>
                        </div>
                        <div className="row mx-0 mt-3 px-5 py-1">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Mã hợp đồng</th>
                                    <th>Ngày bắt đầu</th>
                                    <th>Ngày kết thúc</th>
                                    <th>Số tiền cọc trước</th>
                                    <th>Tổng số tiền thanh toán</th>
                                </tr>
                                </thead>
                                <tbody>
                                {contractData.map((contract, index) => (
                                    <tr>
                                        <td scope="row">{contract.id}</td>
                                        <td>{contract.idContract}</td>
                                        <td>{contract.startDay}</td>
                                        <td>{contract.endDate}</td>
                                        <td>{contract.advanceDeposit}</td>
                                        <td>{contract.totalPayment}</td>
                                    </tr>
                                    // <tr>
                                    //     <td scope="row">2</td>
                                    //     <td>SV-0002</td>
                                    //     <td>23-03-2023</td>
                                    //     <td>25-05-2023</td>
                                    //     <td>500.000.000</td>
                                    //     <td>2.000.000.000</td>
                                    // </tr>
                                    // <tr>
                                    //     <td scope="row">3</td>
                                    //     <td>SV-0003</td>
                                    //     <td>23-03-2023</td>
                                    //     <td>25-05-2023</td>
                                    //     <td>500.000.000</td>
                                    //     <td>2.000.000.000</td>
                                    // </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
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