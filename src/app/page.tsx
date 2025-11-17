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






      <ExploreBox />

      {/* <Book /> */}


      <TestimonialBox />

      <ContactBox />

      <section>
        {/* 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.4519622336916!2d-1.6611248259180076!3d6.714568720915388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb97075ffb7ac5%3A0xe21f580b2de4edff!2sLOVEK%20CONDOS!5e0!3m2!1sen!2sgh!4v1726977955776!5m2!1sen!2sgh"
          width="100%" height="350"
          loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe> */}

        <FooterBox />
      </section>
    </main>
  );
}

export default Home;