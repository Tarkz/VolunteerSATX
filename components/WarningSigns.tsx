import { AlertTriangle } from "lucide-react";
import { warningSigns } from "@/lib/data";

export function WarningSigns() {
  return (
    <section id="issue" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            The Issue
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand md:text-4xl">
            It hides in plain sight. Learn what to see.
          </h2>
          <p className="mt-4 text-slate-600">
            Trafficking rarely looks like a movie. It looks like a coworker who
            can&apos;t speak for themselves, or a student who flinches at touch.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {warningSigns.map((sign, index) => (
            <article
              key={sign.title}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-crisis/10 text-crisis">
                <AlertTriangle className="h-5 w-5" aria-hidden />
              </div>
              <span className="text-xs font-bold text-slate-400">
                0{index + 1}
              </span>
              <h3 className="mt-1 text-lg font-bold text-brand">{sign.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {sign.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
