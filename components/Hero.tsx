import { ArrowRight, HandHeart, LifeBuoy } from "lucide-react";
import { org } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-light text-white">
      <div className="absolute inset-0 opacity-10" aria-hidden>
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent" />
        <div className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-accent" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-light">
          {org.tagline}
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Build a world where all are{" "}
          <span className="text-accent-light">free</span>, safe, and valued.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-blue-100 md:text-xl">
          {org.name} works to end human trafficking through public awareness,
          education, and direct community action — rooted in San Antonio,
          reaching across the country.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#donate"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-light"
          >
            Donate Now
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href="#get-involved"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            <HandHeart className="h-4 w-4" aria-hidden />
            Sign Up to Volunteer
          </a>
          <a
            href="#issue"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-transparent px-6 py-3 font-semibold text-blue-100 transition-colors hover:text-white"
          >
            <LifeBuoy className="h-4 w-4" aria-hidden />
            Request Help
          </a>
        </div>
      </div>
    </section>
  );
}
