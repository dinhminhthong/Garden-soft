import CustomersList from "./component/CustomersList";
import './App.css'
import {Route, Routes} from "react-router-dom";

import CustomerCreate from "./component/CustomerCreate";
import React from "react";
import ToastContainer from "react-bootstrap/ToastContainer";
import Navbar from "./component/NavBar";
import ImportFile from "./component/ImportFile";
import CustomerDetail from "./component/CustomerDetail";

function App() {
  return (
   <>
     <Routes>
       <Route path='/' element={<CustomersList/>}/>
       <Route path='/create' element={<CustomerCreate/>}/>
       <Route path='/navbar' element={<Navbar/>}/>
       <Route path='/import' element={<ImportFile/>}/>
       <Route path='/detail/:id' element={<CustomerDetail/>}/>
     </Routes>
       <ToastContainer />
     </>
  );
}

export default App;
