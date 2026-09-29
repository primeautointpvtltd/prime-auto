const testimonials = [
  {
    name: "Sameera",
    place: "Colombo",
    quote:
      "Clear communication from shortlist to delivery. The registered vehicle arrived exactly as described — paperwork was ready the same day.",
  },
  {
    name: "Rizwan",
    place: "Kandy",
    quote:
      "We needed a commercial pickup urgently. Prime Auto sourced a solid option, shared inspection notes, and handled the handover smoothly.",
  },
  {
    name: "Nadeesha",
    place: "Galle",
    quote:
      "Honest advice on new vs registered, and they helped with genuine spares after purchase. Easy team to work with.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-24 bg-prime-ice py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-prime-mid">
              Why us
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-prime-navy sm:text-4xl">
              Trusted by buyers who expect clarity
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-prime-muted">
            Our team is ready to support you — from first enquiry to after-sale
            care.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="border-t-2 border-prime-cyan bg-white px-6 py-7"
            >
              <p className="text-sm leading-relaxed text-prime-ink">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6">
                <p className="font-display text-base font-bold uppercase tracking-tight text-prime-navy">
                  {t.name}
                </p>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.16em] text-prime-mid">
                  {t.place}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
