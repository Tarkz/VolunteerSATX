import { Quote } from "lucide-react";
import { spotlight } from "@/lib/data";

export function VolunteerSpotlight() {
  return (
    <section className="bg-brand-dark py-16 text-white md:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Quote className="mx-auto h-10 w-10 text-accent" aria-hidden />
        <blockquote className="mt-6 text-2xl font-medium leading-relaxed md:text-3xl">
          &ldquo;{spotlight.quote}&rdquo;
        </blockquote>
        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-accent-light">
          {spotlight.attribution}
        </p>
      </div>
    </section>
  );
}
