import * as Yup from "yup"
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as customersService from '../service/CustomerService'
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {Link, NavLink} from "react-router-dom";
import Navbar from "./NavBar";
import NavbarTow from "./NavbarTow";

function CustomerCreate() {
    const [type, setType] = useState([])
    let navigate = useNavigate()
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        const getType = async () => {
            let rs = await customersService.findAllType();
            setType(rs)
        }
        const getAll = async () => {
            let rs = await customersService.findAll()
            setCustomers(rs)
        }
        getAll();
        getType();
    }, [])

    const generateCode = (value) => {
        let maxCusCode = {};
        if (value === "") {
            if (customers && customers.length > 0) {
                maxCusCode = customers.reduce((customerCode, customer) => {
                    const matches = customer.code.match(/([A-Za-z]+)(\d+)/);
                    let cusCode = 0;
                    if (matches) {
                        cusCode = parseInt(matches[2], 10); // Lấy số trong mã khách hàng
                    }
                    return {
                        newCode: cusCode > customerCode.newCode ? cusCode : customerCode.newCode,
                        prefix: matches[1] // Lấy phần prefix (ký tự) của mã khách hàng
                    };
                }, {newCode: 0, prefix: ""});
            } else {
                return `DT0001`
            }
            return `${maxCusCode.prefix}${check(maxCusCode.newCode)}`;
        } else {
            return value;
        }
    }

    const check = (value) => {
        value += 1;
        switch (value) {
            case value < 10:
                return '000' + value;
            case value < 100:
                return '00' + value;
            case value < 1000:
                return '0' + value;
            default:
                return value;
        }
    }


    return (
        <>
            <Navbar/>
            <br/>
            <div className='container'>
                <NavbarTow/>
                <br/>
                <br/>
                <h1 className='text-center'>Thêm mới

                </h1>

                <Formik initialValues={{
                    code: '',
                    name: '',
                    address: '',
                    phone: '',
                    email: '',
                    passport: '',
                    accountBank: '',
                    paymentTerm: '',
                    birthDay: '',
                    dateRange: '',
                    fax: '',
                    bank: '',
                    customerType: 0
                }}
                        validationSchema={Yup.object({
                            name: Yup.string().required("không được bỏ trống"),
                            customerType: Yup.number().required("phải chọn loại khách hàng").moreThan(0, 'Không được để trông'),
                                phone: Yup.string().matches(/^(03|05|07|09)\d{8}$/, "Định dạng số điện thoại không hợp lệ")

                        })}
                        onSubmit={async (value) => {
                            await customersService.save({
                                ...value,
                                code: generateCode(value.code),
                                customerType: type?.find(t => +t.id === +value.customerType)
                            });

                            Swal.fire({
                                icon: 'success',
                                title: 'Thanh cong'
                            })
                            navigate("/")
                        }}
                >
                    <Form>
                        <div className='row mt-3'>
                            <div className='col-4'>
                                <div className='form-group'>
                                    <label htmlFor='code'>Mã</label><span style={{color: "red"}}>*</span>
                                    <Field type='text' name='code' className='form-control'/>
                                </div>
                                <ErrorMessage name='code' component='span' className='text-bg-danger'/>
                            </div>


                            <div className='col-4'>
                                <div className='form-group'>
                                    <label htmlFor='name'>Name</label><span style={{color: "red"}}>*</span>
                                    <Field type='text' name='name' className='form-control'/>
                                </div>
                                <ErrorMessage name='name' component='span' className='text-bg-danger'/>
                            </div>
                            <div className='col-4'>
                                <div className='form-group'>
                                    <label htmlFor='address'>Địa chỉ</label>
                                    <Field type='text' name='address' className='form-control'/>
                                </div>
                                <ErrorMessage name='address' component='span' className='text-bg-danger'/>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-4'>
                                <div className='form-group'>
                                    <label htmlFor='phone'>Số điện thoại</label> <span style={{color: "red"}}>*</span>
                                    <Field type='text' name='phone' className='form-control'/>
                                </div>
                                <ErrorMessage name='phone' component='span' className='text-bg-danger'/>
                            </div>
                            <div className='col-4'>
                                <div className='form-group'>
                                    <label htmlFor='email'>Email</label>
                                    <Field type='text' name='email' className='form-control'/>
                                </div>
                                <ErrorMessage name='email' component='span' className='text-bg-danger'/>
                            </div>
                            <div className='col-4'>
                                <div className='form-group'>
                                    <label htmlFor='passport'>Hộ chiếu</label>
                                    <Field type='number' name='passport' className='form-control'/>
                                </div>
                                <ErrorMessage name='passport' component='span' className='text-bg-danger'/>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-4'>
                                <div className='form-group'>
                                    <label htmlFor='accountBank'>Tài khoản ngân hàng</label>
                                    <Field type='text' name='accountBank' className='form-control'/>
                                </div>
                                <ErrorMessage name='accountBank' component='span' className='text-bg-danger'/>
                            </div>
                            <div className='col-4'>
                                <div className='form-group'>
                                    <label htmlFor='paymentTerm'>Chính sách thanh toán</label>
                                    <Field type='text' name='paymentTerm' className='form-control'/>
                                </div>
                                <ErrorMessage name='paymentTerm' component='span' className='text-bg-danger'/>
                            </div>
                            <div className='col-4'>
                                <div className='form-group'>
                                    <label htmlFor='birthDay'>Ngày Sinh</label>
                                    <Field type='date' name='birthDay' className='form-control'/>
                                </div>
                                <ErrorMessage name='birthDay' component='span' className='text-bg-danger'/>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-4'>
                                <div className='form-group'>
                                    <label htmlFor='dateRange'>Ngày Cấp</label>
                                    <Field type='date' name='dateRange' className='form-control'/>
                                </div>
                                <ErrorMessage name='dateRange' component='span' className='text-bg-danger'/>
                            </div>
                            <div className='col-4'>
                                <div className='form-group'>
                                    <label htmlFor='pax'>Fax</label>
                                    <Field type='text' name='fax' className='form-control'/>
                                </div>
                                <ErrorMessage name='fax' component='span' className='text-bg-danger'/>
                            </div>
                            <div className='col-4'>
                                <div className='form-group'>
                                    <label htmlFor='bank'>Tên ngân hàng</label>
                                    <Field type='text' name='bank' className='form-control'/>
                                </div>
                                <ErrorMessage name='bank' component='span' className='text-bg-danger'/>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-4'>
                                <div className='form-group'>
                                    <label htmlFor=''>Loại khách hàng</label><span style={{color: "red"}}>*</span>
                                    <Field component='select' name='customerType' className='form-control'>
                                        <option value={""}>---Chọn---</option>
                                        {
                                            type.map((em, index) => (
                                                <option key={index} value={em.id}>
                                                    {em.type}
                                                </option>
                                            ))
                                        }
                                    </Field>
                                </div>
                                <ErrorMessage name='customerType' component='span' className='text-bg-danger'/>
                            </div>
                        </div>
                        <div className='row'>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <NavLink to='/' className='btn btn-secondary'>Thoát</NavLink>
                                <button className='btn btn-success' type='submit' style={{marginLeft: '10px'}}>Lưu
                                </button>
                            </div>
                        </div>

                    </Form>

                </Formik>
            </div>
        </>
    )
}

export default CustomerCreate;