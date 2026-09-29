function IconHandshake() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-14 w-14"
      aria-hidden
    >
      <path d="M18 28h10l4 4 6-6h8" />
      <path d="M22 28v-6a4 4 0 0 1 4-4h4" />
      <path d="M42 28v-4a4 4 0 0 0-4-4h-2" />
      <path d="M26 36l4 8h6l4-6" />
      <path d="M20 36c-3 2-5 5-5 9" />
      <path d="M44 34c3 2 5 5 5 9" />
      <rect x="24" y="12" width="16" height="12" rx="1.5" />
      <path d="M28 16h8M28 20h5" />
    </svg>
  );
}

function IconCarrier() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-14 w-14"
      aria-hidden
    >
      <path d="M8 40h40l6-10h-8l-4 6H22l-4-6H10l-2 6z" />
      <circle cx="18" cy="44" r="3.5" />
      <circle cx="42" cy="44" r="3.5" />
      <path d="M14 30h20l3-8H18l-4 8z" />
      <path d="M20 22h10" />
      <path d="M10 40v4M48 40v4" />
    </svg>
  );
}

function IconSpares() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-14 w-14"
      aria-hidden
    >
      <circle cx="28" cy="28" r="10" />
      <path d="M28 18v4M28 34v4M18 28h4M34 28h4" />
      <path d="M35 35l14 14" />
      <path d="M45 53l8-8-4-4-8 8v4h4z" />
      <path d="M20 44h10M22 48h14" />
    </svg>
  );
}

const stats = [
  {
    value: "Since 1995",
    label: "In import & export business",
    Icon: IconHandshake,
  },
  {
    value: "1,200+ vehicles",
    label: "Sold across Sri Lanka",
    Icon: IconCarrier,
  },
  {
    value: "Spares & machinery",
    label: "Specialist supply on request",
    Icon: IconSpares,
  },
];

export function Stats() {
  return (
    <section
      aria-label="Company highlights"
      className="relative z-10 -mt-6 bg-white sm:-mt-8"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border border-prime-blue/15 bg-white">
          <ul className="grid sm:grid-cols-3">
            {stats.map(({ value, label, Icon }, i) => (
              <li
                key={label}
                className={`flex flex-col items-center px-6 py-10 text-center sm:py-12 ${
                  i > 0
                    ? "border-t border-prime-blue/10 sm:border-t-0 sm:border-l"
                    : ""
                }`}
              >
                <span className="text-prime-mid">
                  <Icon />
                </span>
                <p className="mt-5 font-display text-3xl font-bold tracking-tight text-prime-navy sm:text-[2rem]">
                  {value}
                </p>
                <p className="mt-2 max-w-[15rem] text-[0.7rem] font-semibold uppercase leading-relaxed tracking-[0.18em] text-prime-muted">
                  {label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
