export type Property = {
  id: string;
  title: string;
  location: string;
  city: "Lagos" | "Accra" | "Abuja";
  country: "Nigeria" | "Ghana";
  type:
    | "Apartment"
    | "Villa"
    | "Townhouse"
    | "Penthouse"
    | "Land";
  purpose: "For Sale" | "For Rent";
  price: number;
  currency: "NGN" | "GHS" | "USD";
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  description: string;
  amenities: string[];
  featured?: boolean;
};

export const properties: Property[] = [
  {
    id: "lagos-001",
    title: "Azure Heights Residence",
    location: "Lekki Phase 1",
    city: "Lagos",
    country: "Nigeria",
    type: "Apartment",
    purpose: "For Sale",
    price: 185000000,
    currency: "NGN",
    bedrooms: 4,
    bathrooms: 4,
    area: 285,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    description:
      "A sophisticated four-bedroom residence in Lekki Phase 1, designed for comfortable modern living with generous interiors, refined finishes and convenient access to key parts of Lagos.",
    amenities: [
      "Fitted kitchen",
      "24-hour security",
      "Dedicated parking",
      "Swimming pool",
      "Generator backup",
      "Serviced estate",
    ],
    featured: true,
  },

  {
    id: "lagos-002",
    title: "Victoria Island Sky Villa",
    location: "Victoria Island",
    city: "Lagos",
    country: "Nigeria",
    type: "Penthouse",
    purpose: "For Sale",
    price: 320000000,
    currency: "NGN",
    bedrooms: 5,
    bathrooms: 5,
    area: 410,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    description:
      "An expansive five-bedroom penthouse positioned in Victoria Island, combining contemporary architecture, generous living areas and a premium city lifestyle.",
    amenities: [
      "Private terrace",
      "Fitted kitchen",
      "Elevator access",
      "24-hour security",
      "Covered parking",
      "Fitness centre",
    ],
    featured: true,
  },

  {
    id: "lagos-003",
    title: "Ikoyi Garden Residence",
    location: "Ikoyi",
    city: "Lagos",
    country: "Nigeria",
    type: "Villa",
    purpose: "For Rent",
    price: 45000000,
    currency: "NGN",
    bedrooms: 4,
    bathrooms: 4,
    area: 390,
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    description:
      "A spacious garden residence in Ikoyi offering a calm residential setting, generous bedrooms and premium communal facilities.",
    amenities: [
      "Private garden",
      "Fitted kitchen",
      "Parking",
      "Security",
      "Serviced compound",
      "Backup power",
    ],
    featured: false,
  },

  {
    id: "accra-001",
    title: "Cantonments Residence",
    location: "Cantonments",
    city: "Accra",
    country: "Ghana",
    type: "Apartment",
    purpose: "For Sale",
    price: 420000,
    currency: "USD",
    bedrooms: 3,
    bathrooms: 3,
    area: 245,
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    description:
      "A contemporary three-bedroom apartment in Cantonments, offering elegant interiors, excellent security and easy access to Accra's diplomatic and commercial districts.",
    amenities: [
      "Swimming pool",
      "Gym",
      "24-hour security",
      "Backup power",
      "Parking",
      "Fitted kitchen",
    ],
    featured: true,
  },

  {
    id: "accra-002",
    title: "East Legon Garden Villa",
    location: "East Legon",
    city: "Accra",
    country: "Ghana",
    type: "Villa",
    purpose: "For Sale",
    price: 680000,
    currency: "USD",
    bedrooms: 5,
    bathrooms: 5,
    area: 520,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description:
      "A substantial five-bedroom villa in East Legon featuring spacious living areas, landscaped outdoor space and a layout suited to modern family living.",
    amenities: [
      "Private garden",
      "Swimming pool",
      "Fitted kitchen",
      "Security system",
      "Staff quarters",
      "Covered parking",
    ],
    featured: true,
  },

  {
    id: "accra-003",
    title: "Airport Residential Apartment",
    location: "Airport Residential Area",
    city: "Accra",
    country: "Ghana",
    type: "Apartment",
    purpose: "For Rent",
    price: 48000,
    currency: "USD",
    bedrooms: 2,
    bathrooms: 2,
    area: 180,
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
    description:
      "A modern two-bedroom apartment in Airport Residential Area, positioned close to major business, hospitality and transport destinations.",
    amenities: [
      "Swimming pool",
      "Gym",
      "24-hour security",
      "Parking",
      "Backup power",
      "Elevator",
    ],
    featured: false,
  },

  {
    id: "abuja-001",
    title: "Maitama Crest",
    location: "Maitama",
    city: "Abuja",
    country: "Nigeria",
    type: "Villa",
    purpose: "For Sale",
    price: 280000000,
    currency: "NGN",
    bedrooms: 5,
    bathrooms: 5,
    area: 560,
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
    description:
      "A distinguished five-bedroom villa in Maitama, offering substantial living spaces, premium finishes and a private residential environment.",
    amenities: [
      "Private garden",
      "Fitted kitchen",
      "Security system",
      "Staff quarters",
      "Parking",
      "Generator backup",
    ],
    featured: true,
  },

  {
    id: "abuja-002",
    title: "Guzape Modern Townhouse",
    location: "Guzape",
    city: "Abuja",
    country: "Nigeria",
    type: "Townhouse",
    purpose: "For Rent",
    price: 12000000,
    currency: "NGN",
    bedrooms: 4,
    bathrooms: 4,
    area: 330,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    description:
      "A contemporary four-bedroom townhouse in Guzape with practical interiors, secure surroundings and convenient access to Abuja's central districts.",
    amenities: [
      "Fitted kitchen",
      "Parking",
      "Security",
      "Backup power",
      "Serviced estate",
      "Water supply",
    ],
    featured: false,
  },

  {
    id: "abuja-003",
    title: "Asokoro Executive Residence",
    location: "Asokoro",
    city: "Abuja",
    country: "Nigeria",
    type: "Apartment",
    purpose: "For Sale",
    price: 195000000,
    currency: "NGN",
    bedrooms: 3,
    bathrooms: 3,
    area: 260,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    description:
      "A premium three-bedroom residence in Asokoro offering modern interiors, generous proportions and a secure environment close to Abuja's key institutions.",
    amenities: [
      "Fitted kitchen",
      "Elevator",
      "24-hour security",
      "Parking",
      "Gym",
      "Backup power",
    ],
    featured: false,
  },
];