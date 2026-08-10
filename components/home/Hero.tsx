import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
          alt=""
          className="h-full w-full object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-neutral-950/30" />
      </div>

      <div className="relative px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-white/60">
            <MapPin size={14} />
            Lagos · Accra · Abuja
          </div>

          <h1 className="mt-7 max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
            Find a place
            <br />
            worth calling home.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
            Discover carefully selected properties across
            Nigeria and Ghana, from modern city residences
            to exceptional private homes.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/properties"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
            >
              Explore properties
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/properties"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Find a property
            </Link>
          </div>
        </div>

        <div className="mt-20 grid max-w-2xl grid-cols-3 border-t border-white/15 pt-7">
          <div>
            <p className="text-2xl font-medium sm:text-3xl">
              3
            </p>
            <p className="mt-1 text-xs text-white/45 sm:text-sm">
              Major cities
            </p>
          </div>

          <div>
            <p className="text-2xl font-medium sm:text-3xl">
              9+
            </p>
            <p className="mt-1 text-xs text-white/45 sm:text-sm">
              Curated listings
            </p>
          </div>

          <div>
            <p className="text-2xl font-medium sm:text-3xl">
              2
            </p>
            <p className="mt-1 text-xs text-white/45 sm:text-sm">
              Countries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}