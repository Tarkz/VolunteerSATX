import { Phone, MessageSquare } from "lucide-react";
import { crisisResources } from "@/lib/data";

export function CrisisBar() {
  return (
    <div className="bg-crisis text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-x-6 gap-y-1 px-6 py-2 text-sm sm:flex-row">
        <span className="font-semibold uppercase tracking-wide">
          24/7 National Human Trafficking Hotline
        </span>
        <a
          href={`tel:${crisisResources.hotline.replace(/[^0-9]/g, "")}`}
          className="inline-flex items-center gap-1.5 font-bold hover:underline"
        >
          <Phone className="h-4 w-4" aria-hidden />
          {crisisResources.hotline}
        </a>
        <span className="inline-flex items-center gap-1.5">
          <MessageSquare className="h-4 w-4" aria-hidden />
          Text {crisisResources.textKeyword} to {crisisResources.textNumber}
        </span>
      </div>
    </div>
  );
}
