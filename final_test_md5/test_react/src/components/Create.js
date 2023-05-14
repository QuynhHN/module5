import {useEffect, useState} from "react";
import * as bookServer from "../services/bookService"
import {useNavigate} from "react-router-dom"
import {Formik,Form,Field} from "formik";

export function Create() {
    const navigate= useNavigate()
    const [bookTypes,setBookType]=useState([])
    useEffect(()=>{
        const getTypeBooks=async ()=>{
            const result=await bookServer.bookType()
            setBookType(result.data)
        }
        getTypeBooks()
    },[])
return(
    <>
        <Formik initialValues={{
            code:'',
            name:'',
            importedDate:'',
            bookType:bookTypes[0]?.id
        }} onSubmit={(values => {
            const create=async ()=>{
                await bookServer.save({
                    ...values,
                    bookType: +values.bookType
                })
                navigate('/')
            }
            create()
        })}>
<Form>
    <div className="form-group">
        <label htmlFor="productType">Loại</label>
        <Field as="select" name="bookType" id="bookType" className="form-select">
            {
                bookTypes.map((type)=>(
                    <option value={type.id} key={type.id}>
                        {type.nameType}
                    </option>
                ))
            }
        </Field>
    </div>
</Form>
        </Formik>

        </>
)
}