import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const date = () => {
    new Date().getFullYear();
  };
  return (
    <>
      <div className="bg-slate-950 text-white px-5 flex flex-wrap justify-between items-center py-full gap-10 md:px-10 md:pb-30">
        {/* Navigation */}
        <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full"></div>

        <nav className="flex flex-col p-2 gap-1 text">
          <h3 className="text-orange-500 font-bold"> Quick Links</h3>
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/portfolio">Portfolio</Link>

          <Link to="/services">Services</Link>

          <Link to="/contact">Contact</Link>

          <Link to="/team">Team</Link>
        </nav>

        {/* Services */}
        <div>
          <h3 className="text-orange-500 font-bold">Our Services</h3>
          <li className="list-none">Mobile App Development</li>
          <li className="list-none">SEO </li>
          <li className="list-none">Management System</li>
          <li className="list-none">CCTV Camera Installation</li>
          <li className="list-none">Electricity</li>
          <li className="list-none">Web Hosting & Maintainance</li>
        </div>

        {/* Contact */}
        <div className="pb-10">
          <h3 className="text-orange-500 font-bold">Contact</h3>
          <li className="list-none">Whatsapp</li>
          <li className="list-none">Email</li>
        </div>

        {/* Office Location*/}
        <div className=" pb-10">
          <h3 className="text-orange-500 font-bold">Our Office</h3>
          <li className="list-none">ELWA Junction, Monrovia Liberia</li>
        </div>
      </div>
      <div className="bg-slate-950 text-white text-center pb-5 ">
        <p className="">
          © {new Date().getFullYear()} SVL. All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
