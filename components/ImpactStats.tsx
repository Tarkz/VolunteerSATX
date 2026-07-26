import { impactStats } from "@/lib/data";

export function ImpactStats() {
  return (
    <section className="bg-brand py-14 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {impactStats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl font-bold text-accent-light md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-blue-100">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
