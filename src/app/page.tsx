import TopNav from "@/components/TopNav/TopNav";
import HeadBox from "./home/HeadBox";
import MemoryBox from "./home/MemoryBox";
import ExploreBox from "./home/ExploreBox";
import Book from "./home/Book";
import FeaturedBox from "./home/FeaturedBox";
import TestimonialBox from "./home/TestimonialBox";
import ContactBox from "./contact/ContactBox";
import FooterBox from "@/components/FooterBox";

const Home = () => {
  return (
    <main className="flex flex-col gap-16 md-screen:gap-10">
      <section className="flex flex-col">
        <TopNav />

        <section className="grid">
          <HeadBox />
          {/* <FeaturedBox /> */}
          <MemoryBox />
        </section>
      </section>

      <ContactBox />





      {/* <ExploreBox /> */}

      {/* <Book /> */}
      <section>
        <TestimonialBox />
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.492507697034!2d-0.16919772564507216!3d5.64164053278389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b3ec5cf26c7%3A0x2223cacc103e46ec!2sKrossover%20Transport%20Agency!5e0!3m2!1sen!2sgh!4v1763408300501!5m2!1sen!2sgh"
          width="100%" height="350"
          loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>



        <FooterBox />
      </section>

    </main>
  );
}

export default Home;