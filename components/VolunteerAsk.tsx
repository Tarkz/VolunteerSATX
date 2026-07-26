import { volunteerNeeds } from "@/lib/data";

export function VolunteerAsk() {
  return (
    <section id="volunteer" className="border-t border-slate-200 bg-slate-50 px-6 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-brand md:text-3xl">
          Here&apos;s what we need from you.
        </h2>
        <p className="mt-2 text-slate-600">
          Pick one. One click to sign up — we&apos;ll match you from there.
        </p>

        <ul className="mt-8 space-y-4">
          {volunteerNeeds.map((role) => (
            <li
              key={role.id}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-xl font-bold text-brand">{role.title}</h3>
              <p className="mt-2 text-slate-700">{role.need}</p>
              <p className="mt-1 text-sm text-slate-500">{role.time}</p>
              <a
                href="#"
                className="mt-4 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
              >
                {role.cta}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
