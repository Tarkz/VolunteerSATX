import { org } from "@/lib/data";

const principles = [
  "Survivor-led",
  "Trauma-informed",
  "Accountable",
  "Community-rooted",
];

export function WhoWeAre() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Who We Are
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand md:text-4xl">
            Survivor-led. Community-rooted. Built to end trafficking.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            {org.name} was founded in San Antonio to disrupt trafficking where it
            actually happens — in neighborhoods, schools, workplaces, and online —
            by equipping the people closest to the problem.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            We work through public awareness, education, and direct community
            action, guided at every step by the survivors we serve.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {principles.map((principle) => (
            <li
              key={principle}
              className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 font-semibold text-brand"
            >
              {principle}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
