import { roomList } from "@/types/rooms";
import Image from "next/image";
import Link from "next/link";
import { GoPlusCircle } from "react-icons/go";

const FeaturedBox = () => {
  const place =
    "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <section id="hor" className="flex flex-col gap-7 sm-screen:gap-4">
      <article className="flex flex-col items-center w-full">
        <strong className="text-3xl">Featured Rooms</strong>
        <span>Lets enjoy heaven on earth</span>
      </article>

      <section id="items250">
        {roomList.map((room, i) => (
          <Link
            href={{
              pathname: "/viewRoom",
              query: { room: JSON.stringify(room) },
            }}
            key={i}
            className="flex flex-col gap-5 border p-5 rounded-[30px] hover:shadow-light-shadow cursor-pointer"
          >
            <div className="w-full h-52 relative rounded-[30px] overflow-hidden">
              <Image
                alt=""
                src={room.gallery[1 + i]}
                fill
                className="object-cover"
              />
            </div>

            <section className="md-screen:flex md-screen:flex-col md-screen:items-center md-screen:text-center">
              <strong>{room.name}</strong>

              <article>
                {room.features.map((fo, fi) => (
                  <p className="flex gap-2 items-center text-gray-500" key={fi}>
                    <GoPlusCircle />
                    <small>{fo.tag}</small>
                  </p>
                ))}
              </article>
            </section>

            <hr />

            <strong className="text-xl md-screen:text-center">GHS {room.price.toLocaleString()}</strong>
          </Link>
        ))}
      </section>
    </section>
  );
};

export default FeaturedBox;
