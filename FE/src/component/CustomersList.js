import * as customersService from '../service/CustomerService'
import React, {useEffect, useState} from "react";
import * as XLSX from "xlsx";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
import {BsSearch} from "@react-icons/all-files/bs/BsSearch";
import {Formik,Field,Form,ErrorMessage} from "formik";
import Swal from "sweetalert2";
function CustomersList() {
    const [customers, setCustomers] = useState([]);
    const [customersExport, setCustomersExport] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0)
    const [selectAll, setSelectAll] = useState(false);
    const handlePageClick = async (page) => {
        setCurrentPage(+page.selected);
        const result = await customersService.findAllByPage(page.selected);
        setCustomers(result.content)
    };
    const showList = async () => {
        try {
            const result = await customersService.findAllByPage(currentPage);
            setCustomers(result.content)
            setPageCount(result.totalPages);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        const getAllByExport = async () => {
            let rs = await customersService.findAll()
            setCustomersExport(rs)
        }
        getAllByExport()
        showList();
    }, [pageCount]);

    const handleSelectAll = (e) => {
        const checked = e.target.checked;
        setSelectAll(checked);

        const checkBox = document.querySelectorAll('input[type="checkbox"]');
        checkBox.forEach((checkboxes, index) => {
            if (index !== 0) { // Bỏ qua checkbox đầu tiên
                checkboxes.checked = checked;
            }
        });
    };
    const handleOnExport = () => {
        let wb = XLSX.utils.book_new();
        if (customersExport && customersExport.length > 0) {
            var modifiedCustomers = customersExport?.map(c => (
                delete c['delete'],
                    {
                        ...c,
                        customerType: c.customerType.type
                    }
            ))
        }
        let ws = XLSX.utils.json_to_sheet(modifiedCustomers);
        console.log(wb)
        XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
        XLSX.writeFile(wb, "MyExcel.xlsx")
    }

    return (

        <>

            <div className="container">
                <div>
                    <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
                        <h5><i className="fa-regular fa-bookmark"/> Khách hàng</h5>

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
                            }} onClick={handleOnExport}>
                                <i style={{color: "white"}} className="fa fa-cloud-download" aria-hidden="true"></i>
                            </button>
                            <button style={{
                                height: 35,
                                width: "58px",
                                marginLeft: 17,
                                border: "none",
                                borderRadius: 6
                            }}>
                                <i className="fa fa-share-square" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <Formik initialValues={{name:''}} onSubmit={(value)=>{
                    debugger
                        const search = async()=>{
                            let rs = await customersService.searchName(value.name)
                            if (rs?.length===0){
                                 Swal.fire({
                                    title: 'Thông báo!',
                                    text: `Không tìm thấy khách hàng`,
                                    icon: 'error',
                                    confirmButtonText: 'OK',
                                });

                                 showList()
                            }
                            setCustomers(rs);
                        }
                    search()

                }}
                >
                    <Form>
                        <div>
                            <div className="d-flex row g-3 me-2 pb-3 pt-3 mr">
                                <div className='col-md-6'></div>
                                <div className="col-md-5 d-flex justify-content-end">
                                    <Field type="text" className="form-control" name='name'
                                           placeholder="Tìm kiếm"/>
                                </div>
                                <div className="col-md-1 d-flex justify-content-end" style={{marginRight: 'auto'}}>
                                    <button type='submit' className="btn btn-secondary btn-block"><BsSearch/> Tìm</button>
                                </div>
                            </div>
                        </div>
                    </Form>

                </Formik>

                <table className='table table-striped'>
                    <thead style={{backgroundColor: '#5e97f3'}} className='border-3'>
                    <tr>
                        <th><input type="checkbox" onChange={handleSelectAll} checked={selectAll} /></th>
                        <th>Mã</th>
                        <th>Tên</th>
                        <th>Loại</th>
                        <th>Địa chỉ</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>ID/Passport</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        customersExport && customersExport.length > 0 ? (
                            customers?.map((value, index) => (
                                <tr key={index}>
                                    <th><input type="checkbox"/></th>
                                    <td>
                                        <Link to={`/detail/${value.id}`}>{value.code}</Link>
                                    </td>
                                    <td>{value.name}</td>
                                    <td>{
                                        value?.customerType.type
                                    }</td>
                                    <td>{value.address}</td>
                                    <td>{value.phone}</td>
                                    <td>{value.email}</td>
                                    <td>{value.passport}</td>
                                </tr>
                            ))
                        ) : <tr>
                            <td colSpan={8} className="text-center">Không có khách hàng nào. <Link to={'/create'}>Cần
                                thêm
                                mới</Link></td>
                        </tr>
                    }
                    </tbody>
                </table>
                <div className="row mt-3 mb-5">
                    <div className="d-flex col-12 justify-content-end">
                        <div className="d-grid">
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel={customers?.length === 0 || pageCount === 1 ? "" : "Sau"}
                                onPageChange={handlePageClick}
                                pageCount={pageCount}
                                previousLabel={customers?.length === 0 || pageCount === 1 ? "" : "Trước"}
                                containerClassName="pagination"
                                pageLinkClassName={customers?.length === 0 ? "" : "page-num"}
                                nextLinkClassName={customers?.length === 0 ? "" : "page-num"}
                                previousLinkClassName={customers?.length === 0 ? "" : "page-num"}
                                activeClassName="active"
                                disabledClassName="d-none"
                                marginPagesDisplayed={1} // Hiển thị 1 trang bên trái và bên phải của trang hiện tại
                                pageRangeDisplayed={3} // Hiển thị 3 trang
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomersList;