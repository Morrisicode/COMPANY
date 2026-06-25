import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

const WHATSAPP_NUMBER = "231888636071";
const EMAIL_ADDRESS = "softwarevalaliberiainc@gmail.com";
const EMAIL_SUBJECT = encodeURIComponent("Website inquiry");
const EMAIL_BODY = encodeURIComponent(
  "Hi SVL,\n\nI'd like to learn more about your services.",
);
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20SVL%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services.`;
const mailtoUrl = `mailto:${EMAIL_ADDRESS}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`;

function Footer() {
  return (
    <>
      <div className="relative bg-slate-950 text-white px-5 flex flex-wrap justify-between items-start py-16 gap-10 md:px-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none"></div>

        <nav className="flex flex-col p-2 gap-2 z-10">
          <h3 className="text-orange-500 font-bold">Quick Links</h3>
          <Link className="hover:text-cyan-400" to="/">
            Home
          </Link>
          <Link className="hover:text-cyan-400" to="/about">
            About
          </Link>
          <Link className="hover:text-cyan-400" to="/services">
            Services
          </Link>
          <Link className="hover:text-cyan-400" to="/contact">
            Contact
          </Link>
          <Link className="hover:text-cyan-400" to="/team">
            Team
          </Link>
        </nav>

        <div className="z-10">
          <h3 className="text-orange-500 font-bold">Our Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Mobile App Development</li>
            <li>SEO</li>
            <li>Management System</li>
            <li>CCTV Camera Installation</li>
            <li>Electricity</li>
            <li>Web Hosting & Maintenance</li>
          </ul>
        </div>

        <div className="z-10 pb-10">
          <h3 className="text-orange-500 font-bold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FiPhone />
              <a className="hover:text-cyan-400" href="tel:+231888636071">
                231888636071
              </a>
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineWhatsApp />
              <a
                className="hover:text-cyan-400"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiMail />
              <a className="hover:text-cyan-400" href={mailtoUrl}>
                {EMAIL_ADDRESS}
              </a>
            </li>
          </ul>
        </div>

        <div className="z-10 pb-10">
          <h3 className="text-orange-500 font-bold" target="_blank">
            Our Office
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FiMapPin />
              <span>ELWA Junction, Monrovia, Liberia</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-slate-950 text-white text-center pb-5">
        <p>© {new Date().getFullYear()} SVL. All Rights Reserved.</p>
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-transform duration-200 hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <AiOutlineWhatsApp size={26} />
      </a>
    </>
  );
}

export default Footer;
