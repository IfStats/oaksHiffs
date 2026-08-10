import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Bath,
  BedDouble,
  Check,
  MapPin,
  Maximize,
} from "lucide-react";

import { properties } from "@/data/properties";
import { formatPrice } from "@/lib/format";
import PropertyEnquiry from "@/components/property/PropertyEnquiry";

type PropertyPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PropertyPage({
  params,
}: PropertyPageProps) {
  const { id } = await params;

  const property = properties.find(
    (item) => item.id === id
  );

  if (!property) {
    notFound();
  }

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-neutral-950"
        >
          <ArrowLeft size={16} />
          Back to properties
        </Link>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_0.7fr]">
          <div className="overflow-hidden rounded-3xl bg-neutral-100">
            <img
              src={property.image}
              alt={property.title}
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-neutral-950 p-8 text-white">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-white/10 px-4 py-2 text-xs">
                  {property.purpose}
                </span>

                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  {property.type}
                </span>
              </div>

              <h1 className="mt-8 text-4xl font-medium tracking-[-0.04em]">
                {property.title}
              </h1>

              <div className="mt-4 flex items-center gap-2 text-sm text-white/60">
                <MapPin size={16} />
                {property.location}, {property.city}
              </div>

              <div className="mt-8 text-3xl font-medium">
                {formatPrice(
                  property.price,
                  property.currency
                )}
              </div>
            </div>

            <div className="mt-12">
              <div className="grid grid-cols-3 border-y border-white/10 py-6">
                <div>
                  <BedDouble
                    size={18}
                    className="mb-3 text-white/40"
                  />
                  <p className="text-lg">
                    {property.bedrooms}
                  </p>
                  <p className="text-xs text-white/40">
                    Bedrooms
                  </p>
                </div>

                <div>
                  <Bath
                    size={18}
                    className="mb-3 text-white/40"
                  />
                  <p className="text-lg">
                    {property.bathrooms}
                  </p>
                  <p className="text-xs text-white/40">
                    Bathrooms
                  </p>
                </div>

                <div>
                  <Maximize
                    size={18}
                    className="mb-3 text-white/40"
                  />
                  <p className="text-lg">
                    {property.area}
                  </p>
                  <p className="text-xs text-white/40">
                    m²
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-6 flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
              >
                Enquire about this property
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
              Property overview
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em]">
              Designed for modern living
            </h2>

            <p className="mt-6 text-base leading-8 text-neutral-500">
              {property.description}
            </p>

            <div className="mt-12">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                Property details
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-neutral-50 p-5">
                  <p className="text-xs text-neutral-400">
                    Property type
                  </p>
                  <p className="mt-2 font-medium">
                    {property.type}
                  </p>
                </div>

                <div className="rounded-2xl bg-neutral-50 p-5">
                  <p className="text-xs text-neutral-400">
                    Location
                  </p>
                  <p className="mt-2 font-medium">
                    {property.location}
                  </p>
                </div>

                <div className="rounded-2xl bg-neutral-50 p-5">
                  <p className="text-xs text-neutral-400">
                    City
                  </p>
                  <p className="mt-2 font-medium">
                    {property.city}
                  </p>
                </div>

                <div className="rounded-2xl bg-neutral-50 p-5">
                  <p className="text-xs text-neutral-400">
                    Area
                  </p>
                  <p className="mt-2 font-medium">
                    {property.area} m²
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                Amenities
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {property.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-5 py-4"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100">
                      <Check size={14} />
                    </span>

                    <span className="text-sm">
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside
            id="contact"
            className="h-fit rounded-3xl border border-neutral-200 bg-neutral-50 p-7"
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
              Private enquiry
            </p>

            <h2 className="mt-4 text-2xl font-medium tracking-[-0.03em]">
              Interested in this property?
            </h2>

            <p className="mt-3 text-sm leading-7 text-neutral-500">
              Send an enquiry and the Oakshiffs team can
              provide availability, viewing information and
              additional property details.
            </p>

            <div className="mt-8">
              <PropertyEnquiry
                propertyId={property.id}
                propertyTitle={property.title}
                city={property.city}
              />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}