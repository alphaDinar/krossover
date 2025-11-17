import { Button } from "@nextui-org/button";
import Image from "next/image";

const Book = () => {
  return (
    <section id="hor" className="flex flex-col gap-5">
      <header className="flex justify-between items-center md-screen:flex-col">
        <strong className="text-2xl">Book tickets and go now</strong>
        <Button>Book Now</Button>
      </header>

      <section className="h-[70vh] rounded-[30px] overflow-hidden w-full relative md-screen:h-96">
        <Image fill className="object-cover object-center" alt="" src={'https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
      </section>

    </section>
  );
}

export default Book;