import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Login from '../pages/Login';

function Protected() {
    let Logedin = useSelector((state) => state.auth.Adminisloggedin);
    console.log(Logedin);
  return (
     // if logedin is true it will render the children otherwise it will render login page
    Logedin ? <Outlet/> : <Navigate replace to= '/login'></Navigate>
    );
  
}

export default Protected
