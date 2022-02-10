import { Navigate,Outlet } from "react-router-dom";

import React from 'react';

const ProtectLogin = () => {
  
if(localStorage.getItem("token")){
    return <Outlet/>
}else{
    return <Navigate to="/login"/>
}
};

export default ProtectLogin;






















