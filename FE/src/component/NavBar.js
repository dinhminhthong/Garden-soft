import {Link, NavLink, useNavigate} from "react-router-dom";
import * as customersService from '../service/CustomerService'
import React from "react";
function Navbar() {
return(
    <>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light   "style={{height: '70px', color: 'white', backgroundColor: '#5e97f3'}}>

                <h3 className='d-flex align-items-center justify-content-between p-3 mt-1'
                    style={{height: '50px', color: 'white', backgroundColor: '#5e97f3'}}>Thêm mới</h3>
                {/*<NavLink to='/' className='navbar-brand'>*/}
                {/*    Garden Soft*/}
                {/*</NavLink>*/}
                {/*<button*/}
                {/*    className="navbar-toggler"*/}
                {/*    type="button"*/}
                {/*    data-toggle="collapse"*/}
                {/*    data-target="#navbarSupportedContent"*/}
                {/*    aria-controls="navbarSupportedContent"*/}
                {/*    aria-expanded="false"*/}
                {/*    aria-label="Toggle navigation"*/}
                {/*>*/}
                {/*    <span className="navbar-toggler-icon" />*/}
                {/*</button>*/}
                {/*<div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
                {/*    <ul className="navbar-nav mr-auto">*/}
                {/*        <li className="nav-item active">*/}
                {/*            <NavLink to='/create'className="nav-link">Nhâp liệu</NavLink>*/}
                {/*        </li>*/}
                {/*        <li className="nav-item">*/}
                {/*            <NavLink to='/import' className="nav-link">Import file </NavLink>*/}
                {/*        </li>*/}
                {/*        <li className="nav-item dropdown">*/}
                {/*            <a*/}
                {/*                className="nav-link dropdown-toggle"*/}
                {/*                href="#"*/}
                {/*                id="navbarDropdown"*/}
                {/*                role="button"*/}
                {/*                data-toggle="dropdown"*/}
                {/*                aria-haspopup="true"*/}
                {/*                aria-expanded="false"*/}
                {/*            >*/}
                {/*                Dropdown*/}
                {/*            </a>*/}
                {/*            <div className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
                {/*                <a className="dropdown-item" href="#">*/}
                {/*                    Action*/}
                {/*                </a>*/}
                {/*                <a className="dropdown-item" href="#">*/}
                {/*                    Another action*/}
                {/*                </a>*/}
                {/*                <div className="dropdown-divider" />*/}
                {/*                <a className="dropdown-item" href="#">*/}
                {/*                    Something else here*/}
                {/*                </a>*/}
                {/*            </div>*/}
                {/*        </li>*/}
                {/*        <li className="nav-item">*/}
                {/*            <a className="nav-link disabled" href="#">*/}
                {/*                Thanh Toán*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*    </ul>*/}

                {/*</div>*/}
            </nav>
        </div>


    </>
)
}
export default Navbar;