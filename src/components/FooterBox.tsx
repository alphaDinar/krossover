import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const FooterBox = () => {
  return (
    <section className="bg-black text-white py-10" id="hor">
      <section id="items250">

        <section className="flex flex-col md-screen:items-center md-screen:text-center">
          <strong>Quick Links</strong>
          <article className="flex flex-col">
            <Link className="text-gray-300" href={'/'}> <small>Home</small> </Link>
            <Link className="text-gray-300" href={'/rooms'}> <small>Room & Suites</small> </Link>
            <Link className="text-gray-300" href={'/amenities'}> <small>Amenities</small> </Link>
            <Link className="text-gray-300" href={'/dining'}> <small>Dining</small> </Link>
            <Link className="text-gray-300" href={'/gallery'}> <small>Gallery</small> </Link>
            <Link className="text-gray-300" href={'/blog'}> <small>Blog</small> </Link>
            <Link className="text-gray-300" href={'/contact'}> <small>Contact Us</small> </Link>
            <Link className="text-gray-300" href={'/rooms'}> <small>Book Now</small> </Link>
          </article>
        </section>

        <section className="md-screen:items-center md-screen:text-center">
          <strong>Contact Us</strong>
          <article>
            <strong><small>Address</small></strong>
            <p className="flex flex-col text-gray-300">
              <small>Condos De-la ChiChi</small>
              {/* <small>[Street Address]</small> */}
              <small>Kumasi, Ghana</small>
            </p>
          </article>
          <article>
            <strong><small>Phone</small></strong>
            <p className="flex flex-col text-gray-300">
              <small>0509268723</small>
            </p>
          </article>
          <article>
            <strong><small>E mail</small></strong>
            <Link href={"mailto:condosdelachichi@gmail.com"} className="flex flex-col text-gray-300">
              <small>condosdelachichi@gmail.com</small>
            </Link>
            <Link href={"mailto:info@condosdelachichi.com"} className="flex flex-col text-gray-300">
              <small>info@condosdelachichi.com</small>
            </Link>
          </article>
        </section>

        <section className="flex flex-col gap-2 md-screen:items-center md-screen:text-center">
          <strong>Social Links</strong>
          <legend className="flex gap-2 text-gray-400">
            <Link href={'/'}> <FaFacebookF />  </Link>
            <Link href={'/'}> <FaInstagram />  </Link>
            <Link href={'/'}> <BsTwitterX />  </Link>
            <Link href={'/'}> <FaLinkedinIn />  </Link>
          </legend>
        </section>


        <section className="flex flex-col md-screen:items-center md-screen:text-center">
          <strong>Quick Links</strong>
          <article className="flex flex-col">
            <Link className="text-gray-300" href={'/'}> <small>Privacy Policy</small> </Link>
            <Link className="text-gray-300" href={'/'}> <small>Terms & Conditions</small> </Link>
            <Link className="text-gray-300" href={'/'}> <small>Cancellation policy</small> </Link>
          </article>
        </section>
      </section>
    </section>
  );
}

export default FooterBox;
