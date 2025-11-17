import FooterBox from "@/components/FooterBox";
import TopNav from "@/components/TopNav/TopNav";
import { mainStyles } from "@/styles/styles";
import Image from "next/image";

const About = () => {
  const aboutText = [
    "Welcome to La Chi Chi Condos, where luxury meets comfort in the heart of the city. Designed for travelers seeking elegance and convenience, our upscale accommodations offer a perfect blend of modern sophistication and warm hospitality.",
    "Each condo is thoughtfully designed with stylish interiors, premium amenities, and breathtaking views, ensuring a relaxing and memorable stay. Whether you're visiting for business or leisure, our exceptional services, including complimentary airport transport, local shuttle services, fine dining, and personalized concierge assistance, cater to your every need.",
    "Indulge in world-class dining at our on-site restaurant, unwind at our exclusive bar, or explore the vibrant surroundings with ease. At La Chi Chi Condos, we redefine hospitality, offering an experience that feels like home—only better.",
    "Stay with us and discover luxury reimagined."
  ]

  return (
    <main className="flex flex-col gap-20 md-screen:gap-5">
      <TopNav />

      <section id="hor" className="grid grid-cols-2 gap-10 md-screen:grid-cols-1 md-screen:gap-7">
        <section className="h-[70vh] overflow-hidden relative rounded-[20px] md-screen:h-64">
          <Image className="object-cover" objectPosition="bottom" objectFit="cover" src={"https://i.postimg.cc/KjCpSR2B/IMG-6828-1.jpg"} alt="" fill />
        </section>

        <section className="flex flex-col gap-2 md-screen:items-center md-screen:text-center">
          <strong className="text-2xl">Welcome To Lachichi</strong>
          <article className="grid gap-1 text-[0.95rem]">
            {aboutText.map((el, i) => (
              <span key={i}>{el}</span>
            ))}
          </article>
        </section>
      </section>

      <FooterBox />
    </main>
  );
}

export default About;