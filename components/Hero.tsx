import { ArrowRight } from "lucide-react";
import { hook, crisisResources } from "@/lib/data";

export function Hero() {
  const tel = crisisResources.hotline.replace(/[^0-9]/g, "");

  return (
    <section className="bg-gradient-to-b from-surface-cool to-background px-6 py-10 md:py-14">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm leading-relaxed text-slate-600">
          Need help? Call{" "}
          <a
            href={`tel:${tel}`}
            className="font-semibold text-brand underline-offset-2 hover:underline"
          >
            {crisisResources.hotline}
          </a>
          {" or text "}
          <strong>{crisisResources.textKeyword}</strong> to{" "}
          {crisisResources.textNumber}. Available 24/7.
        </p>

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
