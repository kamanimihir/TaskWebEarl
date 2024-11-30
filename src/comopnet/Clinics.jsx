import React from "react";
import img1 from "../img/img1.jpeg";
import img2 from "../img/img2.jpeg";
import img3 from "../img/img3.jpeg";
import img4 from "../img/img4.jpeg"
import img5 from "../img/img5.jpeg"
import img6 from "../img/img6.jpeg"

function Clinics() {
  const clinic = [
    {
      img: img1,
      title: "Head Quarter",
      icon: "📞",
      fhone: "+123 456 78 91",
      eicon: "✉️",
      email: "hello@luxi.com",
      location: "📍",
      crlocal: "Lorem ipsum street no 14 Block A",
      button: "Contact",
    },
    {
      img: img2,
      title: "Head Quarter",
      icon: "📞",
      fhone: "+123 456 78 91",
      eicon: "✉️",
      email: "hello@luxi.com",
      location: "📍",
      crlocal: "Lorem ipsum street no 14 Block A",
      button: "Contact",
    },
    {
      img: img3,
      title: "Head Quarter",
      icon: "📞",
      fhone: "+123 456 78 91",
      eicon: "✉️",
      email: "hello@luxi.com",
      location: "📍",
      crlocal: "Lorem ipsum street no 14 Block A",
      button: "Contact",
    },
  ];
  const clinic1 = [
    {
      img: img4,
      title: "Head Quarter",
      icon: "📞",
      fhone: "+123 456 78 91",
      eicon: "✉️",
      email: "hello@luxi.com",
      location: "📍",
      crlocal: "Lorem ipsum street no 14 Block A",
      button: "Contact",
    },
    {
      img: img5,
      title: "Head Quarter",
      icon: "📞",
      fhone: "+123 456 78 91",
      eicon: "✉️",
      email: "hello@luxi.com",
      location: "📍",
      crlocal: "Lorem ipsum street no 14 Block A",
      button: "Contact",
    },
    {
      img: img6,
      title: "Head Quarter",
      icon: "📞",
      fhone: "+123 456 78 91",
      eicon: "✉️",
      email: "hello@luxi.com",
      location: "📍",
      crlocal: "Lorem ipsum street no 14 Block A",
      button: "Contact",
    },
  ];
  return (
    <div className="w-[80%] mx-auto mt-16">
      <div>
        <h1 className="text-4xl">Our Clinics</h1>
        <p className="mt-3">
          Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate
          sed.
        </p>
      </div>
      <div className="flex gap-9">
        <div className="w-[100%] mt-8">
          {clinic.map((item) => (
            <div className="card mt-5">
              <div className="card-image">
                <img src={item.img} alt="Building" />
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <div className="flex justify-between">
                  <p>
                    <span className="icon">{item.icon}</span> {item.fhone}
                  </p>
                  <p>
                    <span className="icon">{item.eicon}</span> {item.email}
                  </p>
                </div>
                <p>
                  <span className="icon">{item.location}</span>
                  {item.crlocal}
                </p>
                <button className="contact-btn">{item.button}</button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[100%] mt-8">
          {clinic1.map((item) => (
            <div className="card mt-5">
              <div className="card-image">
                <img src={item.img} alt="Building" />
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <div className="flex justify-between">
                  <p>
                    <span className="icon">{item.icon}</span> {item.fhone}
                  </p>
                  <p>
                    <span className="icon">{item.eicon}</span> {item.email}
                  </p>
                </div>
                <p>
                  <span className="icon">{item.location}</span>
                  {item.crlocal}
                </p>
                <button className="contact-btn">{item.button}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clinics;
