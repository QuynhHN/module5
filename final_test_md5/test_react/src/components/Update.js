import * as productServer from "../services/productService"
import {Formik, Form, Field} from "formik";
import {useParams, useNavigate, NavLink} from "react-router-dom"
import React, {useEffect, useState} from "react";

export function Update() {
    const params = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([])
    const [typeProducts, setTypeProducts] = useState([])
    useEffect(() => {
        const getTypeProducts = async () => {
            const result = await productServer.typeProduct()
            setTypeProducts(result.data)
        }
        getTypeProducts()
    }, [])
    useEffect(() => {
        const detail = async () => {
            const result = await productServer.findById(params.id)
            setProducts(result.data)
        }
        detail()
    }, [params.id])
    if (!typeProducts) {
        return null
    }
    if (!products) {
        return null
    }
    return (
        <>
            <div className='row mx-4 d-flex justify-content-center'>
                <NavLink to='/' className="mx-7">Trang chủ</NavLink>
                <div className='col-5'>
                    <h2 className='text-center fw-bold'>Sửa thông tin sản phẩm </h2>
                    <Formik initialValues={
                        {
                            id: products?.id,
                            code: products?.code,
                            name: products?.name,
                            importedDate: products?.importedDate,
                            quantity: products?.quantity,
                            typeProduct: products.typeProduct?.typeName
                        }
                    } onSubmit={(value) => {
                        console.log(value);
                        const edit = async () => {
                            await productServer.edit(
                                {
                                    ...value,
                                    typeProduct: +value.typeProduct
                                }
                            )
                            alert('Chỉnh sửa thành công')
                            navigate('/')
                        }
                        edit()

                    }}>
                        <Form>
                            <div className="form-group">
                                <label htmlFor="code">Mã sản phẩm</label>
                                <Field type="text"
                                       className="form-control" name="code" id="code" placeholder=""/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="code">Tên sản phẩm</label>
                                <Field type="text"
                                       className="form-control" name="name" id="name" placeholder=""/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="code">Ngày nhập</label>
                                <Field type="date"
                                       className="form-control" name="importedDate" id="importedDate" placeholder=""/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="code">Số lượng</label>
                                <Field type="text"
                                       className="form-control" name="quantity" id="quantity" placeholder=""/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="productType">Loại sản phẩm</label>
                                <Field as="select" name="typeProduct" id="typeProduct" className="form-select">
                                    <option>--Thể loại--</option>
                                    {
                                        typeProducts.map((type) => (
                                            <option value={type.id} key={type.id}>
                                                {type.typeName}
                                            </option>
                                        ))
                                    }
                                </Field>
                            </div>
                            <div className="mt-3">
                                <button type="submit" className="btn btn-primary">Xác nhận</button>
                            </div>
                        </Form>

                    </Formik>
                </div>
            </div>
        </>
    )


}