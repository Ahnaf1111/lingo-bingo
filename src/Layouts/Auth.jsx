import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="font-Montserrat bg-gradient-to-br from-blue-50 to-purple-100">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Auth;
