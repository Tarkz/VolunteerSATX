import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { VolunteerAsk } from "@/components/VolunteerAsk";
import { WhoWeAre } from "@/components/WhoWeAre";
import { SignsStrip } from "@/components/SignsStrip";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <VolunteerAsk />
        <WhoWeAre />
        <SignsStrip />
      </main>
      <SiteFooter />
    </>
  );
}
