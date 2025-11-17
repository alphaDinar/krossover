"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const MemoryBox = () => {
  const place = "/images/memory.jpg";

  const memories = [
    {
      title: "Luxurious Comfort",
      description:
        "Experience the perfect blend of modern amenities and cozy living spaces designed to make you feel instantly at home. Every room is thoughtfully crafted for your comfort.",
    },
    {
      title: "Prime Location",
      description:
        "Situated in the heart of the city, you're just minutes away from popular attractions, restaurants, and shopping districts. The perfect base for your adventures.",
    },
    {
      title: "Personalized Service",
      description:
        "Our dedicated staff is available 24/7 to ensure your stay exceeds expectations. From concierge services to maintenance requests, we're here to help.",
    },
    {
      title: "Community Living",
      description:
        "Join a vibrant community of residents who share your appreciation for quality living. Enjoy common areas designed for both relaxation and social interaction.",
    },
  ];

  return (
    <section
      id="hor"
      className="flex flex-col items-center gap-4 bg-gray-100 py-20 md-screen:py-10 md-screen:mt-10"
    >
      <header className="flex flex-col gap-2 items-center text-center">
        <strong className="text-2xl">Make Lasting Memories</strong>
        <small>
          Transform your stay into unforgettable moments in our thoughtfully
          designed spaces. Whether you&apos;re here for a night or making it
          your home, every detail is crafted for your comfort.
        </small>
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
              <span className="bg-[var(--theme)] px-2 rounded-md text-white">
                0{i + 1}
              </span>
              <strong>{memory.title}</strong>
              <small className="w-4/5">{memory.description}</small>
            </article>
          ))}
          <Button as={Link} href="/rooms" className="bg-[var(--theme)] mt-3 w-max text-white">
            Explore Our Spaces
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
