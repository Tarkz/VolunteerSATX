import { HeartHandshake } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 text-[#1e3a5f]">
          <HeartHandshake className="h-7 w-7 text-[#e87722]" aria-hidden />
          <span className="text-lg font-bold tracking-tight">VolunteerSATX</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#agencies" className="hover:text-[#1e3a5f] transition-colors">
            Agencies
          </a>
          <a href="#opportunities" className="hover:text-[#1e3a5f] transition-colors">
            Opportunities
          </a>
          <a href="#blog" className="hover:text-[#1e3a5f] transition-colors">
            Blog
          </a>
        </nav>
        <a
          href="#opportunities"
          className="rounded-full bg-[#e87722] px-4 py-2 text-sm font-semibold text-white hover:bg-[#d06818] transition-colors"
        >
          Find Opportunities
        </a>
      </div>
    </header>
  );
}
