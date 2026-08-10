"use client";

import { motion } from "framer-motion";
import {
  Building2,
  KeyRound,
  LineChart,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Building2,
    title: "Property Sales",
    description:
      "Find carefully selected residential and investment properties across Lagos, Accra and Abuja.",
  },
  {
    number: "02",
    icon: KeyRound,
    title: "Property Leasing",
    description:
      "Discover quality homes and commercial spaces matched to your location, lifestyle and budget.",
  },
  {
    number: "03",
    icon: LineChart,
    title: "Investment Advisory",
    description:
      "Make better property decisions with market insight, investment analysis and local expertise.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Property Management",
    description:
      "Protect and manage your property with professional oversight designed for long-term value.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 text-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
              What we do
            </p>

            <h2 className="max-w-md text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Real estate,
              <br />
              handled differently.
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-neutral-500">
              Oakshiffs brings property discovery, local market knowledge and
              professional advisory together in one experience.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Talk to our team
            </a>
          </motion.div>

          <div className="grid border-t border-neutral-200 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="border-b border-neutral-200 py-8 sm:px-7 sm:first:border-r"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs text-neutral-400">
                      {service.number}
                    </span>

                    <Icon
                      size={21}
                      strokeWidth={1.5}
                      className="text-neutral-400"
                    />
                  </div>

                  <h3 className="mt-10 text-xl font-medium">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-500">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}