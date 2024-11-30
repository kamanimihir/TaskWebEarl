import React from 'react'
import "./Footer.css"
import logo from "../img/logo.png";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <div className="w-[80%] mx-auto">
      <footer className="footer mt-14">
        <div className="footer-content flex gap-16">
          <div className="footer-section w-[30%] ">
            <div className="flex items-center gap-3">
              <img className="w-[54px] h-[57px]" src={logo} alt="" />
              <h1 className="text-4xl">Medical</h1>
            </div>
            <p className="description mt-5">
              Nam posuere accumsan porta. Integer id tincidunt sit amet sed
              libero.
            </p>
            <p className="copyright mt-9">&copy; Skyrev Theme 2021</p>
          </div>

          <div className="footer-section  flex w-[50%] gap-12">
            <div className="links flex flex-col gap-7">
              <h3 className="title text-blue-400 text-xl font-bold">COMPANY</h3>
              <ul className="flex flex-col gap-5">
                <li>Donec dignissim</li>
                <li>Curabitur egestas</li>
                <li>Nam posuere</li>
                <li>Aenean facilisis</li>
              </ul>
            </div>
            <div className="links flex flex-col gap-7">
              <h3 className="title text-blue-400 text-xl font-bold">
                SERVICES
              </h3>
              <ul className="flex flex-col gap-5">
                <li>Cras convallis</li>
                <li>Vestibulum faucibus</li>
                <li>Quisque lacinia purus</li>
                <li>Aliquam nec ex</li>
              </ul>
            </div>
            <div className="links flex flex-col gap-7">
              <h3 className="title text-blue-400 text-xl font-bold">
                RESOURCES
              </h3>
              <ul className="flex flex-col gap-5">
                <li>Suspendisse porttitor</li>
                <li>Nam posuere</li>
                <li>Curabitur egestas</li>
              </ul>
            </div>
          </div>

          <div className="footer-section ">
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
            <div className="language-selector">
              <div className="flex gap-3 mt-6">
                <FaFacebook className="text-2xl" />
                <FaLinkedin className="text-2xl" />
                <FaTwitter className="text-2xl" />
                <FaInstagramSquare className="text-2xl" />
              </div>
              <select className='mt-10'>
                <option value="en">English - En</option>
                <option value="es">Español - Es</option>
              </select>
             
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer