import { CrisisBar } from "@/components/CrisisBar";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { WhoWeAre } from "@/components/WhoWeAre";
import { MissionPillars } from "@/components/MissionPillars";
import { ImpactStats } from "@/components/ImpactStats";
import { WarningSigns } from "@/components/WarningSigns";
import { Programs } from "@/components/Programs";
import { GetInvolved } from "@/components/GetInvolved";
import { VolunteerSpotlight } from "@/components/VolunteerSpotlight";
import { Partners } from "@/components/Partners";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <div id="top">
      <CrisisBar />
      <SiteHeader />
      <main>
        <Hero />
        <WhoWeAre />
        <MissionPillars />
        <ImpactStats />
        <WarningSigns />
        <Programs />
        <GetInvolved />
        <VolunteerSpotlight />
        <Partners />
      </main>
      <SiteFooter />
    </div>
  );
}
