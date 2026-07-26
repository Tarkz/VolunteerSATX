import { ShieldCheck } from "lucide-react";
import { org } from "@/lib/data";

const navLinks = [
  { href: "#mission", label: "Mission" },
  { href: "#issue", label: "The Issue" },
  { href: "#programs", label: "Programs" },
  { href: "#get-involved", label: "Get Involved" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 text-brand">
          <ShieldCheck className="h-7 w-7 text-accent" aria-hidden />
          <span className="text-lg font-bold tracking-tight">{org.name}</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#get-involved"
            className="hidden rounded-full border border-brand/30 px-4 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand/5 sm:inline-block"
          >
            Volunteer
          </a>
          <a
            href="#donate"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
          >
            Donate
          </a>
        </div>
      </div>
    </header>
  );
}
