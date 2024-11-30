import React from 'react'
import spc from '../img/Spc.png'

function Speciality() {
  return (
    <div className="w-[80%] mx-auto mt-2">
      <div className="flex justify-between items-center">
        <div className="hero-bos w-1/2">
          <h1 className="text-3xl font-bold">Our Speciality </h1>
          <p className="mt-5 font-light text-2xl">
            Curabitur egestas consequat lorem, vel fermentum augue porta id.
            Aliquam lobortis magna neque, gravida consequat velit venenatis at.
          </p>
          <div className="mt-10">
            <div className="flex gap-4">
              <button className="hover-button2">Dentist</button>
              <button className="hover-button2"> Padriatic</button>
              <button className="hover-button2">Cardiology</button>
            </div>
            <div className="flex mt-2 gap-4">
              <button className="hover-button1">Traunatologa</button>
              <button className="hover-button1">Othopaedi</button>
              <button className="hover-button1">Anestesiology</button>
            </div>
            <div className="flex mt-2 gap-4">
              <button className="hover-button2">Reumatologi</button>
              <button className="hover-button2">Andrologi</button>
              <button className="hover-button2">Ortodonsia</button>
            </div>
          </div>
        </div>
        <div>
          <img className="w-[520px] h-[520px]" src={spc} alt=" " />
        </div>
      </div>
    </div>
  );
}

export default Speciality