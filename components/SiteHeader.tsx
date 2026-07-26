import { ShieldCheck } from "lucide-react";
import { org } from "@/lib/data";

export function SiteHeader() {
  return (
    <header className="border-b border-brand/10 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 text-brand">
          <ShieldCheck className="h-6 w-6 text-accent" aria-hidden />
          <span className="font-bold tracking-tight">{org.name}</span>
        </div>
        <a
          href="#volunteer"
          className="text-sm font-medium text-brand/60 transition-colors hover:text-accent"
        >
          Volunteer
        </a>
      </div>
    </header>
  );
}
