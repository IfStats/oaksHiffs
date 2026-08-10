import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const cities = [
  { name: "Lagos", href: "/cities/lagos" },
  { name: "Accra", href: "/cities/accra" },
  { name: "Abuja", href: "/cities/abuja" },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.7fr_0.7fr_0.9fr]">
          <div className="max-w-md">
            <Link
              href="/"
              className="text-2xl font-semibold tracking-[-0.04em]"
            >
              Oakshiffs
            </Link>

            <p className="mt-5 text-sm leading-7 text-white/50">
              Carefully selected properties for people looking
              for exceptional places to live, invest and grow.
            </p>

            <Link
              href="/properties"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
            >
              Explore properties
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/properties"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Properties
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              Cities
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {cities.map((city) => (
                <Link
                  key={city.href}
                  href={city.href}
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              Contact
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="mailto:hello@oakshiffs.com"
                className="break-all text-sm text-white/65 transition hover:text-white"
              >
                hello@oakshiffs.com
              </a>

              <a
                href="tel:+233000000000"
                className="text-sm text-white/65 transition hover:text-white"
              >
                +233 000 000 000
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Oakshiffs. All rights reserved.
          </p>

          <p>
            Lagos · Accra · Abuja
          </p>
        </div>
      </div>
    </footer>
  );
}