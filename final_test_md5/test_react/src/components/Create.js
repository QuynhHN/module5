import React, {useEffect, useState} from "react";
import * as productServer from "../services/productService"
import {useNavigate} from "react-router-dom"
import {Formik,Form,Field} from "formik";
import {NavLink} from "react-router-dom";

export function Create() {
    const navigate= useNavigate()
    const [typeProducts,setTypeProducts]=useState([])
    useEffect(()=>{
        const getTypeProducts=async ()=>{
            const result=await productServer.typeProduct()
            setTypeProducts(result.data)
        }
        getTypeProducts()
    },[])
    return(
        <>
            <div className='row mx-4 d-flex justify-content-center'>
                <NavLink to='/' className="mx-7">Trang chủ</NavLink>
                <div className='col-5'>
                    <h2 className='text-center fw-bold'>Thêm sản phẩm mới </h2>
            <Formik initialValues={{
                code:'',
                name:'',
                importedDate:'',
                quantity:'',
                typeProduct:typeProducts[0]?.id
            }} onSubmit={(values => {
                const create=async ()=>{
                    await productServer.save({
                        ...values,
                        typeProduct: +values.typeProduct
                    })
                    navigate('/')
                }
                create()
            })}>
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
                                typeProducts.map((type)=>(
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