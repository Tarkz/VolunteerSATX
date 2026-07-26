import { ArrowRight, Phone } from "lucide-react";
import { hook, crisisResources } from "@/lib/data";

export function Hero() {
  return (
    <section className="bg-white px-6 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold leading-tight text-brand md:text-4xl lg:text-5xl">
          {hook.headline}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-700">
          {hook.subhead}
        </p>
        <p className="mt-4 text-slate-600">{hook.whoLine}</p>

        <a
          href="#volunteer"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-brand-light"
        >
          Volunteer with us
          <ArrowRight className="h-5 w-5" aria-hidden />
        </a>

        <p className="mt-6 text-sm text-slate-500">
          Need help now?{" "}
          <a
            href={`tel:${crisisResources.hotline.replace(/[^0-9]/g, "")}`}
            className="inline-flex items-center gap-1 font-semibold text-crisis hover:underline"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden />
            {crisisResources.hotline}
          </a>
          {" · "}
          Text {crisisResources.textKeyword} to {crisisResources.textNumber}
        </p>
      </div>
    </section>
  );
}
