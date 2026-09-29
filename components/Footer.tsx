import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-prime-navy/10 bg-white text-prime-navy">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
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
        <div className="flex flex-col gap-2 sm:items-end">
          <p className="text-xs text-prime-muted">
            © {new Date().getFullYear()} Prime Auto International (Pvt) Ltd. All
            rights reserved.
          </p>
          <p className="text-[0.7rem] tracking-wide text-prime-muted/80">
            Designed &amp; developed by{" "}
            <a
              href="https://build-that.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-prime-mid underline-offset-2 transition hover:text-prime-navy hover:underline"
            >
              Build-That
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
