"use client";
import FooterBox from "@/components/FooterBox";
import TopNav from "@/components/TopNav/TopNav";
import { mainStyles } from "@/styles/styles";
import { roomList } from "@/types/rooms";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { GoPlusCircle } from "react-icons/go";

const Rooms = () => {
  const place = "https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2023/09/Indulge-In-Opulence-50-Luxurious-Bedroom-Decor-Ideas-1-1024x788.jpg";

  return (
    <main className={mainStyles}>
      <TopNav />

      <section className="flex flex-col gap-20 sm-screen:gap-12" id="hor">

        {roomList.map((room, i) => (
          <section className="flex flex-col gap-5" key={i}>
            <section className="grid grid-cols-2 gap-10 md-screen:flex md-screen:flex-col md-screen:gap-5">
              <section className="flex flex-col gap-2">
                <section className="h-96 relative overflow-hidden rounded-[20px] sm-screen:h-72">
                  <Image alt="" src={room.gallery[0]} className="object-cover" fill />
                </section>
                <article className="grid grid-cols-5 gap-2 sm-screen:grid-cols-3">
                  {room.gallery.map((el, ii) => (
                    <div className="h-28 overflow-hidden  relative rounded-[10px] sm-screen:even:hidden sm-screen:h-24" key={ii}>
                      <Image alt="" src={el} fill className="object-cover" />
                    </div>
                  ))}
                </article>
              </section>
              <section className="flex flex-col gap-5">
                <article className="flex flex-col">
                  <strong className="text-xl">{room.name}</strong>
                  <small>{room.gist}</small>
                  <small>{room.description}</small>
                </article>

                <article className="flex flex-col">
                  <strong className="text-lg">4 Guest</strong>
                  <small>capacity</small>
                </article>

                <article className="text-3xl text-gray-500">
                  <strong>GHS {room.price.toLocaleString()}</strong>
                </article>

                <section className="flex flex-col gap-2">
                  <strong>Features</strong>
                  <article>
                    {room.features.map((fo, fi) => (
                      <p className="flex gap-2 items-center" key={fi}>
                        <GoPlusCircle />
                        <small>{fo.tag}</small>
                      </p>
                    ))}
                  </article>
                </section>

                <Button className="w-max bg-[var(--theme)] text-white">Book now</Button>
              </section>
            </section>

          </section>
        ))}

      </section>

      <FooterBox />
    </main>
  );
}

export default Rooms;