export type RoomFeature = {
  tag: string;
  val: string;
};

export type Room = {
  id: string;
  name: string;
  gist: string;
  description: string;
  bedrooms: number;
  features: RoomFeature[];
  gallery: string[];
  price: number;
};

export const roomList: Room[] = [
  {
    id: "Standard Condo",
    name: "Standard Condo",
    gist: "Single room & bathroom",
    description:
      "Perfect for couples or solo travelers, our 1 Bedroom Suites offer a cozy yet luxurious retreat. With thoughtfully designed spaces and top-of-the-line amenities, you’ll find everything you need for a memorable stay.",
    bedrooms: 1,
    features: [
      {
        tag: "Furnished Kitchen",
        val: "Prepare your own meals in the comfort of your suite with our fully-equipped kitchen.",
      },
      {
        tag: "Entertainment System",
        val: "Relax with your favorite shows and movies on a flat-screen TV with DSTV.",
      },
      {
        tag: "Fridge & AC",
        val: "Enjoy a refreshing cool environment and convenient storage for your snacks and drinks.",
      },
      {
        tag: "Free Internet Access",
        val: "High-speed internet ensures you’re always connected.",
      },
      {
        tag: "Luxurious Bathrooms",
        val: "Indulge in our elegant bathroom with a shower and premium bath products.",
      },
      {
        tag: "Laundry for Residents",
        val: "Access to on-site laundry facilities for your convenience.",
      },
    ],
    gallery: ["/images/onebr.jpg", "/images/onebr.jpg"],
    price: 499,
  },
  {
    id: "Studio Condo",
    name: "Studio Condo",
    gist: "Single room & bathroom with kitchen",
    description:
      "Our 2 Bedroom Suites are designed to provide maximum comfort and luxury for families or groups. With spacious living areas, elegant decor, and premium amenities, these suites offer everything you need for a relaxing and enjoyable stay.",
    bedrooms: 2,
    features: [
      {
        tag: "Furnished Kitchen",
        val: "Fully equipped with modern appliances, perfect for preparing your favorite meals.",
      },
      {
        tag: "Entertainment System",
        val: "Enjoy movies and shows on a flat-screen TV with DSTV and streaming options.",
      },
      {
        tag: "Fridge & AC",
        val: "Keep your refreshments cool and enjoy climate-controlled comfort.",
      },
      {
        tag: "Free Internet Access",
        val: "Stay connected with high-speed internet available throughout your suite.",
      },
      {
        tag: "Luxurious Bathrooms",
        val: "Unwind in our spa-inspired bathrooms featuring premium fixtures and finishes.",
      },
      {
        tag: "Laundry for Residents",
        val: "Complimentary laundry services are available for your convenience.",
      },
    ],
    gallery: ["/images/twobr.jpg", "/images/twobr.jpg", "/images/twobr.jpg"],
    price: 699,
  },
  {
    id: "Executive Condo",
    name: "Executive Condo",
    gist: "Single room, bathroom, kitchen with hall",
    description:
      "Our Studio Apartments are ideal for short stays or business travelers. These units combine comfort and efficiency, offering everything you need within a compact, stylish space.",
    bedrooms: 1,
    features: [
      {
        tag: "Furnished Kitchen",
        val: "Small yet functional kitchen with all the essentials.",
      },
      {
        tag: "Entertainment System",
        val: "Flat-screen TV with DSTV and streaming services for your entertainment.",
      },
      {
        tag: "Fridge & AC",
        val: "Keep your beverages cool and enjoy a comfortable temperature.",
      },
      {
        tag: "Free Internet Access",
        val: "Stay online with fast and reliable internet.",
      },
      {
        tag: "Luxurious Bathrooms",
        val: "A chic bathroom with modern fixtures and all the necessities.",
      },
      {
        tag: "Laundry for Residents",
        val: "Laundry facilities available on-site for all guests.",
      },
    ],
    gallery: [
      "/images/stap.jpg",
      "/images/stap.jpg",
      "/images/stap.jpg",
      "/images/stap.jpg",
    ],
    price: 899,
  },
  {
    id: "Super Executive Condo",
    name: "Super Executive Condo",
    gist: "Two bedroom apartment, a master bedroom, other room, with separate bathrooms, big hall and kitchen.",
    description:
      "Our 2 Bedroom Suites are designed to provide maximum comfort and luxury for families or groups. With spacious living areas, elegant decor, and premium amenities, these suites offer everything you need for a relaxing and enjoyable stay.",
    bedrooms: 2,
    features: [
      {
        tag: "Furnished Kitchen",
        val: "Fully equipped with modern appliances, perfect for preparing your favorite meals.",
      },
      {
        tag: "Entertainment System",
        val: "Enjoy movies and shows on a flat-screen TV with DSTV and streaming options.",
      },
      {
        tag: "Fridge & AC",
        val: "Keep your refreshments cool and enjoy climate-controlled comfort.",
      },
      {
        tag: "Free Internet Access",
        val: "Stay connected with high-speed internet available throughout your suite.",
      },
      {
        tag: "Luxurious Bathrooms",
        val: "Unwind in our spa-inspired bathrooms featuring premium fixtures and finishes.",
      },
      {
        tag: "Laundry for Residents",
        val: "Complimentary laundry services are available for your convenience.",
      },
    ],
    gallery: ["/images/twobr.jpg", "/images/twobr.jpg", "/images/twobr.jpg", "/images/twobr.jpg", "/images/twobr.jpg"],
    price: 1500,
  },
];
