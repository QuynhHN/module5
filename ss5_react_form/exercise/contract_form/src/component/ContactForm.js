import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {Vortex} from "react-loader-spinner";
import {useNavigate} from "react-router-dom";
import {ToastContainer,toast} from "react-toastify";

export function ContactForm() {
    // const navigate = useNavigate();
    return (
<>
        <Formik
            initialValues={{
                name: '',
                email: '',
                phone: '',
                message: ''
            }}
            validationSchema={Yup.object({
                name: Yup.string().required("Name error").matches(/^[a-zA-Z]{2,}$/, "Please enter your name"),
                email: Yup.string().required("Email error").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Please input email with format xxx@x.x"),
                phone: Yup.number().required("Phone error").integer()
            })}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    console.log(values)
                    toast(`success ${values.name}`)
                }, 1000)

            }
            }
        >
            {
                ({isSubmitting}) => (
                    <div className='container'>
                        <h1>Contact Form</h1>
                        <Form>
                            <div className='mb-3'>
                                <label>Name</label>
                                <Field type='text' className='form-control' id='name'
                                       name='name'/>
                                <ErrorMessage name='name' className='form-err'
                                              component='span'/>
                            </div>
                            <div className='mb-3'>
                                <label>Email</label>
                                <Field type='text' className='form-control' id='email'
                                       name='email'/>
                                <ErrorMessage name='email' className='form-err'
                                              component='span'/>
                            </div>
                            <div className='mb-3'>
                                <label>Phone</label>
                                <Field type='number' className='form-control' id='phone'
                                       name='phone'/>
                                <ErrorMessage name='phone' className='form-err'
                                              component='span'/>
                            </div>
                            <div className='mb-3'>
                                <label>Message</label>
                                <Field type='textarea' className='form-control' id='message'
                                       name='message'/>
                            </div>
                            <div className='mb-3'>
                                {
                                    isSubmitting ?
                                        <Vortex
                                            visible={true}
                                            height="80"
                                            width="80"
                                            ariaLabel="vortex-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="vortex-wrapper"
                                            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                                        />
                                        :
                                        <button type='submit'
                                                className='btn btn-primary'>Submit</button>

                                }

                            </div>
                        </Form>
                    </div>
                )
            }

        </Formik>
</>
)
}