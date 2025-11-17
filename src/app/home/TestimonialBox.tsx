'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { MdEast, MdStar, MdWest } from "react-icons/md";
import { useRef } from 'react';
import Image from 'next/image';

const TestimonialBox = () => {
  const testimonialSwiper = useRef<{ swiper: any }>({ swiper: null });

  const testimonialSwiperPrev = () => {
    console.log(testimonialSwiper.current)
    if (testimonialSwiper.current) {
      testimonialSwiper.current.swiper.slidePrev();
    }
  }

  const testimonialSwiperNext = () => {
    if (testimonialSwiper.current) {
      testimonialSwiper.current.swiper.slideNext();
    }
  }

  const reviews: {
    name: string;
    occupation: string;
    country: string;
    rating: number;
    con: string;
  }[] = [
      {
        name: "Kwame Boateng",
        occupation: "Businessman",
        country: "Ghana",
        rating: 5,
        con: "I came across Krossover while searching for a comfortable place to stay in Kumasi on Booking.com, and I must say, it was a fantastic choice. The check-in process was smooth, and the staff was incredibly professional. The environment is peaceful, making it an ideal place to unwind after a long day of meetings. I’ll definitely recommend this place to fellow business travelers."
      },
      {
        name: "Jessica Carter",
        occupation: "Travel Blogger",
        country: "USA",
        rating: 5,
        con: "As a travel blogger, I rely heavily on recommendations, and Krossover came highly rated on Google Maps. I decided to check it out, and it was everything I expected and more. The rooms are beautifully furnished, and the bed was so comfortable that I slept like a baby. The natural lighting in the room was perfect for capturing great content for my blog. I’m glad I found this hidden gem in Kumasi!"
      },
      {
        name: "Nana Adjei",
        occupation: "Banker",
        country: "Ghana",
        rating: 5,
        con: "A friend recommended Krossover, and I was curious to see if it lived up to the hype. From the moment I arrived, I knew I had made the right choice. The atmosphere is calm and inviting, with a well-maintained outdoor space. The air conditioning works perfectly (which is a big deal in Ghana), and the Wi-Fi is fast and reliable. Whether for business or leisure, this place is a winner!"
      },
      {
        name: "Sophie Dubois",
        occupation: "Tourist",
        country: "France",
        rating: 5,
        con: "I found Krossover while browsing Expedia for a comfortable and safe stay in Kumasi. The moment I walked in, I was welcomed with warm smiles and excellent customer service. The location is perfect—not too far from key attractions, yet tucked away enough to provide a peaceful retreat. My favorite part was the rooftop lounge, where I enjoyed beautiful evening views. I’ll definitely return on my next trip."
      },
      {
        name: "Samuel Owusu",
        occupation: "Lecturer",
        country: "Ghana",
        rating: 5,
        con: "I stumbled upon Krossover through a billboard advertisement while driving through Santasi, and I decided to check it out. It turned out to be an excellent decision. The place is quiet and well-maintained, which was exactly what I needed to prepare for my upcoming lectures. The interior is stylish, and the staff is incredibly helpful. I highly recommend this place for professionals looking for a peaceful getaway."
      },
      {
        name: "Liam Evans",
        occupation: "Expat",
        country: "UK",
        rating: 5,
        con: "As an expat living in Ghana, finding quality accommodations can be a challenge. I saw Krossover recommended in an expat Facebook group, so I decided to give it a try. The moment I walked in, I knew this was my kind of place. The ambiance is warm, the décor is modern, and the staff is very professional. What I loved most was the attention to detail—everything was spotless, and I felt completely at home."
      },
      {
        name: "Afia Serwaa",
        occupation: "Event Planner",
        country: "Ghana",
        rating: 4,
        con: "I was looking for a relaxing spot after a hectic weekend managing back-to-back events, and a colleague suggested Krossover. I booked a night, and it was one of the best decisions I’ve made. The bed was super comfortable, and the quietness of the environment helped me relax completely. It’s definitely going to be my go-to place whenever I need to recharge."
      },
      {
        name: "Ricardo Mendes",
        occupation: "Entrepreneur",
        country: "Brazil",
        rating: 4,
        con: "I found Krossover while searching for a place on Booking.com, and the positive reviews convinced me to book. I was not disappointed! The highlight of my stay was the food. I tried the local dishes, and they were prepared to perfection. The jollof rice was absolutely amazing! If you’re a food lover like me, this place will not disappoint."
      },
      {
        name: "Kojo Mensah",
        occupation: "Real Estate Developer",
        country: "Ghana",
        rating: 4,
        con: "I saw an ad for Krossover on Instagram and decided to check it out for a weekend getaway. The first thing that stood out to me was the beautiful design of the place—everything looks modern and stylish. The customer service was top-tier, and I loved the fact that the staff was always ready to assist with anything I needed. It’s the kind of place that makes you want to extend your stay."
      },
      {
        name: "Emily Zhang",
        occupation: "Digital Nomad",
        country: "China",
        rating: 4,
        con: "As a digital nomad, my biggest concern when traveling is finding a place with stable internet and a quiet working environment. I found Krossover through a Google search and was impressed with the positive reviews. The Wi-Fi here is fast, the space is clean, and the entire place has a calm vibe, making it perfect for remote work. I spent a few days here getting work done, and I couldn’t have asked for a better experience."
      }
    ];



  return (
    <section className=" bg-gray-100 py-20 flex flex-col items-center gap-16 md-screen:gap-7" id="hor">
      <header className="flex flex-col items-center gap-2 text-center">
        <small>Testimonials</small>
        <strong className="text-2xl sm-screen:text-xl">We Care About Our Customers Experience Too</strong>
        <nav className="flex gap-2 cursor-pointer">
          <MdWest onClick={testimonialSwiperPrev} className="border-gray-400 border w-8 h-8 p-2 rounded-full" />
          <MdEast onClick={testimonialSwiperNext} className="border-gray-400 border w-8 h-8 p-2 rounded-full" />
        </nav>
      </header>


      <section className="flex w-full">
        <Swiper
          className='w-full'
          ref={testimonialSwiper}
          spaceBetween={15}
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          breakpoints={{
            100: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          slidesPerView={3}
        >
          {reviews.map((el, i) => (
            <SwiperSlide key={i} className='w-full'>
              <div className="bg-white p-7 rounded-[20px] flex flex-col gap-4">
                {/* <div className="w-10 h-10 relative rounded-full overflow-hidden">
                  <Image alt='' fill className='object-cover' src={"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"} />
                </div> */}
                <strong>{el.name}</strong>


                <small>{el.con}</small>
                <hr />

                <article className="flex justify-between items-center">
                  <p className="flex flex-col">
                    <strong>{el.country}</strong>
                    <small>{el.occupation}</small>
                  </p>
                  <legend className="flex gap-1">
                    {Array(el.rating).fill(null).map((sl, si) => (
                      <MdStar key={si} />
                    ))}
                  </legend>
                </article>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
}

export default TestimonialBox;