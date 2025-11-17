"use client";
import FooterBox from "@/components/FooterBox";
import TopNav from "@/components/TopNav/TopNav";
import { Amenity, amenityList } from "@/types/amenity";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { GoPlusCircle } from "react-icons/go";
import { MdEast } from "react-icons/md";

const Amenities = () => {

  const leftBox = (amenity: Amenity, i: number) => {
    return (
      <section className="grid grid-cols-[4fr_6fr] gap-10  md-screen:grid-cols-1 md-screen:gap-3" key={i}>
        <div className="w-full h-96 relative sm-screen:h-64 rounded-[20px] overflow-hidden">
          <Image fill className="object-cover" alt="" src={amenity.gallery[0]} />
        </div>
        <section className="flex flex-col gap-4">
          <section className="flex flex-col">
            <strong className="text-xl">{amenity.name}</strong>
            <span className="text-[0.9rem]">{amenity.description}</span>
          </section>
          <section className="flex flex-col gap-2">
            <strong>Features</strong>
            <article>
              {amenity.features.map((fo, fi) => (
                <p className="flex gap-2 items-center" key={fi}>
                  <GoPlusCircle />
                  <span className="text-[0.9rem]">{fo.tag}</span>
                </p>
              ))}
            </article>

          </section>
          {/* <Button className="w-max rounded-md">Read More...</Button> */}
        </section>
      </section>
    )
  }

  const rightBox = (amenity: Amenity, i: number) => {
    return (
      <section className="grid grid-cols-[6fr_4fr] gap-10 md-screen:flex md-screen:flex-col-reverse md-screen:gap-3" key={i}>
        <section className="flex flex-col gap-4">
          <section className="flex flex-col">
            <strong className="text-xl">{amenity.name}</strong>
            <span className="text-[0.9rem]">{amenity.description}</span>
          </section>
          <section className="flex flex-col gap-2">
            <strong>Features</strong>
            <article>
              {amenity.features.map((fo, fi) => (
                <p className="flex gap-2 items-center" key={fi}>
                  <GoPlusCircle />
                  <span className="text-[0.9rem]">{fo.tag}</span>
                </p>
              ))}
            </article>

          </section>
          {/* <Button className="w-max rounded-md">Read More...</Button> */}
        </section>
        <div className="w-full h-96  relative sm-screen:h-64 rounded-[20px] overflow-hidden">
          <Image fill className="object-cover" alt="" src={amenity.gallery[0]} />
        </div>
      </section>
    )
  }

  return (
    <main className="grid gap-10 sm-screen:gap-4">
      <TopNav />

      <section className="grid gap-7 sm-screen:flex sm-screen:flex-col sm-screen:gap-4" id="hor">
        <strong className="text-3xl">Amenities</strong>


        <section className="grid gap-20 md-screen:gap-12 sm-screen:w-full">
          {amenityList.map((amenity, i) => (
            (i + 1) % 2 === 0 ? rightBox(amenity, i) : leftBox(amenity, i)
          ))}
        </section>
      </section>


      <FooterBox />
    </main>
  );
}

export default Amenities;