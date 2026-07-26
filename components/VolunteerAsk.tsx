import { BookOpen, Code2, HeartHandshake } from "lucide-react";
import { volunteerNeeds } from "@/lib/data";

const roleStyles = {
  "community-ed": {
    icon: BookOpen,
    border: "border-l-accent",
    iconBg: "bg-accent/10 text-accent",
  },
  "direct-support": {
    icon: HeartHandshake,
    border: "border-l-teal",
    iconBg: "bg-teal/10 text-teal",
  },
  tech: {
    icon: Code2,
    border: "border-l-brand-light",
    iconBg: "bg-brand/10 text-brand-light",
  },
} as const;

export function VolunteerAsk() {
  return (
    <section
      id="volunteer"
      className="border-t border-accent/10 bg-surface-warm px-6 py-12 md:py-16"
    >
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Get involved
        </p>
        <h2 className="mt-2 text-2xl font-bold text-brand md:text-3xl">
          Here&apos;s what we need from you.
        </h2>
        <p className="mt-2 text-slate-600">
          Pick one. One click to sign up — we&apos;ll match you from there.
        </p>

        <ul className="mt-8 space-y-4">
          {volunteerNeeds.map((role) => {
            const style = roleStyles[role.id as keyof typeof roleStyles];
            const Icon = style.icon;
            return (
              <li
                key={role.id}
                className={`rounded-xl border border-brand/8 border-l-4 ${style.border} bg-white p-6 shadow-sm`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${style.iconBg}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand">
                      {role.title}
                    </h3>
                    <p className="mt-2 text-slate-700">{role.need}</p>
                    <p className="mt-1 text-sm text-slate-500">{role.time}</p>
                    <a
                      href="#"
                      className="mt-4 inline-block rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
                    >
                      {role.cta}
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
