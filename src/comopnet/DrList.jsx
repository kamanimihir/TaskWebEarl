import { icons } from "antd/es/image/PreviewGroup";
import React from "react";

function DrList() {
  const parshnDitel = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_XAKqFiXUPYKF2qXPFZcDmzQ7SoDJj_OiQ&s",
      drname: "Dr. John Doe",
      local: "Pediatric Surgeon",
      icon: "👍",
      pr: "95%",
      icon2: "📅",
      yars: "4 Years",
      button: "Chat",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6iiaPMXIleWBeXDuElgGZ9PvI3bVudL7Dg&s",
      drname: "Dr. John Doe",
      local: "Pediatric Surgeon",
      icon: "👍",
      pr: "95%",
      icon2: "📅",
      yars: "4 Years",
      button: "Chat",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHSU_zArqJIZXDVx1udE230PXclicTntshyQ&ss",
      drname: "Dr. Jim Doe",
      local: "Pediatric Surgeon",
      icon: "👍",
      pr: "95%",
      icon2: "📅",
      yars: "4 Years",
      button: "Chat",
    },
  ];

  const parshnDitel1 = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIT9ST4josxREtNqwSY7eeFow1WZFsidwFOA&s",
      drname: "Dr. John Doe",
      local: "Pediatric Surgeon",
      icon: "👍",
      pr: "95%",
      icon2: "📅",
      yars: "4 Years",
      button: "Chat",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbvYLEVI57AHDOllIA3sPZqCw1TOQ9pcBLbw&s",
      drname: "Dr. James Doe",
      local: "Pediatric Surgeon",
      icon: "👍",
      pr: "95%",
      icon2: "📅",
      yars: "4 Years",
      button: "Chat",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIZi6KgwFmA6BEJtyaj4yGWv_t2cGZRHfLw&s",
      drname: "Dr. Joana Doe",
      local: "Pediatric Surgeon",
      icon: "👍",
      pr: "95%",
      icon2: "📅",
      yars: "4 Years",
      button: "Chat",
    },
  ];
  return (
    <div className="w-[80%] mx-auto mt-2">
      <div className="flex">
        <div className="w-[30%] ">
          <h1 className="text-5xl">Ask Doctos</h1>
          <br />
          <br />
          <button>All</button>
          <br />
          <br />
          <button>Orthopedic</button>
          <br />
          <br />
          <button>Nutritionist</button>
          <br />
          <br />
          <button>Pediatric</button>
          <br />
          <br />
          <button>Anaesthestic</button>
        </div>
        <div className="flex gap-48">
          <div>
            {parshnDitel.map((item) => (
              <div className="doctor-card relative mt-10">
                <div className="doctor-image absolute top-[-30px] left-[-25px]">
                  <img src={item.img} alt="Doctor" />
                </div>
                <div className="doctor-details ms-14">
                  <h3>{item.drname}</h3>
                  <p className="specialization">{item.local}</p>
                  <hr />
                  <div className="doctor-stats">
                    <div className="stat">
                      <span>{item.icon}</span>
                      <span>{item.pr}</span>
                    </div>
                    <div className="stat">
                      <span>{item.icon2}</span>
                      <span>{item.yars}</span>
                    </div>
                    <button className="chat-button">{item.button}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            {parshnDitel1.map((item) => (
              <div className="doctor-card relative mt-10">
                <div className="doctor-image absolute top-[-30px] left-[-25px]">
                  <img src={item.img} alt="Doctor" />
                </div>
                <div className="doctor-details ms-14">
                  <h3>{item.drname}</h3>
                  <p className="specialization">{item.local}</p>
                  <hr />
                  <div className="doctor-stats">
                    <div className="stat">
                      <span>{item.icon}</span>
                      <span>{item.pr}</span>
                    </div>
                    <div className="stat">
                      <span>{item.icon2}</span>
                      <span>{item.yars}</span>
                    </div>
                    <button className="chat-button">{item.button}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrList;
