import { opportunities } from "@/lib/data";
import { Calendar, Clock } from "lucide-react";

export function OpportunityList() {
  return (
    <section id="opportunities" className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-[#1e3a5f]">
            Recent Volunteer Opportunities
          </h2>
          <p className="mt-2 text-slate-600">
            Find a shift that fits your schedule.
          </p>
        </div>
        <div className="space-y-4">
          {opportunities.map((opp) => (
            <article
              key={opp.title}
              className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 md:flex-row md:items-center md:justify-between hover:border-[#e87722]/40 hover:shadow-sm transition-all"
            >
              <div>
                <h3 className="text-lg font-bold text-[#1e3a5f]">{opp.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{opp.org}</p>
                <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-[#e87722]" aria-hidden />
                    {opp.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-4 w-4 text-[#e87722]" aria-hidden />
                    {opp.type}
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="shrink-0 rounded-full bg-[#1e3a5f] px-5 py-2 text-sm font-semibold text-white hover:bg-[#16304d] transition-colors text-center"
              >
                Sign Up
              </a>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="#"
            className="text-sm font-semibold text-[#e87722] hover:text-[#d06818] transition-colors"
          >
            View More Opportunities →
          </a>
        </div>
      </div>
    </section>
  );
}
