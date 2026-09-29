import Image from "next/image";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-prime-navy py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-prime-cyan">
            About company
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            Prime Auto International (Pvt) Ltd.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
            Importers and exporters in all kinds of brand new and used motor
            vehicles. Specialists in motor spares and machineries — established
            in 1995.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65">
            We help customers source reliable vehicles with clear paperwork,
            honest condition reporting, and after-sale support — from passenger
            cars to commercial and specialty machinery.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Brand new imports",
              "Used vehicles",
              "Motor spares",
              "Machinery supply",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 border-l-2 border-prime-cyan pl-3 text-sm font-medium text-white/90"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <aside className="flex flex-col justify-center">
          <div className="overflow-hidden border border-white/15 bg-white/5">
            <div className="relative aspect-[4/5] bg-prime-blue/40">
              <Image
                src="/director.jpg"
                alt="Managing Director of Prime Auto International"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[center_20%]"
                priority={false}
              />
            </div>
            <div className="border-t border-white/10 px-5 py-4">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-prime-cyan">
                Leadership
              </p>
              <p className="mt-2 font-display text-lg font-bold uppercase tracking-tight">
                Managing Director
              </p>
              <p className="mt-1 text-sm text-white/70">
                Guiding Prime Auto&apos;s import, export, and customer care
                standards.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
