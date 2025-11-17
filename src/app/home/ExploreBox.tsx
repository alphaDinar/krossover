"use client";
import { amenityList } from "@/types/amenity";
import Image from "next/image";

const ExploreBox = () => {
  const place =
    "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <section id="hor" className="flex flex-col gap-5 md-screen:items-center">
      <header
        className="grid grid-cols-2 gap-20 
      md-screen:flex md-screen:flex-col md-screen:gap-3 md-screen:items-center md-screen:text-center
      "
      >
        <article className="flex flex-col">
          <strong className="text-3xl">Amenities</strong>
          <span>Take an adventure</span>
        </article>

        <small>
          {"At La Chi Chi Condos, we go beyond expectations to provide you with a seamless blend of luxury, comfort, and convenience. Whether you're here for business or leisure, our thoughtfully curated amenities ensure an unforgettable stay."}
        </small>
      </header>

      {/* <Tabs size='md' aria-label="Tabs sizes">
        <Tab key="photos" title="Regular" />
        <Tab key="music" title="Deluxe" />
        <Tab key="videos" title="Executive" />
      </Tabs> */}

      <section id="items250" className="w-full">
        {amenityList.map((el, i) => (
          <section key={i} className="flex flex-col gap-4">
            <div className="w-full h-64 relative rounded-[30px] overflow-hidden">
              <Image alt="" src={el.gallery[0]} fill className="object-cover" unoptimized />
            </div>

            <article>
              <strong>{el.name}</strong>
              <p className="flex gap-2 items-center text-gray-500">
                {/* <GoPlusCircle /> */}
                {/* <small>Toilets and Bath</small> */}
              </p>
              {/* <strong>GHS 3,000/per night</strong> */}
            </article>
          </section>
        ))}
      </section>
    </section>
  );
};

export default ExploreBox;
