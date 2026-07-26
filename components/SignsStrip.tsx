import { warningSigns } from "@/lib/data";

export function SignsStrip() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-lg font-bold text-brand">
          Warning signs to watch for
        </h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {warningSigns.map((sign) => (
            <li key={sign} className="text-sm text-slate-600">
              · {sign}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
