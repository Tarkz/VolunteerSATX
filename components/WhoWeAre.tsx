import { whoWeAre } from "@/lib/data";

export function WhoWeAre() {
  return (
    <section className="border-t border-brand/8 bg-surface-sage px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-lg font-bold text-brand">Who we are</h2>
        <ul className="mt-4 space-y-2">
          {whoWeAre.bullets.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-lg bg-white/60 px-4 py-3 text-slate-700"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-teal" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
