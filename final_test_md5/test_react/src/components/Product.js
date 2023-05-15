import React, {useEffect, useState} from "react";
import {format} from "date-fns"
import * as productService from "../services/productService"
import {Formik, Form, Field} from "formik";
import {useNavigate} from "react-router-dom"
import {NavLink} from "react-router-dom";
import {toast} from "react-toastify";
import ReactPaginate from "react-paginate";

export function Product() {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [typeProducts, setTypeProducts] = useState([])
    const [deleteProducts, setDeleteProducts] = useState()
    const handleTransferId = (product) => {
        setDeleteProducts(product)
    }
    const handleDelete = async () => {
        try {
            await productService.remove(deleteProducts.id)
            toast("Xoa thanh cong")
        } catch (error) {
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
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(products.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(products.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, products]);

    useEffect(() => {
        const getTypeProduct = async () => {
            const result = await productService.typeProduct()
            setTypeProducts(result.data)
        }
        getTypeProduct()
    }, [])

    useEffect(() => {
        const getProduct = async () => {
            const result = await productService.findAll()
            setProducts(result.data)
        }
        getProduct()
    }, [deleteProducts])
    return (
        <>
            <h2 className='text-center'>Danh sách sản phẩm cửa hàng quần áo Clothing</h2>
            <div className='row mx-0'>
                <div className='col-6'>
                    <NavLink to='/create' className='btn btn-dark'>Thêm sản phẩm mới</NavLink>
                </div>

                <Formik initialValues={
                    {
                        name: '',
                        type: '',
                    }
                } onSubmit={
                    (values => {
                        const findByName = async () => {
                            const result = await productService.findByNameAndType(values.name, values.type)
                            setProducts(result.data)
                        }
                        findByName()
                    })
                }>
                    <Form class='col-6'>
                        <div className="form-group">
                            <Field type="text"
                                   className="form-control float-start w-50" name="name" placeholder="Tìm kiếm..."/>
                        </div>
                        <Field as='select' name="type" id="type" className='form-select w-25 d-inline'>
                            <option>--Thể loại--</option>
                            {typeProducts.map((type) => (

                                <option key={type.id} value={type.id}>{type.typeName}
                                </option>
                            ))}
                        </Field>

                        <button type="submit float-end" className="btn btn-primary">Tìm kiếm</button>

                    </Form>
                </Formik>
                {products.length !== 0 ?

                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Ngày nhập</th>
                            <th>Số lượng</th>
                            <th>Loại sản phẩm</th>
                            <th>Chức năng</th>

                        </tr>
                        </thead>
                        <tbody>
                        {currentItems.map((product, index) => (

                            <tr>
                                <td scope="row">{++count}</td>
                                <td>{product.code}</td>
                                <td>{product.name}</td>
                                {/*<td>{product.importedDate}</td>*/}
                                <td>{format(new Date(product.importedDate), "dd/MM/yyyy")}</td>
                                <td>{product.quantity}</td>
                                <td>{typeProducts.find((type) => type.id === product?.typeProduct)?.typeName}</td>
                                <td>
                                    <NavLink to={`/edit/${product.id}`} className="btn btn-primary">Chỉnh sửa</NavLink>

                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal" onClick={() => {
                                        handleTransferId(product)
                                    }}>
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                        {/*</table>*/}
                    </table> :

                    <h2 id='nameSearch' className='text-danger text-center'>Không tìm thấy</h2>}
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
                                        aria-label="Close"/>
                            </div>
                            <div className="modal-body">
                                Bạn có chắc chắn muốn xóa <span className='text-danger'>{deleteProducts?.name}</span>
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