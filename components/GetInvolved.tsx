import { ArrowRight } from "lucide-react";
import { getInvolvedPaths } from "@/lib/data";

export function GetInvolved() {
  return (
    <section id="get-involved" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Get Involved
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand md:text-4xl">
            There&apos;s room for you on this team.
          </h2>
          <p className="mt-4 text-slate-600">
            Every contribution — time, skills, or funds — makes a difference. We
            match your strengths with the work that needs you most.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {getInvolvedPaths.map((path) => (
            <article
              key={path.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-8"
            >
              <h3 className="text-xl font-bold text-brand">{path.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-slate-600">
                {path.description}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-light"
              >
                {path.cta}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
