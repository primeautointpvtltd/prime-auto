"use client";

import Image from "next/image";
import { useState } from "react";

const OFFICE = {
  lat: 7.484452,
  lng: 80.363614,
  address: "Colombo Road, Kurunegala, Sri Lanka",
} as const;

const PHONES = [
  { display: "076 893 1709", href: "tel:+94768931709" },
  { display: "075 909 4211", href: "tel:+94759094211" },
  { display: "076 171 8046", href: "tel:+94761718046" },
] as const;

const CONTACT_EMAIL = "Primeautointpvtltd@gmail.com";

const OSM_EMBED = `https://www.openstreetmap.org/export/embed.html?bbox=${
  OFFICE.lng - 0.02
}%2C${OFFICE.lat - 0.015}%2C${OFFICE.lng + 0.02}%2C${
  OFFICE.lat + 0.015
}&layer=mapnik&marker=${OFFICE.lat}%2C${OFFICE.lng}`;

const GOOGLE_MAPS_LINK = `https://www.google.com/maps?q=${OFFICE.lat},${OFFICE.lng}`;
const WHATSAPP_LINK = "https://wa.me/94768931709";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          interest: data.get("interest"),
          message: data.get("message"),
        }),
      });

      const payload = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          payload.error || "Could not send your enquiry. Please try again.",
        );
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setErrorMessage("Could not send your enquiry. Please try again.");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-prime-mid">
              Contact
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-prime-navy sm:text-4xl">
              Talk to our team
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-prime-muted sm:text-base">
              Ask about stock, place a custom import request, or get help with
              spares and machinery.
            </p>
          </div>

          <form
            className="mt-10 border border-prime-blue/15 bg-prime-mist p-6 sm:p-8"
            onSubmit={onSubmit}
          >
            <p className="font-display text-lg font-bold uppercase tracking-tight text-prime-navy">
              Send an enquiry
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-prime-muted">
                Name
                <input
                  name="name"
                  required
                  disabled={status === "sending"}
                  className="mt-1.5 w-full rounded-md border border-prime-blue/20 bg-white px-3 py-2.5 text-sm font-medium normal-case tracking-normal text-prime-ink outline-none focus:border-prime-mid disabled:opacity-60"
                />
              </label>
              <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-prime-muted">
                Phone
                <input
                  name="phone"
                  type="tel"
                  required
                  disabled={status === "sending"}
                  className="mt-1.5 w-full rounded-md border border-prime-blue/20 bg-white px-3 py-2.5 text-sm font-medium normal-case tracking-normal text-prime-ink outline-none focus:border-prime-mid disabled:opacity-60"
                />
              </label>
              <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-prime-muted sm:col-span-2">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  disabled={status === "sending"}
                  className="mt-1.5 w-full rounded-md border border-prime-blue/20 bg-white px-3 py-2.5 text-sm font-medium normal-case tracking-normal text-prime-ink outline-none focus:border-prime-mid disabled:opacity-60"
                />
              </label>
              <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-prime-muted sm:col-span-2">
                Interest
                <select
                  name="interest"
                  disabled={status === "sending"}
                  className="mt-1.5 w-full rounded-md border border-prime-blue/20 bg-white px-3 py-2.5 text-sm font-medium normal-case tracking-normal text-prime-ink outline-none focus:border-prime-mid disabled:opacity-60"
                >
                  <option>Brand new vehicle</option>
                  <option>Registered vehicle</option>
                  <option>Motor spares</option>
                  <option>Machinery</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-prime-muted sm:col-span-2">
                Message
                <textarea
                  name="message"
                  rows={4}
                  required
                  disabled={status === "sending"}
                  className="mt-1.5 w-full resize-y rounded-md border border-prime-blue/20 bg-white px-3 py-2.5 text-sm font-medium normal-case tracking-normal text-prime-ink outline-none focus:border-prime-mid disabled:opacity-60"
                />
              </label>
            </div>

            {status === "sent" ? (
              <p className="mt-4 text-sm font-medium text-prime-mid">
                Enquiry sent. Our team will reply soon, and a confirmation email
                is on its way to you.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="mt-4 text-sm font-medium text-red-700">
                {errorMessage}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-prime-navy px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-prime-blue disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "sending" ? "Sending…" : "Submit enquiry"}
            </button>
          </form>
        </div>
      </div>

      <div className="bg-prime-blue py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-mark.png"
                alt="Prime Auto"
                width={140}
                height={59}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
              <div>
                <p className="font-display text-2xl font-bold uppercase tracking-tight text-white">
                  Prime Auto
                </p>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/70">
                  International (Pvt) Ltd.
                </p>
              </div>
            </div>

            <dl className="mt-8 space-y-4 text-sm text-white">
              <div>
                <dt className="font-semibold">Head office:</dt>
                <dd className="mt-1 text-white/90">
                  Prime Auto International (Pvt) Ltd.
                  <br />
                  {OFFICE.address}
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Tel:</dt>
                <dd className="mt-1 space-y-1">
                  {PHONES.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="block hover:underline"
                    >
                      {phone.display}
                    </a>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="inline font-semibold">Email: </dt>
                <dd className="inline">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-prime-navy text-white transition hover:bg-white hover:text-prime-navy"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-prime-navy text-white transition hover:bg-white hover:text-prime-navy"
                aria-label="Email"
              >
                <MailIcon />
              </a>
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-prime-navy text-white transition hover:bg-white hover:text-prime-navy"
                aria-label="Open in Google Maps"
              >
                <PinIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
              Address &amp; contacts
            </h3>
            <div className="mt-4 overflow-hidden border-4 border-white bg-white">
              <iframe
                title="Prime Auto head office on OpenStreetMap"
                src={OSM_EMBED}
                className="aspect-square w-full border-0 sm:aspect-[5/4]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-2 text-right text-xs text-white/80">
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:underline"
              >
                View larger map
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.94L2 22l5.2-1.36A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.09.81.83-3-.2-.31a8.2 8.2 0 1 1 6.94 3.82Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.09-.4-.12-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.09-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74 1.49.64 1.82.7 2.47.59.41-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.14-1.17-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
    </svg>
  );
}
