import React from "react";
import { CiSettings } from "react-icons/ci";
import logo from "../img/logo.png";

function Heder() {
  return (
    <div className="w-[80%] flex justify-between  mx-auto">
      <div className=" flex items-center  gap-12  m-5">
        <div className="flex items-center gap-3">
          <img className="w-[54px] h-[57px]" src={logo} alt="" />
          <h1 className="text-4xl">Medical</h1>
        </div>
        <div>
          <ul className="flex gap-5 text-lg">
            <li>Menu1</li>
            <li>Menu2</li>
            <li>Menu3</li>
            <li>Menu4</li>
            <li>Menu5</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <button className=" btn-1  ">
          LOGIN
        </button>
        <button className="btn-2">
          REGISTER
        </button>
        <p>|</p>
        <p className="text-2xl">
          <CiSettings />
        </p>
      </div>
    </div>
  );
}

export default Heder;
