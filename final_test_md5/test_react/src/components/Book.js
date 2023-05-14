import React, {useEffect} from "react";
import {useState} from "react";
import * as bookService from "../services/bookService"
import {Formik, Form, Field} from "formik";
import {NavLink} from "react-router-dom";
import ReactPaginate from "react-paginate";
import { format } from "date-fns"
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom"
export function Book() {
    const navigate = useNavigate()
    const [books, setBooks] = useState([])
    const [bookTypes, setBookTypes] = useState([])

    const [deleteBooks,setDeleteBooks]=useState()
    const handleTransferId=(book)=>{
        setDeleteBooks(book)
    }
    const handleDelete=async ()=>{
        try{
            await bookService.remove(deleteBooks.id)
            toast("Xoa thanh cong")
        }catch (error) {
            toast("Xoa khong thanh cong")
        }
    }
    // Phan trang
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 3;
    let count = itemOffset;

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % books.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(books.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(books.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, books]);

    useEffect(() => {
        const getBookTypes = async () => {
            const result = await bookService.bookType()
            setBookTypes(result.data)
        }
        getBookTypes()
    }, [])
    useEffect(() => {
        const getBook = async () => {
            const result = await bookService.findAll()
            setBooks(result.data)
        }
        getBook();
    }, [deleteBooks])
    return (
        <>

            <h2 className='text-center'>Danh sách tất cả các sách</h2>
            <div className='row mx-0'>
                <div className='col-6'>
                    <NavLink to='/create' className='btn btn-dark'>Thêm sách mới</NavLink>
                </div>
                <Formik initialValues={{
                    name: '',
                    typeId: ''
                }

                } onSubmit={
                    (values => {
                        const findByName = async () => {
                            const result = await bookService.findByNameAndType(values.name, values.typeId)
                            setBooks(result.data)
                        }
                        findByName()
                    })
                }>
                    <Form class='col-6'>
                        <Field name={'name'}
                        />

                        <Field as="select" name={'typeId'}>
                            <option>Thể loại</option>
                            {bookTypes.map((type) => (
                                <option key={type.id} value={type.id}>{type.nameType}</option>
                            ))}
                        </Field>
                        <button type={"submit"}>Tìm kiếm</button>
                    </Form>
                </Formik>
                {books.length !== 0 ?
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã sách</th>
                            <th>Tên sách</th>
                            <th>Ngày nhập sách</th>
                            <th>Số lượng</th>
                            <th>Thể loại</th>
                            <th>Chức năng</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentItems.map((book, index) => (
                                <tr>
                                    <td scope="row">{++count}</td>
                                    <td>{book.code}</td>
                                    <td>{book.name}</td>
                                    {/*<td>{book.importedDate}</td>*/}
                                    <td>{format(new Date(book.importedDate), "dd/MM/yyyy")}</td>
                                    <td>{book.quantity}</td>
                                    <td>{bookTypes?.find((type) => type.id === book.bookType)?.nameType}</td>
                                    <td>
                                        <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal" onClick={() => {
                                            handleTransferId(book)
                                        }}>
                                            Xóa
                                        </button>
                                    </td>
                                </tr>

                            )
                        )}

                        </tbody>
                    </table>:<h2 id='nameSearch' className='text-danger text-center'>Không tìm thấy</h2>
                }
                    <div className="d-grid">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="Sau"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            pageCount={pageCount}
                            previousLabel="Trước "
                            renderOnZeroPageCount={null}
                            containerClassName="pagination"
                            pageLinkClassName="page-num"
                            nextLinkClassName="page-previous"
                            previousLinkClassName="page-next"
                            activeClassName="active"
                            disabledClassName="d-none"
                        />
                    </div>

               {/*modal xóa*/}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Xóa</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Bạn có chắc chắn muốn xóa <span className='text-danger'>{deleteBooks?.name}</span>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>handleDelete()}>Lưu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}