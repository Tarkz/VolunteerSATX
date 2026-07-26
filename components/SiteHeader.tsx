import { ShieldCheck } from "lucide-react";
import { org } from "@/lib/data";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 text-brand">
          <ShieldCheck className="h-6 w-6 text-accent" aria-hidden />
          <span className="font-bold tracking-tight">{org.name}</span>
        </div>
        <a
          href="#volunteer"
          className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
        >
          Volunteer
        </a>
      </div>
    </header>
  );
}
