"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const MemoryBox = () => {
  const place = "/images/memory.jpg";

  const memories = [
    {
      title: "Auto Services",
      description:
        "Keep your vehicles in top condition with our professional auto services. From routine maintenance to repairs, our skilled technicians ensure your vehicle runs smoothly and safely.",
    },
    {
      title: "Transport Services",
      description:
        "Reliable and efficient transport solutions for individuals and businesses. Whether it’s cargo delivery, passenger transport, or logistics management, we get you where you need to be on time.",
    },
    {
      title: "Travel & Tour",
      description:
        "Explore new destinations with ease using our travel and tour services. We provide well-planned itineraries, comfortable vehicles, and experienced guides to make every journey memorable.",
    },
    {
      title: "Driver Training",
      description:
        "Learn from certified professionals through our comprehensive driver training programs. Whether you’re a beginner or looking to enhance your skills, we prepare you for safe and confident driving.",
    },
  ];


  return (
    <section
      id="hor"
      className="flex flex-col items-center gap-4 bg-gray-100 py-20 md-screen:py-10 md-screen:mt-10"
    >
      <header className="flex flex-col gap-2 items-center text-center">
        <strong className="text-2xl">Drive Your Journey Forward</strong>
        <span>
          Experience seamless travel with our comprehensive transport solutions.
          From auto services and reliable transport to guided tours and professional driver training,
          every service is designed to keep you moving safely and efficiently.
        </span>

      </header>
      <section
        className="grid grid-cols-2 w-full
          md-screen:flex md-screen:flex-col md-screen:items-center md-screen:gap-7"
      >
        <section
          className="flex flex-col gap-4
            md-screen:items-center"
        >
          {memories.map((memory, i) => (
            <article
              className="flex flex-col items-start md-screen:items-center md-screen:text-center"
              key={i}
            >
              <span className="bg-primary px-2 rounded-md text-white">
                0{i + 1}
              </span>
              <strong>{memory.title}</strong>
              <small className="w-4/5">{memory.description}</small>
            </article>
          ))}
          <Button as={Link} href="/" color="primary" className="mt-3 w-max text-white">
            Explore Our Services
          </Button>
        </section>
        <section className="h-96 w-72 m-auto relative rounded-[20px] overflow-hidden">
          <Image alt="Luxury condo interior" src={place} fill objectFit="cover" />
        </section>
      </section>
    </section>
  );
};

export default MemoryBox;
