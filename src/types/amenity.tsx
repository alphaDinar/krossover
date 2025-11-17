export type Feature = {
  tag: string;
  val: string;
};

export type Amenity = {
  id: string;
  name: string;
  gist: string;
  description: string;
  features: Feature[];
  gallery: string[];
  menu: Feature[] | null;
  equipment: Feature[] | null;
  bookingInfo: Feature[] | null;
};

export const amenityList: Amenity[] = [
  // {
  //   id: "Swimming Pool",
  //   name: "Swimming Pool",
  //   gist: "Experience unparalleled luxury at the Sky Pool of Condos De-la ChiChi.",
  //   description:
  //     "Perched on the rooftop, our infinity pool offers breathtaking panoramic views of Kumasi’s skyline. Whether you’re looking to take a refreshing dip or relax on a sun lounger, the Sky Pool provides a serene escape from the hustle and bustle of the city.",
  //   features: [
  //     {
  //       tag: "Stunning Views",
  //       val: "Enjoy a unique perspective of the city while you swim or sunbathe.",
  //     },
  //     {
  //       tag: "Relaxation Areas",
  //       val: "Comfortable loungers and shaded areas perfect for unwinding.",
  //     },
  //     {
  //       tag: "Poolside Service",
  //       val: "Enjoy refreshments and light snacks delivered right to your sunbed.",
  //     },
  //   ],
  //   menu: null,
  //   equipment: null,
  //   bookingInfo: null,
  //   gallery: [
  //     "https://www.theplan.it/cdn-cgi/image/width=830/awardsContest/2023/Interior/8788/1_outdoor_deck_approaching_into_the_pool_.jpg",
  //   ],
  // },
  {
    id: "Executive Lounge",
    name: "Executive Lounge",
    gist: "The perfect spot to unwind after a busy day or kick off your evening.",
    description:
      "Our stylish Bar/Lounge offers a wide selection of fine wines, craft cocktails, and light bites in a sophisticated ambiance where guests can relax and socialize.",
    features: [
      {
        tag: "Extensive Drink Menu",
        val: "Choose from a variety of wines, spirits, and signature cocktails.",
      },
      {
        tag: "Cozy Atmosphere",
        val: "Plush seating and elegant decor create the perfect setting for relaxation.",
      },
      {
        tag: "Special Events",
        val: "Join us for themed nights, live music, and other special events.",
      },
    ],
    menu: [
      { tag: "Signature Cocktails", val: "[List a few featured cocktails]" },
      { tag: "Wines & Spirits", val: "[List popular options]" },
      {
        tag: "Light Bites",
        val: "[List a few appetizers or snacks available]",
      },
    ],
    equipment: null,
    bookingInfo: null,
    gallery: [
      "https://i.postimg.cc/hGm8JpVF/Lounge.jpg",
      "https://i.postimg.cc/g0bsHCzc/loungeB.jpg",
      "https://i.postimg.cc/t4xDPqHm/loungeC.jpg",
      "https://i.postimg.cc/3RysDMn8/Restaurant.jpg"
    ],
  },
  {
    id: "Gym",
    name: "Gym",
    gist: "Stay active with our state-of-the-art Gym.",
    description:
      "Equipped with the latest fitness machines and free weights, our gym provides everything you need to maintain your workout routine while enjoying your stay.",
    features: [
      {
        tag: "Modern Equipment",
        val: "Treadmills, ellipticals, weight machines, and free weights.",
      },
      {
        tag: "Personal Training",
        val: "Available on request for personalized workout sessions.",
      },
      {
        tag: "Open 24/7",
        val: "Workout at your convenience with 24-hour access.",
      },
    ],
    menu: [],
    bookingInfo: null,
    equipment: [
      {
        tag: "Cardio Machines",
        val: "Treadmills, ellipticals, stationary bikes.",
      },
      {
        tag: "Strength Training",
        val: "Weight machines, free weights, resistance bands.",
      },
      {
        tag: "Stretching Area",
        val: "Mats, stability balls, and space for yoga or pilates.",
      },
    ],
    gallery: [
      "https://i.postimg.cc/VLDPTFrc/gymB.jpg",
      "https://i.postimg.cc/6qthxn7k/Gym.jpg",
      "https://i.postimg.cc/MKW8dLGD/gymC.jpg",
    ],
  },
  {
    id: "Conference Hall",
    name: "Conference Hall",
    gist: "Modern facilities meet elegant design for your events.",
    description:
      "Host your meetings, conferences, or special events at our Conference Centre, where versatile spaces can be tailored to your needs, ensuring a seamless and successful event.",
    features: [
      {
        tag: "Meeting Rooms",
        val: "Multiple rooms equipped with the latest audio-visual technology.",
      },
      {
        tag: "Banquet Facilities",
        val: "Stylish settings for weddings, parties, and large gatherings.",
      },
      {
        tag: "Event Planning Support",
        val: "On-site staff to assist with event coordination.",
      },
    ],
    equipment: null,
    menu: null,
    bookingInfo: [
      { tag: "Capacity", val: "Accommodates up to [Insert Capacity] guests." },
      {
        tag: "Services",
        val: "Catering, audio-visual equipment, event setup.",
      },
      {
        tag: "Contact",
        val: "[Insert contact information for inquiries and bookings]",
      },
    ],
    gallery: [
      "https://www.icgconstruction.com/sites/default/files/assets/1484_06.jpg",
    ],
  },
  {
    id: "Free Airport shuttle pickup",
    name: "Free Airport shuttle pickup",
    gist: "Complimentary transport services to key locations.",
    description:
      "Condos De-la ChiChi offers complimentary transport services to and from the airport, ensuring a seamless journey for our guests. We also provide local shuttle services to key locations within Kumasi.",
    features: [
      {
        tag: "Airport Transport",
        val: "Complimentary shuttle service to and from Kumasi Airport.",
      },
      {
        tag: "Local Shuttle Services",
        val: "Available to popular destinations within the city.",
      },
      {
        tag: "Booking",
        val: "Transport can be arranged during the booking process or by contacting the front desk.",
      },
    ],
    menu: null,
    equipment: null,
    bookingInfo: null,
    gallery: [
      "https://blog.roldrive.com/wp-content/uploads/2024/04/Chauffeur-Service-London_-Top-7-Luxury-Fleet-In-2024.jpg",
    ],
  },
  {
    id: "Restaurant",
    name: "Restaurant",
    gist: "Dine with us and elevate your stay at La Chi Chi Condos",
    description: "Indulge in a world-class dining experience at La Chi Chi Restaurant, where exquisite flavors, fresh ingredients, and a warm ambiance come together to create unforgettable moments. Located within La Chi Chi Condos, our restaurant offers a diverse menu featuring a fusion of international and local cuisine, expertly crafted by our talented chefs.",
    features: [
      {
        tag: "Cuisine",
        val: "A fusion of international and local flavors crafted by expert chefs.",
      },
      {
        tag: "Opening Hours",
        val: "Open daily for breakfast, lunch, and dinner.",
      },
      {
        tag: "Signature Dishes",
        val: "Fresh seafood, sizzling grilled specialties, and gourmet delicacies.",
      },
      {
        tag: "Bar & Lounge",
        val: "Handcrafted cocktails, fine wines, and premium spirits available.",
      },
    ],
    menu: null,
    equipment: null,
    bookingInfo: null,
    gallery: [
      "https://i.postimg.cc/3RysDMn8/Restaurant.jpg",
      "https://i.postimg.cc/5NvnQ9JK/restB.jpg",
      "https://i.postimg.cc/jqD8KQFb/restC.jpg",
      "https://i.postimg.cc/Pf0Sqpg8/restD.jpg",
      "https://i.postimg.cc/cCtTm0nH/BGXX0784-HDR.jpg",
      "https://i.postimg.cc/KcdyyYQ0/BGXX0772-HDR.jpg",
      "https://i.postimg.cc/c1KNj37K/BGXX0775-HDR.jpg"
    ]
  }
];
