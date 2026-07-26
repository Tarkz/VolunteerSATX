import { partners } from "@/lib/data";

export function Partners() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Partners
        </p>
        <h2 className="mt-3 text-2xl font-bold text-brand md:text-3xl">
          Working alongside the best in the field.
        </h2>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-slate-500">
          {partners.map((partner) => (
            <li key={partner} className="text-sm font-semibold md:text-base">
              {partner}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
