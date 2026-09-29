export function ExportWorldwide() {
  return (
    <section
      aria-label="Worldwide export"
      className="relative flex items-center overflow-hidden bg-prime-navy"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2000&q=80)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(105deg,rgba(6,42,92,0.88)_0%,rgba(6,42,92,0.78)_45%,rgba(11,79,156,0.62)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-prime-cyan/60 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-prime-cyan/40 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-16">
        <div className="max-w-2xl">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.32em] text-prime-cyan">
            Global reach
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-[0.98] tracking-tight text-white sm:text-4xl">
            We export worldwide
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
            Vehicles, spares, and machinery — sourced with care and shipped to
            buyers across markets.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center justify-center rounded-md bg-prime-cyan px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-prime-navy transition hover:bg-white sm:text-sm"
          >
            Start an enquiry
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-white/15 pt-6 sm:mt-12 sm:gap-x-10">
          {["Middle East", "Europe", "Americas"].map((region) => (
            <li
              key={region}
              className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-white/55"
            >
              {region}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
