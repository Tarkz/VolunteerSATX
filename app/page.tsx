import { AgencyGrid } from "@/components/AgencyGrid";
import { BlogPreview } from "@/components/BlogPreview";
import { Hero } from "@/components/Hero";
import { OpportunityList } from "@/components/OpportunityList";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AgencyGrid />
        <OpportunityList />
        <BlogPreview />
      </main>
      <SiteFooter />
    </>
  );
}
