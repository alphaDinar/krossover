"use client";

import { DatePicker, Button, Input } from "@nextui-org/react";
import { IoCarSportOutline } from "react-icons/io5";
import { IoAirplaneOutline } from "react-icons/io5";
import { GrLicense } from "react-icons/gr";

const HeadBox = () => {
  const bgImg =
    "/head.jpg";

  const serviceList = [
    { tag: "Auto Services", icon: <IoCarSportOutline size={24} /> },
    { tag: "Travel & Tour", icon: <IoAirplaneOutline size={24} /> },
    { tag: "Driver Training", icon: <GrLicense size={24} /> },
    { tag: "Auto Services", icon: <IoCarSportOutline size={24} /> },
  ]

  return (
    <section className="relative flex flex-col items-center md-screen:gap-10">
      <section
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${bgImg})`,
        }}
        className="w-full min-h-[550px] flex justify-center items-center flex-col gap-5 p-40 text-center relative md-screen:p-10 sm-screen:min-h-[400px] sm-screen:p-10"
      >
        <section className="absolute w-full h-full z-10 bg-black opacity-30"></section>
        <section className="flex flex-col z-50 gap-10">
          <article className="flex flex-col">
            <strong className="text-white text-4xl sm-screen:text-2xl">
              Welcome To Krossover Transport Agency
            </strong>
            <span className="text-white text-[0.9rem] md-screen:hidden">
              {
                "A premier transport and logistics agency dedicated to providing efficient, safe, and timely transportation services. Whether you need cargo delivery, passenger transport, or customized logistics solutions, our team of experienced professionals ensures every journey is smooth and reliable. We leverage modern vehicles and cutting-edge technology to meet the diverse needs of our clients while maintaining high standards of safety and customer satisfaction"
              }
            </span>
            <span className="text-white text-[0.9rem] hidden md-screen:flex">
              {
                "A premier transport and logistics agency dedicated to providing efficient, safe, and timely transportation services. Whether you need cargo delivery, passenger transport, or customized logistics solutions, our team of experienced professionals ensures every journey is smooth and reliable. "
              }
            </span>
          </article>

          <section className="flex justify-center gap-5 md-screen:hidden">
            {serviceList.map((service, index) => (
              <div key={index} className="h-28 w-28 p-3 rounded-2xl  bg-secondary flex items-center justify-center relative">
                <div className="text-primary clip-triangle h-14 w-14 bg-white rotate-90 absolute top-0 pl-1 pt-1 left-0">
                  {service.icon}
                </div>

                <strong className="text-white">{service.tag}</strong>
              </div>
            ))}
          </section>
        </section>
      </section>

      <section className="hidden justify-center gap-5 md-screen:grid grid-cols-2">
            {serviceList.map((service, index) => (
              <div key={index} className="h-28 w-full p-3  bg-secondary flex items-center justify-center relative">
                <div className="text-primary clip-triangle h-14 w-14 bg-white rotate-90 absolute top-0 pl-1 pt-1 left-0">
                  {service.icon}
                </div>

                <strong className="text-white">{service.tag}</strong>
              </div>
            ))}
          </section>
    </section>
  );
};

export default HeadBox;
