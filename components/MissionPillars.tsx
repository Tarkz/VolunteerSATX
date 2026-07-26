import { Check } from "lucide-react";
import { missionPillars } from "@/lib/data";

export function MissionPillars() {
  return (
    <section id="mission" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our Mission
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand md:text-4xl">
            Awareness. Advocacy. Action.
          </h2>
          <p className="mt-4 text-slate-600">
            Three core values guide every program, every partnership, and every
            story we tell.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {missionPillars.map((pillar, index) => (
            <article
              key={pillar.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <span className="text-sm font-bold text-accent">
                0{index + 1}
              </span>
              <h3 className="mt-2 text-xl font-bold uppercase tracking-wide text-brand">
                {pillar.label}
              </h3>
              <p className="mt-4 font-semibold text-slate-800">
                {pillar.heading}
              </p>
              <p className="mt-2 leading-relaxed text-slate-600">
                {pillar.description}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <Check
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
