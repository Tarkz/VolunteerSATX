import { ArrowRight, MessageSquare, Phone } from "lucide-react";
import { hook, crisisResources } from "@/lib/data";

export function Hero() {
  const tel = crisisResources.hotline.replace(/[^0-9]/g, "");

  return (
    <section className="bg-white px-6 py-10 md:py-14">
      <div className="mx-auto max-w-3xl">
        {/* Crisis first — findable in seconds */}
        <div className="rounded-xl border-2 border-crisis/30 bg-crisis/5 px-6 py-6 md:px-8 md:py-8">
          <p className="text-sm font-bold uppercase tracking-widest text-crisis">
            Need help now?
          </p>
          <a
            href={`tel:${tel}`}
            className="mt-2 flex items-center gap-3 text-crisis transition-opacity hover:opacity-80"
          >
            <Phone className="h-8 w-8 flex-shrink-0 md:h-10 md:w-10" aria-hidden />
            <span className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {crisisResources.hotline}
            </span>
          </a>
          <p className="mt-3 flex items-center gap-2 text-base text-slate-700 md:text-lg">
            <MessageSquare className="h-5 w-5 flex-shrink-0 text-crisis" aria-hidden />
            Text <strong>{crisisResources.textKeyword}</strong> to{" "}
            <strong>{crisisResources.textNumber}</strong>
            <span className="text-slate-500">· 24/7 · confidential</span>
          </p>
        </div>

        <h1 className="mt-10 text-2xl font-bold leading-tight text-brand md:text-3xl">
          {hook.headline}
        </h1>
        <p className="mt-4 leading-relaxed text-slate-700">{hook.subhead}</p>
        <p className="mt-3 text-slate-600">{hook.whoLine}</p>

        <a
          href="#volunteer"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-brand/70 transition-colors hover:text-brand"
        >
          Want to volunteer?
          <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
