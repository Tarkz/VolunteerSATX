import { HeartPulse, GraduationCap, Code2, ArrowRight } from "lucide-react";
import { programs } from "@/lib/data";

const icons = {
  "survivor-support": HeartPulse,
  "community-awareness": GraduationCap,
  "tech-for-good": Code2,
} as const;

export function Programs() {
  return (
    <section id="programs" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our Programs
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand md:text-4xl">
            Comprehensive solutions for prevention and recovery.
          </h2>
          <p className="mt-4 text-slate-600">
            Three integrated pillars addressing every stage of prevention and
            survivor support.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {programs.map((program) => {
            const Icon = icons[program.id as keyof typeof icons];
            return (
              <article
                key={program.id}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {program.tag}
                </span>
                <h3 className="mt-1 text-xl font-bold text-brand">
                  {program.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-slate-600">
                  {program.description}
                </p>
                <a
                  href="#get-involved"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-accent"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
