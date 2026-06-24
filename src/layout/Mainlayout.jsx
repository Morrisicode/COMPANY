import Navbar from "../components/Navbar";
import WhatsAppFloating from "../components/WhatsAppFloating";
import { Outlet } from "react-router-dom";
import React from "react";

function Mainlayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <WhatsAppFloating />
    </div>
  );
}

export default Mainlayout;
