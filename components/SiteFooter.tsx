import { Phone, Mail, MapPin } from "lucide-react";
import { org, crisisResources } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand text-blue-100">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-white">{org.name}</p>
            <p className="mt-1 text-sm uppercase tracking-wide text-accent-light">
              A 501(c)(3) nonprofit · San Antonio, Texas
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Every voice matters. Every story heals. We work to end human
              trafficking through awareness, advocacy, and action.
            </p>
          </div>
          <div className="space-y-3 text-sm">
            <p className="font-semibold text-white">Contact</p>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden />
              {org.address}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden />
              {org.phone}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" aria-hidden />
              {org.email}
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <p className="font-semibold text-white">24/7 National Hotline</p>
            <p className="text-2xl font-bold text-accent-light">
              {crisisResources.hotline}
            </p>
            <p>
              Text {crisisResources.textKeyword} to {crisisResources.textNumber}
            </p>
            <p className="text-xs text-blue-200/70">{crisisResources.note}</p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-blue-200/70">
          <p>
            EIN: {org.ein} · 100% of donations are tax-deductible.
          </p>
          <p className="mt-2">
            Concept redesign mockup for portfolio purposes — not affiliated with
            Stop Now Foundation. Content paraphrased from public sources for
            demonstration only.
          </p>
        </div>
      </div>
    </footer>
  );
}
