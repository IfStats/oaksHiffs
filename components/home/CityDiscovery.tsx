import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

const cities = [
  {
    name: "Lagos",
    country: "Nigeria",
    description:
      "Contemporary residences across Lekki, Victoria Island and Lagos's most sought-after neighbourhoods.",
    image:
      "https://images.unsplash.com/photo-1577948000111-9c970dfe3743",
  },
  {
    name: "Accra",
    country: "Ghana",
    description:
      "Refined homes and investment opportunities across Cantonments, East Legon and central Accra.",
    image:
      "https://images.unsplash.com/photo-1590644365607-1c5a7c4f0c5d",
  },
  {
    name: "Abuja",
    country: "Nigeria",
    description:
      "Premium residences in Maitama, Guzape and other established Abuja communities.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
  },
];

export default function CityDiscovery() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
          Explore by city
        </p>

        <h2 className="mt-4 text-4xl font-medium tracking-[-0.045em] text-neutral-950 sm:text-5xl">
          Find your place
          <br className="hidden sm:block" /> in the right city.
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
          Explore carefully selected properties across three
          of West Africa's most dynamic real-estate markets.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {cities.map((city) => (
          <Link
            key={city.name}
            href={`/cities/${city.name.toLowerCase()}`}
            className="group relative overflow-hidden rounded-3xl bg-neutral-950"
          >
            <div className="absolute inset-0">
              <img
                src={city.image}
                alt={`${city.name}, ${city.country}`}
                className="h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-70"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
            </div>

            <div className="relative flex min-h-[420px] flex-col justify-between p-7 text-white sm:p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60">
                  <MapPin size={14} />
                  {city.country}
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition group-hover:bg-white group-hover:text-neutral-950">
                  <ArrowUpRight size={17} />
                </span>
              </div>

              <div>
                <h3 className="text-4xl font-medium tracking-[-0.04em]">
                  {city.name}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">
                  {city.description}
                </p>

                <div className="mt-6 text-sm font-medium">
                  Explore {city.name}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}