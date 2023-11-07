import React, {useEffect, useState} from "react";
import * as XLSX from 'xlsx';
import * as customersService from '../service/CustomerService'
 import {useNavigate} from "react-router-dom";
import Navbar from "./NavBar";
import {Link,NavLink} from "react-router-dom";
import {Form} from "formik";
import NavbarTow from "./NavbarTow";
function ImportFile() {
    const navigate= useNavigate();
    const [excelFile, setExcelFile] = useState(null);
    const [typeError, setTypeError] = useState(null);

    const [type, setType] = useState([])

    useEffect( ()=>{
        const getAllTypeApi =async ()=>{
            let rs =  await customersService.findAllType();
            setType(rs);
        }
        getAllTypeApi()
    },[])
    // onchange event
    const handleFile=(e)=>{
        let fileTypes = ['application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','text/csv'];
        let selectedFile = e.target.files[0];
        if(selectedFile){
            if(selectedFile&&fileTypes.includes(selectedFile.type)){
                setTypeError(null);
                let reader = new FileReader();
                reader.readAsArrayBuffer(selectedFile);
                reader.onload=(e)=>{
                    setExcelFile(e.target.result);
                }
            }
            else{
                setTypeError('Vui lòng chỉ chọn loại tệp excel');
                setExcelFile(null);
            }
        }
        else{
            console.log('Vui lòng chọn tập tin của bạn');
        }
    }

    // submit event
    const handleFileSubmit= async(e)=>{
        e.preventDefault();
        if(excelFile!==null){
            const workbook = XLSX.read(excelFile,{type: 'buffer'});
            const worksheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[worksheetName];
            const data = XLSX.utils.sheet_to_json(worksheet);
            if (type && type.length>0){
               await customersService.saveAll(
                    data.slice(0,10).map((d)=>(
                 {...d,
                     id:null,
                     customerType:type.find(ts=>ts.type===d.customerType)
                            }
                        )
                    )
                );
            }
           navigate('/');
        }
    }
    return (
        <div className="wrapper">
            <Navbar/>
                <br/>
                <div className='container'>
                    <NavbarTow></NavbarTow>
                    <h3 className='d-flex align-items-center justify-content-between p-3 mt-1' >Upload & View Excel Sheets</h3>

                    {/* form */}
                    <form className="form-group custom-form" onSubmit={handleFileSubmit}>

                            <div >
                                <input type="file" className="form-control" required onChange={handleFile} />
                            </div>

                                <div className='mt-5'>
                                    <div style={{display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',}}>
                                        <NavLink to='/' className='btn btn-secondary'>Thoát</NavLink>
                                        <button className='btn btn-success' type='submit' style={{marginLeft: '10px'}}>Lưu</button>
                                    </div>
                        </div>
                        {typeError&&(
                            <div className="alert alert-danger" role="alert">{typeError}</div>
                        )}

                    </form>

                </div>
        </div>
    );
}

export default ImportFile;