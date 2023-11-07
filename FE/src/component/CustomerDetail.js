import * as customersService from '../service/CustomerService'
import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {Link} from "react-router-dom";

function CustomerDetail() {
    let param = useParams();
    const [customerDetail,setCustomerDetail] = useState('')
    useEffect(()=>{
        const getCustomerById = async ()=>{
        const rs = await customersService.findCustomerById(param.id)
            console.log(rs)
            setCustomerDetail(rs)
        }
        getCustomerById()
    },[param.id]);

    return (
        <>
            <div className='container'>
                <div>
                    <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
                        <h5><i className="fa-regular fa-bookmark"/> Chi tiết Khách hàng</h5>

                        <div className='d-flex'>
                            <Link to="/create">
                                <button style={{
                                    height: 35,
                                    width: "58px",
                                    backgroundColor: "#00BFFF",
                                    border: "none",
                                    borderRadius: 6
                                }}>
                                    <i style={{color: "white"}} className="fa fa-plus" aria-hidden="true"></i>
                                </button>
                            </Link>

                            <button style={{
                                height: 35,
                                backgroundColor: "red",
                                width: "58px",
                                marginLeft: 17,
                                border: "none",
                                borderRadius: 6
                            }}>
                                <i style={{color: "white"}} className="fa fa-trash" aria-hidden="true"></i>
                            </button>
                            <button style={{
                                height: 35,
                                width: "58px",
                                marginLeft: 17,
                                backgroundColor: "#32CD32",
                                border: "none",
                                borderRadius: 6
                            }}>
                                <i style={{color: "white"}} className="fa fa-cloud-download" aria-hidden="true"></i>
                            </button>
                            <Link to='/'>
                                <button style={{
                                    height: 35,
                                    width: "58px",
                                    marginLeft: 17,
                                    border: "none",
                                    borderRadius: 6
                                }}>
                                    <i className="fa fa-share-square" aria-hidden="true"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <table className='table table-striped'>
                    <tbody style={{backgroundColor: '#ffffffff'}} className='border-3'>
                    <tr>
                        <th>ID: </th>
                        <th>{customerDetail.id}</th>
                    </tr>
                    <tr>
                        <th>Mã: </th>
                        <th>{customerDetail.code}</th>
                    </tr>

                    <tr>
                        <th>Tên: </th>
                        <th>{customerDetail.name}</th>
                    </tr>
                    <tr>
                        <th>Địa chỉ: </th>
                        <th>{customerDetail.address}</th>
                    </tr>
                    <tr>
                        <th>Số điện thoại: </th>
                        <th>{customerDetail.phone}</th>
                    </tr>

                    <tr>
                        <th>Email: </th>
                        <th>{customerDetail.email}</th>
                    </tr>
                    <tr>
                        <th>Hộ chiếu: </th>
                        <th>{customerDetail.passport}</th>
                    </tr>
                    <tr>
                        <th>Tài khoản ngân hàng: </th>
                        <th>{customerDetail.accountBank}</th>
                    </tr>
                    <tr>
                        <th>Chính sách thanh toán: </th>
                        <th>{customerDetail.paymentTerm}</th>
                    </tr>
                    <tr>
                        <th>Ngày sinh: </th>
                        <th>{customerDetail.birthDay}</th>
                    </tr>
                    <tr>
                        <th>Hộ chiếu: </th>
                        <th>{customerDetail.birthDay}</th>
                    </tr>
                    <tr>
                        <th>Ngày cấp: </th>
                        <th>{customerDetail.dateRange}</th>
                    </tr>
                    <tr>
                        <th>Fax: </th>
                        <th>{customerDetail.fax}</th>
                    </tr>
                    <tr>
                        <th>Tên ngân hàng: </th>
                        <th>{customerDetail.bank}</th>
                    </tr>
                    <tr>
                        <th>Loại Khách hàng: </th>
                        <th>{customerDetail?.type}</th>
                    </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CustomerDetail;
