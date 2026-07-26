import { org, crisisResources } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-brand px-6 py-8 text-blue-100">
      <div className="mx-auto max-w-3xl space-y-4 text-sm">
        <p>
          <span className="font-semibold text-white">24/7 Hotline:</span>{" "}
          {crisisResources.hotline} · Text {crisisResources.textKeyword} to{" "}
          {crisisResources.textNumber}
        </p>
        <p>
          {org.email} · {org.city}
        </p>
        <p className="text-xs text-blue-200/70">
          Concept mockup for portfolio — not affiliated with Stop Now
          Foundation. EIN {org.ein}.
        </p>
      </div>
    </footer>
  );
}
