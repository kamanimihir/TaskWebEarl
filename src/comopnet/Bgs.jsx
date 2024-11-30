import React from 'react'
import bgs from '../img/bgs.png'

function Bgs() {
  return (
    <>
      <div className="mt-16">
        <img src={bgs} alt="" />
      </div>
      <div className="button-card w-[70%] mx-auto">
        <div className="text-content">
          <h2>Ready to get started?</h2>
          <p>Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.</p>
        </div>
        <button className="cta-button">CREATE APPOINTMENT NOW!</button>
      </div>
    </>
  );
}

export default Bgs