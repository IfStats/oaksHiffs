import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Bath, BedDouble, MapPin, Maximize } from "lucide-react";

import { properties } from "@/data/properties";
import { formatPrice } from "@/lib/format";

type CityPageProps = {
  params: Promise<{
    city: string;
  }>;
};

const cityData = {
  lagos: {
    name: "Lagos",
    country: "Nigeria",
    description:
      "Discover premium apartments, villas, penthouses and investment properties across Lagos.",
    locations: "Lekki · Victoria Island · Ikoyi · Banana Island",
  },
  accra: {
    name: "Accra",
    country: "Ghana",
    description:
      "Explore exceptional homes and investment opportunities in Accra's most sought-after neighbourhoods.",
    locations: "Cantonments · East Legon · Airport Residential · Labone",
  },
  abuja: {
    name: "Abuja",
    country: "Nigeria",
    description:
      "Find distinguished residences and investment properties across Abuja's prime districts.",
    locations: "Maitama · Guzape · Asokoro · Wuse",
  },
} as const;

export default async function CityPage({
  params,
}: CityPageProps) {
  const { city } = await params;

  const cityKey = city.toLowerCase() as keyof typeof cityData;
  const currentCity = cityData[cityKey];

  if (!currentCity) {
    notFound();
  }

  const cityProperties = properties.filter(
    (property) =>
      property.city.toLowerCase() === cityKey
  );

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      {/* Hero */}
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Oakshiffs
          </Link>

          <div className="mt-16 max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
              Oakshiffs / {currentCity.country}
            </p>

            <h1 className="mt-6 text-5xl font-medium tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Properties in {currentCity.name}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
              {currentCity.description}
            </p>

            <p className="mt-6 text-sm text-white/40">
              {currentCity.locations}
            </p>
          </div>
        </div>
      </section>

      {/* Property results */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-between gap-5 border-b border-neutral-200 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
              Current listings
            </p>

            <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em]">
              {cityProperties.length}{" "}
              {cityProperties.length === 1
                ? "property"
                : "properties"}{" "}
              available
            </h2>
          </div>

          <p className="text-sm text-neutral-500">
            {currentCity.name}, {currentCity.country}
          </p>
        </div>

        {cityProperties.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-lg font-medium">
              No properties currently available.
            </p>

            <p className="mt-2 text-sm text-neutral-500">
              Check back soon for new Oakshiffs listings.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cityProperties.map((property) => (
              <Link
                key={property.id}
                href={`/property/${property.id}`}
                className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative overflow-hidden bg-neutral-100">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-medium">
                    {property.purpose}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                      {property.type}
                    </span>

                    <div className="flex items-center gap-1 text-xs text-neutral-400">
                      <MapPin size={13} />
                      {property.location}
                    </div>
                  </div>

                  <h3 className="mt-4 text-xl font-medium tracking-[-0.03em]">
                    {property.title}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-500">
                    {property.location}, {property.city}
                  </p>

                  <div className="mt-6 text-xl font-medium">
                    {formatPrice(
                      property.price,
                      property.currency
                    )}
                  </div>

                  <div className="mt-6 grid grid-cols-3 border-t border-neutral-100 pt-5">
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <BedDouble size={16} />
                      {property.bedrooms}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <Bath size={16} />
                      {property.bathrooms}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <Maximize size={16} />
                      {property.area}m²
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
        <div className="rounded-3xl bg-neutral-100 px-8 py-14 text-center sm:px-12">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
            Looking for something specific?
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
            Let Oakshiffs help you find your next property.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-500">
            Tell us what you are looking for and our property
            specialists will help you identify suitable
            opportunities.
          </p>

          <a
            href="mailto:hello@oakshiffs.com"
            className="mt-8 inline-flex rounded-full bg-neutral-950 px-7 py-4 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Speak with Oakshiffs
          </a>
        </div>
      </section>
    </main>
  );
}