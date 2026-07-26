import { ArrowRight, Phone } from "lucide-react";
import { hook, crisisResources } from "@/lib/data";

export function Hero() {
  const tel = crisisResources.hotline.replace(/[^0-9]/g, "");

  return (
    <section className="bg-gradient-to-b from-surface-cool to-background px-6 py-10 md:py-14">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-lg border border-brand/15 border-l-4 border-l-brand bg-white px-5 py-4 shadow-sm">
          <p className="font-semibold text-brand">Need help?</p>
          <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-slate-700">
            <a
              href={`tel:${tel}`}
              className="inline-flex items-center gap-2 text-lg font-bold text-brand transition-colors hover:text-brand-light md:text-xl"
            >
              <Phone className="h-5 w-5 flex-shrink-0" aria-hidden />
              {crisisResources.hotline}
            </a>
            <span className="hidden text-slate-300 sm:inline">·</span>
            <span className="text-base">
              Text <strong>{crisisResources.textKeyword}</strong> to{" "}
              {crisisResources.textNumber}
            </span>
          </p>
          <p className="mt-1 text-sm text-slate-500">Available 24/7 · confidential</p>
        </div>

        <h1 className="mt-8 text-2xl font-bold leading-tight text-brand md:text-3xl">
          {hook.headline}
        </h1>
        <p className="mt-4 leading-relaxed text-slate-700">{hook.subhead}</p>
        <p className="mt-3 text-slate-600">{hook.whoLine}</p>

        <a
          href="#volunteer"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
        >
          Volunteer with us
          <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
