import {Link, NavLink, useNavigate} from "react-router-dom";
import * as customersService from '../service/CustomerService'
import React from "react";

function NavbarTow() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light    "
                 style={{height: '50px', color: 'white', backgroundColor: '#5e97f3',padding:0}}>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{height:'100%'}}>
                    <ul className="navbar-nav mr-auto" style={{height:'100%'}}>
                        <li className="nav-item " style={{height:'100%'}}>
                            <NavLink to='/create' className='text-decoration-none ' style={({isActive}) =>
                                isActive
                                    ? {
                                height: '100%',
                                        display:'block',
                                        color: '#5e97f3',
                                        fontSize: 20, backgroundColor: '#ffffffff',padding:'10px'
                                    }
                                    : {display:'block',
                                color: '#ffffffff', fontSize: 20,backgroundColor: '#5e97f3',height: '100%',padding:'10px'}
                            }><i className="fa fa-check" aria-hidden="true"/> Nhâp liệu</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/import' className='text-decoration-none' style={({isActive}) =>
                                isActive
                                    ? {
                                        color: '#5e97f3',
                                        display:'block',
                                        height: '100%', fontSize: 20, backgroundColor: '#ffffffff',padding:'10px'
                                    }
                                    : {
                                        display:'block',height: '100%',
                                color: '#ffffffff', fontSize: 20, backgroundColor: '#5e97f3',padding:'10px'}
                            }><i className="fa fa-cloud-download" aria-hidden="true"/> Import
                                file </NavLink>
                        </li>
                    </ul>

                </div>
            </nav>


        </>
    )
}

export default NavbarTow;