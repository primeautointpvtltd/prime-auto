const brands = [
  { name: "Toyota", logo: "/brands/toyota.svg" },
  { name: "Mercedes-Benz", logo: "/brands/mercedes.svg" },
  { name: "BMW", logo: "/brands/bmw.svg" },
  { name: "Audi", logo: "/brands/audi.svg" },
  { name: "Volkswagen", logo: "/brands/volkswagen.svg" },
  { name: "Volvo", logo: "/brands/volvo.svg" },
  { name: "Hyundai", logo: "/brands/hyundai.svg" },
  { name: "Kia", logo: "/brands/kia.svg" },
  { name: "Nissan", logo: "/brands/nissan.svg" },
];

const rowOne = brands.slice(0, 5);
const rowTwo = brands.slice(5);

export function Inventory() {
  return (
    <section id="inventory" className="scroll-mt-24 bg-prime-mist py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-prime-mid">
            Brands we stock
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-prime-navy sm:text-4xl">
            Trusted marques
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-prime-muted sm:text-base">
            Brand-new imports and carefully selected registered stock from the
            manufacturers our customers ask for most.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-8 sm:gap-10">
          <ul className="grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-5 sm:gap-x-8">
            {rowOne.map((brand) => (
              <BrandLogo key={brand.name} brand={brand} />
            ))}
          </ul>
          <ul className="mx-auto grid w-full max-w-3xl grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-8">
            {rowTwo.map((brand) => (
              <BrandLogo key={brand.name} brand={brand} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function BrandLogo({
  brand,
}: {
  brand: { name: string; logo: string };
}) {
  const isMark = brand.name === "Mercedes-Benz";

  return (
    <li className="flex items-center justify-center">
      <div className="flex h-16 w-full items-center justify-center sm:h-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={brand.logo}
          alt={`${brand.name} logo`}
          className={`w-auto object-contain ${
            isMark
              ? "max-h-14 max-w-[4.5rem] sm:max-h-16 sm:max-w-[5rem]"
              : "max-h-14 max-w-[9rem] sm:max-h-16 sm:max-w-[10rem]"
          }`}
        />
      </div>
    </li>
  );
}
