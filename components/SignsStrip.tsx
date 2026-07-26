import { AlertTriangle } from "lucide-react";
import { warningSigns } from "@/lib/data";

export function SignsStrip() {
  return (
    <section className="border-t border-brand/8 bg-white px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-accent" aria-hidden />
          <h2 className="text-lg font-bold text-brand">
            Warning signs to watch for
          </h2>
        </div>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {warningSigns.map((sign) => (
            <li
              key={sign}
              className="rounded-lg border border-brand/8 bg-surface-cool/50 px-4 py-3 text-sm text-slate-700"
            >
              {sign}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
