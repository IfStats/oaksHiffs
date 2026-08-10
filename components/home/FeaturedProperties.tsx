import Link from "next/link";
import {
  ArrowRight,
  Bath,
  BedDouble,
  MapPin,
  Maximize,
} from "lucide-react";

import { properties } from "@/data/properties";
import { formatPrice } from "@/lib/format";

export default function FeaturedProperties() {
  const featuredProperties = properties
    .filter((property) => property.featured)
    .slice(0, 4);

  return (
    <section className="py-20 sm:py-24">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
            Featured properties
          </p>

          <h2 className="mt-4 text-4xl font-medium tracking-[-0.045em] text-neutral-950 sm:text-5xl">
            Exceptional places,
            <br className="hidden sm:block" /> carefully selected.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
            Explore a selection of Oakshiffs properties chosen
            for their location, design, quality and long-term
            value.
          </p>
        </div>

        <Link
          href="/properties"
          className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-neutral-950"
        >
          View all properties
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {featuredProperties.map((property) => (
          <Link
            key={property.id}
            href={`/property/${property.id}`}
            className="group block"
          >
            <article className="overflow-hidden rounded-3xl border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative overflow-hidden bg-neutral-100">
                <img
                  src={property.image}
                  alt={property.title}
                  className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute left-5 top-5 flex gap-2">
                  <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-neutral-950">
                    {property.purpose}
                  </span>

                  <span className="rounded-full bg-neutral-950/90 px-3 py-1.5 text-xs font-medium text-white">
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.025em] text-neutral-950">
                      {property.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-1.5 text-sm text-neutral-500">
                      <MapPin size={14} />
                      {property.location}, {property.city}
                    </div>
                  </div>

                  <span className="shrink-0 text-xs uppercase tracking-[0.16em] text-neutral-400">
                    {property.type}
                  </span>
                </div>

                <div className="mt-6 text-2xl font-medium tracking-[-0.03em] text-neutral-950">
                  {formatPrice(
                    property.price,
                    property.currency
                  )}
                </div>

                <div className="mt-6 flex items-center gap-5 border-t border-neutral-100 pt-5">
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <BedDouble size={16} />
                    <span>{property.bedrooms} beds</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <Bath size={16} />
                    <span>{property.bathrooms} baths</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <Maximize size={16} />
                    <span>{property.area} m²</span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}