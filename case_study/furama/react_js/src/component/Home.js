import React, {Component} from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";


export class Home extends Component {
    render() {
        return (
            <>
                <Header/>
                <>
                    {/*slider*/}
                    <section className="home-slider owl-carousel">
                        <div
                            className="slider-item"
                            style={{
                                backgroundImage:
                                    "url(images/Vietnam_Danang_Furama_Resort_Exterior_Courtyard.jpg)"
                            }}
                        >
                            <div className="overlay" />
                            <div className="container">
                                <div className="row no-gutters slider-text align-items-center justify-content-center">
                                    <div className="col-md-12 ftco-animate text-center">
                                        <div className="text mb-5 pb-3">
                                            <h1 className="mb-3"> Chào mừng đến với Furama</h1>
                                            <h2>Hotels &amp; Resorts</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="slider-item"
                            style={{
                                backgroundImage: "url(images/Furama-Resort-Danang-Exterior.jpg)"
                            }}
                        >
                            <div className="overlay" />
                            <div className="container">
                                <div className="row no-gutters slider-text align-items-center justify-content-center">
                                    <div className="col-md-12 ftco-animate text-center">
                                        <div className="text mb-5 pb-3">
                                            <h1 className="mb-3">Khu nghỉ dưỡng ẩm thực</h1>
                                            <h3 style={{ color: "white" }}>Tọa lạc tại bãi biển Đà Nẵng</h3>
                                            <h3 style={{ color: "white" }}>
                                                Một trong 6 bãi biển đẹp nhất thế giới
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="slider-item"
                            style={{
                                backgroundImage:
                                    "url(images/Vietnam_Danang_Furama_Resort_Exterior_Courtyard-Night.jpg)"
                            }}
                        >
                            <div className="overlay" />
                            <div className="container">
                                <div className="row no-gutters slider-text align-items-center justify-content-center">
                                    <div className="col-md-12 ftco-animate text-center">
                                        <div className="text mb-5 pb-3">
                                            <h1 className="mb-3">Khu nghỉ dưỡng ẩm thực</h1>
                                            <h2>Tọa lạc tại bãi biển Đà Nẵng</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="ftco-section ftc-no-pb ftc-no-pt">
                        <div className="container">
                            <div className="row">
                                <div
                                    className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center"
                                    style={{
                                        backgroundImage:
                                            "url(images/resort-5-sao-cao-cap-furama-da-nang-1.png)",
                                        marginTop: "5%"
                                    }}
                                >
                                    <a
                                        href="https://www.youtube.com/watch?v=IjlT_4mvd-c"
                                        className="icon popup-vimeo d-flex justify-content-center align-items-center"
                                    >
                                        <span className="icon-play" />
                                    </a>
                                </div>
                                <div className="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">
                                    <div className="heading-section heading-section-wo-line pt-md-5 pl-md-5 mb-5">
                                        <div className="ml-md-0">
              <span className="subheading">
                Chào mừng đến với Furama Đà Nẵng
              </span>
                                            <h2 className="mb-4">
                                                Khu nghỉ dưỡng đẳng cấp thế giới, FURAMA Đà Nẵng, nổi tiếng là
                                                khu nghỉ dưỡng ẩm thực tại Việt Nam.
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="pb-md-5">
                                        <p>
                                            Hướng ra bãi biển Đà Nẵng trải dài cát trắng, Furama Resort Đà
                                            Nẵng là cửa ngõ đến với 3 di sản văn hoá thế giới: Hội An (20
                                            phút), Mỹ Sơn (90 phút) và Huế (2 tiếng. 196 phòng hạng sang cùng
                                            với 70 căn biệt thự từ hai đến bốn phòng ngủ có hồ bơi riêng đều
                                            được trang trí trang nhã, theo phong cách thiết kế truyền thống
                                            của Việt Nam và kiến trúc thuộc địa của Pháp, biến Furama thành
                                            khu nghỉ dưỡng danh giá nhất tại Việt Nam – vinh dự được đón tiếp
                                            nhiều người nổi tiếng, giới hoàng gia, chính khách, ngôi sao điện
                                            ảnh và các nhà lãnh đạo kinh doanh quốc tế.
                                        </p>
                                        <p>
                                            Nằm tại vị trí đắc địa gần trung tâm Đà Nẵng và là nơi kết nối
                                            quốc tế thuận tiện đến Singapore, Bangkok, Xiêm Riệp, Kuala
                                            Lumpur, Đài Loan, Tokyo, Osaka, Busan, Seoul, Tokyo, Osaka và Hồng
                                            Kông – Ma Cao, Trung Quốc bao gồm: Bắc Kinh, Thượng Hải, Hàng
                                            Châu, Quảng Châu, Thành Đô bằng các chuyến bay trực tiếp, khu nghỉ
                                            dưỡng Furama Đà Nẵng là điểm đến lý tưởng cho các đại lý du lịch,
                                            doanh nghiệp, công ty tổ chức sự kiện. Cung Hội nghị có thể chứa
                                            tới 3000 người, cùng với 10 phòng chức năng khác có sức chứa từ 50
                                            đến 300 người. Cung hội nghị Ariyana Convention Centre (ACC) được
                                            xây dựng để tổ chức sự kiện APEC 2017, kết nối với Cung hội nghị
                                            Furama (ICP) tạo thành quần thể MICE lớn nhất Việt Nam có sức chứa
                                            lên tới 5,000 khách.
                                        </p>
                                        <ul className="ftco-social d-flex">
                                            <li className="ftco-animate">
                                                <a href="#">
                                                    <span className="icon-twitter" />
                                                </a>
                                            </li>
                                            <li className="ftco-animate">
                                                <a href="#">
                                                    <span className="icon-facebook" />
                                                </a>
                                            </li>
                                            <li className="ftco-animate">
                                                <a href="#">
                                                    <span className="icon-google-plus" />
                                                </a>
                                            </li>
                                            <li className="ftco-animate">
                                                <a href="#">
                                                    <span className="icon-instagram" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="ftco-section">
                        <div className="container">
                            <div className="row d-flex">
                                <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                                    <div className="media block-6 services py-4 d-block text-center">
                                        <div className="d-flex justify-content-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="flaticon-reception-bell" />
                                            </div>
                                        </div>
                                        <div className="media-body p-2 mt-2">
                                            <h3 className="heading mb-3">Các loại phòng</h3>
                                            <p>
                                                Khu nghỉ dưỡng có 196 phòng được thiết kế theo phong cách truyền
                                                thống Việt Nam kết hợp với phong cách Pháp, 2 tòa nhà 4 tầng có
                                                hướng nhìn ra biển, nhìn ra hồ bơi trong xanh và những khu vườn
                                                nhiệt đới xanh tươi mát.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                                    <div className="media block-6 services py-4 d-block text-center">
                                        <div className="d-flex justify-content-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="flaticon-serving-dish" />
                                            </div>
                                        </div>
                                        <div className="media-body p-2 mt-2">
                                            <h3 className="heading mb-3">Nhà hàng &amp; Bar</h3>
                                            <p>
                                                Trải nghiệm ẩm thực tại Khu nghỉ có sự pha trộn độc đáo các món
                                                ăn truyền thống Việt Nam với nhiều những hương vị ẩm thực châu
                                                Á, Ý và châu Âu tại đa dạng các nhà hàng, quầy bar đẳng cấp được
                                                bao quanh bởi một khu vườn nhiệt đới hay hướng mình ra biển.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex align-sel Searchf-stretch ftco-animate">
                                    <div className="media block-6 services py-4 d-block text-center">
                                        <div className="d-flex justify-content-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="flaticon-car" />
                                            </div>
                                        </div>
                                        <div className="media-body p-2 mt-2">
                                            <h3 className="heading mb-3">Dịch vụ đưa đón</h3>
                                            <p>
                                                Tận hưởng những sự thoải mái, tiện lợi và hoàn hảo ngay từ những
                                                giây phút đầu tiên của kỳ nghỉ khi hạ cánh tại Sân bay Quốc tế
                                                Đà Nẵng với dịch đón tiễn sân bay chuyên nghiệp, thân thiện và
                                                sang trọng từ Khu nghỉ. Có nhiều lựa chọn phù hợp với nhu cầu di
                                                chuyển từ một người cho đến cả gia đình hay du lịch nhóm.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                                    <div className="media block-6 services py-4 d-block text-center">
                                        <div className="d-flex justify-content-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="flaticon-spa" />
                                            </div>
                                        </div>
                                        <div className="media-body p-2 mt-2">
                                            <h3 className="heading mb-3">Spa</h3>
                                            <p>V-SENSES WELLNESS &amp; SPA</p>
                                            <p>
                                                Tọa lạc tại khu vườn nhiệt đới tuyệt đẹp hướng biển của “Ốc đảo
                                                xanh” Furama Resort Đà Nẵng, được văn hóa Chăm Pa thổi hồn trong
                                                từng nét kiến trúc.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*CÁC LOẠI PHÒNG*/}
                    <section className="ftco-section bg-light">
                        <div className="container">
                            <div className="row justify-content-center mb-5 pb-3">
                                <div className="col-md-7 heading-section text-center ftco-animate">
                                    <h2 className="mb-4">CÁC LOẠI PHÒNG</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                                    <div className="room">
                                        <a
                                            href="rooms.html"
                                            className="img d-flex justify-content-center align-items-center"
                                            style={{
                                                backgroundImage:
                                                    "url(https://furamavietnam.com/wp-content/uploads/2018/03/%5E224942630D3A5A787C2989A9F5AF4A3E34E6A8CAE8D94FA3D4%5Epimgpsh_fullsize_distr.jpg)"
                                            }}
                                        >
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2" />
                                            </div>
                                        </a>
                                        <div className="text p-3 text-center">
                                            <h3 className="mb-3">
                                                <a href="rooms.html">Phòng Suite hướng biển</a>
                                            </h3>
                                            <p>
                                                <span className="price mr-2">10,350,000</span>{" "}
                                                <span className="per">1 đêm</span>
                                            </p>
                                            <hr />
                                            <p className="pt-1">
                                                <a href="room-single.html" className="btn-custom">
                                                    Xem thêm <span className="icon-long-arrow-right" />
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                                    <div className="room">
                                        <a
                                            href="rooms.html"
                                            className="img d-flex justify-content-center align-items-center"
                                            style={{
                                                backgroundImage:
                                                    "url(https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas_Pool.jpg)"
                                            }}
                                        >
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2" />
                                            </div>
                                        </a>
                                        <div className="text p-3 text-center">
                                            <h3 className="mb-3">
                                                <a href="rooms.html">Biệt thự hướng biển có hồ bơi</a>
                                            </h3>
                                            <p>
                                                <span className="price mr-2">46,000,000</span>{" "}
                                                <span className="per">1 đêm</span>
                                            </p>
                                            <hr />
                                            <p className="pt-1">
                                                <a href="room-single.html" className="btn-custom">
                                                    Xem thêm <span className="icon-long-arrow-right" />
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                                    <div className="room">
                                        <a
                                            href="rooms.html"
                                            className="img d-flex justify-content-center align-items-center"
                                            style={{
                                                backgroundImage:
                                                    "url(https://furamavietnam.com/wp-content/uploads/2018/03/Presidential-Suite-M.jpg)"
                                            }}
                                        >
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2" />
                                            </div>
                                        </a>
                                        <div className="text p-3 text-center">
                                            <h3 className="mb-3">
                                                <a href="rooms.html">Phòng President Suite</a>
                                            </h3>
                                            <p>
                                                <span className="price mr-2">17,940,000</span>{" "}
                                                <span className="per">1 đêm</span>
                                            </p>
                                            <hr />
                                            <p className="pt-1">
                                                <a href="room-single.html" className="btn-custom">
                                                    Xem thêm <span className="icon-long-arrow-right" />
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                                    <div className="room">
                                        <a
                                            href="rooms.html"
                                            className="img d-flex justify-content-center align-items-center"
                                            style={{
                                                backgroundImage:
                                                    "url(https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-M.jpg)"
                                            }}
                                        >
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2" />
                                            </div>
                                        </a>
                                        <div className="text p-3 text-center">
                                            <h3 className="mb-3">
                                                <a href="rooms.html">Phòng Studio Suite hướng biển</a>
                                            </h3>
                                            <p>
                                                <span className="price mr-2">10,350,000</span>{" "}
                                                <span className="per">1 đêm</span>
                                            </p>
                                            <hr />
                                            <p className="pt-1">
                                                <a href="room-single.html" className="btn-custom">
                                                    Xem thêm <span className="icon-long-arrow-right" />
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                                    <div className="room">
                                        <a
                                            href="rooms.html"
                                            className="img d-flex justify-content-center align-items-center"
                                            style={{
                                                backgroundImage:
                                                    "url(https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-M.jpg)"
                                            }}
                                        >
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2" />
                                            </div>
                                        </a>
                                        <div className="text p-3 text-center">
                                            <h3 className="mb-3">
                                                <a href="rooms.html">Phòng Superior hướng hồ</a>
                                            </h3>
                                            <p>
                                                <span className="price mr-2">8,740,000</span>{" "}
                                                <span className="per">1 đêm</span>
                                            </p>
                                            <hr />
                                            <p className="pt-1">
                                                <a href="room-single.html" className="btn-custom">
                                                    Xem thêm
                                                    <span className="icon-long-arrow-right" />
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                                    <div className="room">
                                        <a
                                            href="rooms.html"
                                            className="img d-flex justify-content-center align-items-center"
                                            style={{
                                                backgroundImage:
                                                    "url(https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Garden-Deluxe-5.jpg)"
                                            }}
                                        >
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2" />
                                            </div>
                                        </a>
                                        <div className="text p-3 text-center">
                                            <h3 className="mb-3">
                                                <a href="rooms.html">Phòng Deluxe hướng vườn</a>
                                            </h3>
                                            <p>
                                                <span className="price mr-2">8,280,000</span>{" "}
                                                <span className="per">1 đêm</span>
                                            </p>
                                            <hr />
                                            <p className="pt-1">
                                                <a href="room-single.html" className="btn-custom">
                                                    Xem thêm <span className="icon-long-arrow-right" />
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="ftco-section testimony-section bg-light">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-8 ftco-animate">
                                    <div className="row ftco-animate">
                                        <div className="col-md-12">
                                            <div className="carousel-testimony owl-carousel ftco-owl">
                                                <div className="item">
                                                    <div className="testimony-wrap py-4 pb-5">
                                                        <div
                                                            className="user-img mb-4"
                                                            style={{ backgroundImage: "url(images/person_1.jpg)" }}
                                                        >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left" />
                      </span>
                                                        </div>
                                                        <div className="text text-center">
                                                            <p className="mb-4">
                                                                A small river named Duden flows by their place and
                                                                supplies it with the necessary regelialia. It is a
                                                                paradisematic country, in which roasted parts of
                                                                sentences fly into your mouth.
                                                            </p>
                                                            <p className="name">Nathan Smith</p>
                                                            <span className="position">Guests</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="testimony-wrap py-4 pb-5">
                                                        <div
                                                            className="user-img mb-4"
                                                            style={{ backgroundImage: "url(images/person_2.jpg)" }}
                                                        >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left" />
                      </span>
                                                        </div>
                                                        <div className="text text-center">
                                                            <p className="mb-4">
                                                                A small river named Duden flows by their place and
                                                                supplies it with the necessary regelialia. It is a
                                                                paradisematic country, in which roasted parts of
                                                                sentences fly into your mouth.
                                                            </p>
                                                            <p className="name">Nathan Smith</p>
                                                            <span className="position">Guests</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="testimony-wrap py-4 pb-5">
                                                        <div
                                                            className="user-img mb-4"
                                                            style={{ backgroundImage: "url(images/person_3.jpg)" }}
                                                        >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left" />
                      </span>
                                                        </div>
                                                        <div className="text text-center">
                                                            <p className="mb-4">
                                                                A small river named Duden flows by their place and
                                                                supplies it with the necessary regelialia. It is a
                                                                paradisematic country, in which roasted parts of
                                                                sentences fly into your mouth.
                                                            </p>
                                                            <p className="name">Nathan Smith</p>
                                                            <span className="position">Guests</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="testimony-wrap py-4 pb-5">
                                                        <div
                                                            className="user-img mb-4"
                                                            style={{ backgroundImage: "url(images/person_1.jpg)" }}
                                                        >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left" />
                      </span>
                                                        </div>
                                                        <div className="text text-center">
                                                            <p className="mb-4">
                                                                A small river named Duden flows by their place and
                                                                supplies it with the necessary regelialia. It is a
                                                                paradisematic country, in which roasted parts of
                                                                sentences fly into your mouth.
                                                            </p>
                                                            <p className="name">Nathan Smith</p>
                                                            <span className="position">Guests</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="testimony-wrap py-4 pb-5">
                                                        <div
                                                            className="user-img mb-4"
                                                            style={{ backgroundImage: "url(images/person_1.jpg)" }}
                                                        >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left" />
                      </span>
                                                        </div>
                                                        <div className="text text-center">
                                                            <p className="mb-4">
                                                                A small river named Duden flows by their place and
                                                                supplies it with the necessary regelialia. It is a
                                                                paradisematic country, in which roasted parts of
                                                                sentences fly into your mouth.
                                                            </p>
                                                            <p className="name">Nathan Smith</p>
                                                            <span className="position">Guests</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="instagram">
                        <div className="container-fluid">
                            <div className="row no-gutters justify-content-center pb-5">
                                <div className="col-md-7 text-center heading-section ftco-animate">
                                    <h2>
                                        <span>Instagram</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-sm-12 col-md ftco-animate">
                                    <a
                                        href="images/insta-1.jpg"
                                        className="insta-img image-popup"
                                        style={{ backgroundImage: "url(images/insta-1.jpg)" }}
                                    >
                                        <div className="icon d-flex justify-content-center">
                                            <span className="icon-instagram align-self-center" />
                                        </div>
                                    </a>
                                </div>
                                <div className="col-sm-12 col-md ftco-animate">
                                    <a
                                        href="images/insta-2.jpg"
                                        className="insta-img image-popup"
                                        style={{ backgroundImage: "url(images/insta-2.jpg)" }}
                                    >
                                        <div className="icon d-flex justify-content-center">
                                            <span className="icon-instagram align-self-center" />
                                        </div>
                                    </a>
                                </div>
                                <div className="col-sm-12 col-md ftco-animate">
                                    <a
                                        href="images/insta-3.jpg"
                                        className="insta-img image-popup"
                                        style={{ backgroundImage: "url(images/insta-3.jpg)" }}
                                    >
                                        <div className="icon d-flex justify-content-center">
                                            <span className="icon-instagram align-self-center" />
                                        </div>
                                    </a>
                                </div>
                                <div className="col-sm-12 col-md ftco-animate">
                                    <a
                                        href="images/insta-4.jpg"
                                        className="insta-img image-popup"
                                        style={{ backgroundImage: "url(images/insta-4.jpg)" }}
                                    >
                                        <div className="icon d-flex justify-content-center">
                                            <span className="icon-instagram align-self-center" />
                                        </div>
                                    </a>
                                </div>
                                <div className="col-sm-12 col-md ftco-animate">
                                    <a
                                        href="images/insta-5.jpg"
                                        className="insta-img image-popup"
                                        style={{ backgroundImage: "url(images/insta-5.jpg)" }}
                                    >
                                        <div className="icon d-flex justify-content-center">
                                            <span className="icon-instagram align-self-center" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </>

                <Footer/>
                <>
                    {/* loader */}
                    <div id="ftco-loader" className="show fullscreen">
                        <svg className="circular" width="48px" height="48px">
                            <circle
                                className="path-bg"
                                cx={24}
                                cy={24}
                                r={22}
                                fill="none"
                                strokeWidth={4}
                                stroke="#eeeeee"
                            />
                            <circle
                                className="path"
                                cx={24}
                                cy={24}
                                r={22}
                                fill="none"
                                strokeWidth={4}
                                strokeMiterlimit={10}
                                stroke="#F96D00"
                            />
                        </svg>
                    </div>
                </>

            </>
        )
    }

}