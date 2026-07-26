import { whoWeAre } from "@/lib/data";

export function WhoWeAre() {
  return (
    <section className="border-t border-slate-200 bg-white px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-lg font-bold text-brand">Who we are</h2>
        <ul className="mt-3 space-y-1 text-slate-600">
          {whoWeAre.bullets.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
