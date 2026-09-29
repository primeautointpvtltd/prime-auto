export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-prime-navy"
    >
      <div
        className="absolute inset-0 animate-drift bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(115deg,rgba(6,42,92,0.92)_0%,rgba(11,79,156,0.78)_48%,rgba(6,42,92,0.55)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-prime-mist to-transparent"
        aria-hidden
      />
      <div
        className="animate-pulse-line absolute left-[12%] top-[28%] h-px w-40 bg-prime-cyan/70"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-28 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
        <p className="animate-fade-up font-display text-sm font-semibold uppercase tracking-[0.35em] text-prime-cyan">
          Prime Auto International
        </p>
        <h1 className="animate-fade-up-delay mt-4 max-w-3xl font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Your trusted automotive partner
        </h1>
        <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
          Importers and exporters in all kinds of brand new and used motor
          vehicles. Specialists in motor spares and machineries — established
          in 1995.
        </p>
        <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-3">
          <a
            href="#inventory"
            className="inline-flex items-center justify-center rounded-md bg-prime-cyan px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-prime-navy transition hover:bg-white"
          >
            View brands
          </a>
          <a
            href="#how-to-buy"
            className="inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-white hover:bg-white/10"
          >
            How to buy
          </a>
        </div>
      </div>
    </section>
  );
}
