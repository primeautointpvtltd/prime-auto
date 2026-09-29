import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-prime-navy/10 bg-white text-prime-navy">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-mark.png"
            alt=""
            width={120}
            height={50}
            className="h-10 w-auto object-contain"
          />
          <div>
            <p className="font-display text-lg font-bold uppercase tracking-tight">
              Prime Auto International
            </p>
            <p className="text-xs text-prime-muted">
              Brand new &amp; registered motor vehicles · Spares &amp; machineries
            </p>
          </div>
        </div>
        <p className="text-xs text-prime-muted">
          © {new Date().getFullYear()} Prime Auto International (Pvt) Ltd. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
