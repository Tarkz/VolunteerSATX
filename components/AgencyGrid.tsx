import { agencies } from "@/lib/data";
import { Building2 } from "lucide-react";

export function AgencyGrid() {
  return (
    <section id="agencies" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#1e3a5f]">Recent Agencies</h2>
            <p className="mt-2 text-slate-600">
              Nonprofits serving San Antonio and Bexar County.
            </p>
          </div>
          <a
            href="#"
            className="text-sm font-semibold text-[#e87722] hover:text-[#d06818] transition-colors"
          >
            View All Agencies →
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {agencies.map((agency) => (
            <article
              key={agency.name}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6 hover:border-[#e87722]/40 hover:shadow-md transition-all"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1e3a5f]/10 text-[#1e3a5f]">
                <Building2 className="h-5 w-5" aria-hidden />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#e87722]">
                {agency.category}
              </p>
              <h3 className="mt-1 text-lg font-bold text-[#1e3a5f]">
                {agency.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {agency.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
