"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { IoMenu } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const logo = "/logo.png";

  const menuItems = [
    { tag: "About Us", target: "/" },
    { tag: "Contact", target: "/" },
    { tag: "Services", target: "/" },
    { tag: "Gallery", target: "/gallery" }
  ];

  const logoImg =
    "https://i.postimg.cc/VLDZN2XC/CDLC-LOGO-1.png";

  return (
    <section>
      <section className="flex justify-between items-center bg-secondary text-white pl-[5.5rem] md-screen:flex-col md-screen:p-0">
        <article className="flex gap-5 md-screen:hidden">
          <span className="text-yellow-600">TL</span>
          <p className="flex gap-2">
            <strong>Opening Hours</strong>
            <span>10am - 6pm</span>
          </p>
        </article>

        <section className="flex items-center gap-10 md-screen:flex-col-reverse md-screen:gap-0 md-screen:w-full">
          <article className="md-screen:hidden">
            <span className="text-yellow-600">LL</span>
            <span>La-Bawleshi Rd, Accra, Ghana</span>
          </article>

          <article className="flex items-center bg-primary text-white pl-14 pt-2 pb-2 pr-14  gap-10 clip-left-skew md-screen:p-4 md-screen:w-full md-screen:justify-center">
            <span>Reach Us</span>

            <p className="flex gap-4 items-center font-bold">
              <span>F</span>
              <span>I</span>
              <span>X</span>
            </p>
          </article>
        </section>
      </section>
      <section className="flex justify-between shadow-sm items-center  md-screen:px-5 md-screen:py-[1rem]">
        <section className="flex gap-10 items-end">

          <div className="w-10 h-10 bg-primary clip-triangle md-screen:hidden">

          </div>
          <div className="bg-white p-3 md-screen:p-0">
            <div className="w-40 h-10 relative">
              <Image src={logo} alt="" objectFit="contain" objectPosition="center" fill />
            </div>
          </div>
        </section>

        <section className="flex gap-10">
          <article className={`flex gap-5 font-semibold md-screen:flex-col md-screen:bg-secondary md-screen:w-full transition-all md-screen:h-full md-screen:p-10 md-screen:gap-3 md-screen:fixed md-screen:top-0 ${isMenuOpen ? "md-screen:right-0" : "md-screen:-right-full"}  z-[1000]`}>
            {menuItems.map((item, index) => (
              <Link href="/" key={index}>
                <span className=" md-screen:text-white">
                  {item.tag}
                </span>
              </Link>
            ))}
            <Button onPress={toggleMenu} radius="none" color="secondary" className="hidden md-screen:flex absolute right-5 top-5" isIconOnly>
              <IoCloseOutline size={30} />
            </Button>
          </article>



          <Button onPress={toggleMenu} radius="none" color="secondary" className="hidden md-screen:flex" isIconOnly>
            <IoMenu />
          </Button>

          {/* <article className="bg-secondary  pl-14 pt-3 pb-3 pr-10"> */}
          <Button color="secondary" radius="none" size="sm" className="mr-14 md-screen:hidden">Learn More</Button>
          {/* </article> */}
        </section>
      </section>
    </section>
  );
};

export default TopNav;
