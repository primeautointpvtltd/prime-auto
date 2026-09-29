const steps = [
  {
    n: "01",
    title: "Tell us what you need",
    body: "Share the model, budget, and whether you want brand new or a registered vehicle. We also source spares and machinery on request.",
  },
  {
    n: "02",
    title: "We shortlist & verify",
    body: "Our team checks condition, documents, and import readiness — so you only review options that fit.",
  },
  {
    n: "03",
    title: "Confirm & complete",
    body: "Agree the deal, we handle paperwork and delivery coordination, and you drive away with confidence.",
  },
];

export function HowToBuy() {
  return (
    <section id="how-to-buy" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-prime-mid">
          Process
        </p>
        <h2 className="mt-2 max-w-xl font-display text-3xl font-bold uppercase tracking-tight text-prime-navy sm:text-4xl">
          How to buy with Prime Auto
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-prime-muted sm:text-base">
          A clear path from enquiry to keys — built for importers, dealers, and
          private buyers who want vehicles they can trust.
        </p>

        <ol className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {steps.map((step) => (
            <li key={step.n} className="relative">
              <span className="font-display text-5xl font-bold leading-none text-prime-ice sm:text-6xl">
                {step.n}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-tight text-prime-navy">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-prime-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
