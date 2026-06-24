import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import React from "react";

function Mainlayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Mainlayout;
