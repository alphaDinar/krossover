"use client";
import { Input, Textarea, Button } from "@nextui-org/react";
import { MdEmail, MdLocationPin, MdOutlinePhone, MdSend } from "react-icons/md";

const ContactBox = () => {
  const channelList = [
    {
      tag: "Call / WhatsApp",
      val: "0509268723 / 0509268724",
      iconEl: (
        <MdOutlinePhone className="w-12 h-12 rounded-full border p-3 bg-[var(--theme)] text-white md-screen:w-10 md-screen:h-10" />
      ),
    },
    {
      tag: "E-mail",
      val: "info@condosdelachichi.com / condosdelachichi@gmail.com",
      iconEl: (
        <MdEmail className="w-12 h-12 rounded-full border p-3 bg-[var(--theme)] text-white md-screen:w-10 md-screen:h-10" />
      ),
    },
    {
      tag: "Location",
      val: "Santasi",
      iconEl: (
        <MdLocationPin className="w-12 h-12 rounded-full border p-3 bg-[var(--theme)] text-white md-screen:w-10 md-screen:h-10" />
      ),
    },
  ];

  return (
    <section
      className="grid grid-cols-2 gap-14 items-center md-screen:flex md-screen:flex-col md-screen:items-center md-screen:text-center md-screen:gap-5"
      id="hor"
    >
      <section className="flex flex-col gap-6">
        <article className="flex flex-col gap-1">
          <strong className="text-2xl">Contact Information</strong>
          <small>
            {"Get in touch with Condos de La-Chichi for bookings, inquiries, or assistance. Our team is available to ensure a seamless stay. Reach out via phone, email, or visit us at our location in Kumasi."}
          </small>
        </article>

        <article className="flex flex-col gap-5 md-screen:gap-3">
          {channelList.map((el, i) => (
            <div className="flex gap-4 items-center md-screen:flex-col" key={i}>
              {el.iconEl}
              <p className="flex flex-col">
                <strong>{el.tag}</strong>
                <span>{el.val}</span>
              </p>
            </div>
          ))}
        </article>
      </section>

      <section className="bg-white border p-10 rounded-2xl flex flex-col gap-4 sm-screen:p-5">
        <article className="flex flex-col">
          <span>Have Questions ?</span>
          <strong>Send Us A Message</strong>
        </article>

        <form className="grid gap-2 ">
          <Input type="email" label="Name" />
          <section className="grid grid-cols-2 gap-2">
            <Input type="email" label="Email" />
            <Input type="email" label="Contact" />
          </section>

          <Textarea
            label="Description"
            maxRows={20}
            size="lg"
            className="w-full"
          />

          <Button
            endContent={<MdSend />}
            className="w-max bg-[var(--theme)] text-white sm-screen:w-full"
          >
            Send{" "}
          </Button>
        </form>
      </section>
    </section>
  );
};

export default ContactBox;
