import TopNav from "@/components/TopNav/TopNav";
import ContactBox from "./ContactBox";

const Contact = () => {
  return (
    <main className='flex flex-col gap-20 md-screen:gap-10'>
      <TopNav />

      <ContactBox />

      <section id="hor">Work Hours</section>
    </main>
  );
}

export default Contact;