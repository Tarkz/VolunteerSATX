import { ArrowRight, Building2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a5f] via-[#254a75] to-[#1e3a5f] text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#e87722]" />
        <div className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-[#e87722]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#f4b183]">
          San Antonio, Texas
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Get Involved, Make a Difference.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-blue-100 md:text-xl">
          Connect with local nonprofits, discover volunteer opportunities, and
          strengthen our community — one hour at a time.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#opportunities"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e87722] px-6 py-3 font-semibold text-white hover:bg-[#d06818] transition-colors"
          >
            Find Opportunities
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href="#agencies"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
          >
            <Building2 className="h-4 w-4" aria-hidden />
            Register Organization
          </a>
        </div>
      </div>
    </section>
  );
}
