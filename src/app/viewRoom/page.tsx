"use client";
import TopNav from "@/components/TopNav/TopNav";
import { mainStyles } from "@/styles/styles";
import { Room } from "@/types/rooms";
import { Button, DatePicker, Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { GoPlusCircle } from "react-icons/go";
import { MdEast, MdFavorite, MdIosShare, MdOutlineFavoriteBorder, MdShare } from "react-icons/md";

const ViewRoom = ({ searchParams }: { searchParams: { room: string } }) => {
  const room = JSON.parse(searchParams.room) as Room;
  const gallery = [
    "https://a0.muscache.com/im/pictures/miso/Hosting-52128141/original/2f885a34-191b-4b95-9797-799cd514d721.jpeg?im_w=960",
    "https://a0.muscache.com/im/pictures/miso/Hosting-52128141/original/4ca3d85f-3692-4f75-8c67-7d9839dc44f3.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-52128141/original/36dca993-5420-491f-b804-beeeea41471a.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-52128141/original/6ff873c9-7dc7-4137-8456-b1c5a776a669.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/9638bc07-c6ba-425f-b4c6-540af08c807c.jpg?im_w=720"
  ]
  return (
    <main className={mainStyles}>
      <TopNav />

      <section id="hor" className="grid gap-7 sm-screen:gap-7">
        <header className="flex justify-between items-center sm-screen:flex-col">
          <strong className="text-2xl">{room.name}</strong>

          <nav className="flex gap-4 items-center">
            <p className="flex items-center gap-1">
              <MdIosShare />
              <span>Share</span>
            </p>
          </nav>
        </header>

        <section className="grid grid-cols-2 gap-2 md-screen:grid-cols-1">
          <section className="relative h-96 sm-screen:h-52">
            <Image alt="" className="object-cover" fill src={gallery[0]} />
          </section>

          <section className="grid grid-cols-2 gap-2 h-96 sm-screen:h-72">
            {gallery.slice(1, 5).map((el, i) => (
              <div className="relative" key={i}>
                <Image alt="" src={el} fill className="object-cover" />
              </div>
            ))}
          </section>
        </section>

        <section className="flex justify-between w-full md-screen:flex-col md-screen:items-center md-screen:text-center md-screen:gap-10">
          <section className="flex flex-col gap-3 md-screen:items-center md-screen:text-center">
            <strong className="text-lg">Amenities</strong>
            <article className="flex flex-col gap-4 md-screen:items-center md-screen:text-center">
              {room.features.map((fo, fi) => (
                <Link href={'/'} className="flex flex-col md-screen:items-center md-screen:text-center" key={fi}>
                  <p className="flex gap-1 items-center">
                    <GoPlusCircle />
                    <span className="text-[0.9rem] font-bold">{fo.tag}</span>
                  </p>
                  <small className="text-gray-500">{fo.val}</small>
                </Link>
              ))}
            </article>
          </section>

          <section className="border shadow-light-shadow p-7 grid gap-8 rounded-[20px] w-max sm-screen:w-full">
            <strong className="text-2xl">GHS {room.price.toLocaleString()}/ night</strong>

            <section className="flex flex-col gap-2">
              <article className="grid grid-cols-2 gap-2">
                <DatePicker label="Check In" />
                <DatePicker label="Check In" />
              </article>

              <Select
                label="Guests"
                placeholder="1 Guest"
              >
                <SelectItem key="1 Guest">
                  1 Guest
                </SelectItem>
              </Select>
            </section>

            <Button className="p-4 text-lg text-white bg-red-400">Unavailable</Button>

            <section>
              <p className="flex justify-between">
                <span>GHS {room.price} x 0 nights</span>
                <span>0</span>
              </p>
              {/* <p className="flex justify-between">
                <span>Cleaning Fee</span>
                <span>$5</span>
              </p> */}
            </section>
          </section>
        </section>

        <hr />

        <section className="flex flex-col gap-4 md-screen:items-center md-screen:text-center">
          <strong className="text-2xl">More Images</strong>

          <section className="grid grid-cols-2 gap-2 md-screen:w-full sm-screen:grid-cols-1">
            {gallery.map((el, i) => (
              <div className="relative h-96 overflow-hidden rounded-xl sm-screen:h-72" key={i}>
                <Image alt="" src={el} fill className="object-cover" />
              </div>
            ))}
          </section>
        </section>
      </section>

      <section id="hor" className="bg-black h-96">

      </section>
    </main>
  );
}

export default ViewRoom;