import React from 'react'
import hero from '../img/hero(1).png'
import { FaHome } from "react-icons/fa";
import { IoLockClosedSharp } from "react-icons/io5";
import { IoIosContacts } from "react-icons/io";



function Hero() {
  return (
    <>
      <div className="w-[80%] mx-auto mt-2">
        <div className="flex justify-between items-center">
          <div className="hero-bos">
            <h1 className="text-3xl font-bold"> Lorem ipsum dolor amet </h1>
            <p className="mt-9 font-light text-2xl">
              Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum
              lobortis.
            </p>
            <div className="flex gap-10 mt-9">
              <button className="text-green-600">MORE INFO</button>
              <button className="hover-button">REGISTER NOW</button>
            </div>
          </div>
          <div>
            <img className="w-[659px] h-[381px]" src={hero} alt=" " />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-12 ">
        <div className="flex space-x-8">
          <div className="text-left">
            <h3 className="text-lg font-semibold text-blue-600">
              Business Solution
            </h3>
            <div className="w-16 h-1 bg-blue-600 mt-1"></div>
            <p className="text-gray-500 mt-2">
              Interdum et malesuada fames ac ante...
            </p>
          </div>

          <div className="text-left border-l-2 ps-5">
            <h3 className="text-lg font-semibold text-gray-700">
              Free project quote
            </h3>
            <p className="text-gray-500 mt-2">
              Interdum et malesuada fames ac ante...
            </p>
          </div>
          <div className="text-left border-l-2 ps-5">
            <h3 className="text-lg font-semibold text-gray-700">
              Nulla lobortis nunc
            </h3>
            <p className="text-gray-500 mt-2">
              Interdum et malesuada fames ac ante...
            </p>
          </div>
        </div>
      </div>
      <div className="w-[60%] mx-auto mt-14 flex gap-20 text-center ">
        <div>
          <div className="flex justify-center gap-2 text-center">
            <IoIosContacts className="text-6xl text-blue-500" />

            <div>
              <h1 className="text-3xl text-green-700">+1200</h1>
              <h1 className="text-2xl">Clinics</h1>
            </div>
          </div>
          <div>
            Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam.
          </div>
        </div>
        <div>
          <div className="flex justify-center gap-2 text-center">
            <FaHome className="text-6xl text-blue-500" />
            <div>
              <h1 className="text-3xl text-green-700">+1200</h1>
              <h1 className="text-2xl">Clinics</h1>
            </div>
          </div>
          <div>
            Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam.
          </div>
        </div>
        <div>
          <div className="flex justify-center gap-2 text-center">
            <IoLockClosedSharp className="text-6xl text-blue-500" />

            <div>
              <h1 className="text-3xl text-green-700">+1200</h1>
              <h1 className="text-2xl">Clinics</h1>
            </div>
          </div>
          <div className="text-center">
            Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam.
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero