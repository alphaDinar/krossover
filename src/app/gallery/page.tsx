import FooterBox from "@/components/FooterBox";
import TopNav from "@/components/TopNav/TopNav";
import { amenityList } from "@/types/amenity";
import Image from "next/image";

const Gallery = () => {
  return (
    <main className="grid gap-10 sm-screen:gap-4">
      <TopNav />

      <section className="grid gap-7 sm-screen:flex sm-screen:flex-col sm-screen:gap-4" id="hor">
        <strong className="text-3xl">Gallery</strong>


        <section className="grid gap-10 md-screen:gap-12 sm-screen:w-full">
          {amenityList.reverse().map((amenity, i) => (
            <section className="grid gap-2" key={i}>
              <strong className="text-xl capitalize">{amenity.name}</strong>
              <section id="items" className="gap-2">
                {amenity.gallery.map((el, ii) => (
                  <div key={ii} className="h-80 relative rounded-3xl overflow-hidden">
                    <Image alt="" src={el} fill objectFit="cover" />
                  </div>
                ))}
              </section>
            </section>
          ))}
        </section>
      </section>

      <FooterBox />
    </main>
  );
}

export default Gallery;