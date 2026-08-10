"use client";

import { useState } from "react";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";

type PropertyEnquiryProps = {
  propertyTitle: string;
  propertyId: string;
  city: string;
};

export default function PropertyEnquiry({
  propertyTitle,
  propertyId,
  city,
}: PropertyEnquiryProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(
    `Hello Oakshiffs, I am interested in ${propertyTitle} in ${city}.`
  );
  const [submitted, setSubmitted] = useState(false);

  const whatsappNumber = "233546471298";
  const phoneNumber = "+2348031127517";
  const emailAddress = "hello@oakshiffs.com";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = [
      "Hello Oakshiffs,",
      "",
      `I am interested in ${propertyTitle}.`,
      `Property ID: ${propertyId}`,
      `City: ${city}`,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      `Message: ${message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
  }

  return (
    <section className="rounded-3xl bg-neutral-950 p-6 text-white sm:p-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
            Property enquiry
          </p>

          <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
            Interested in this property?
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
            Tell us a little about yourself and our property team
            will help you with availability, viewing arrangements
            and next steps.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-4 text-sm text-white/70 transition hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Phone size={16} />
              </span>

              <span>
                <span className="block text-white/40">
                  Speak with an Oakshiffs advisor
                </span>
                <span className="mt-1 block">
                  +234 803 112 7517
                </span>
              </span>
            </a>

            <a
              href={`mailto:${emailAddress}`}
              className="flex items-center gap-4 text-sm text-white/70 transition hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Mail size={16} />
              </span>

              <span>{emailAddress}</span>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white p-6 text-neutral-950 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500"
              >
                Full name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none transition focus:border-neutral-950"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500"
              >
                Phone
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="+234..."
                className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none transition focus:border-neutral-950"
              />
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="email"
              className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none transition focus:border-neutral-950"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="mt-2 w-full resize-none rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none transition focus:border-neutral-950"
            />
          </div>

          {submitted && (
            <div className="mt-5 flex items-center gap-3 rounded-xl bg-neutral-100 px-4 py-3 text-sm text-neutral-700">
              <MessageCircle size={17} />
              Your enquiry has been prepared for WhatsApp.
            </div>
          )}

          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-4 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            <Send size={16} />
            Send enquiry via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}