# Stop Now Foundation — mockup redesign plan

> **Cursor plan (open this in Plans):** `C:\Users\cmsch\.cursor\plans\stopnow_mockup_redesign_e4b8c2a1.plan.md`

**Created:** 2026-07-26  
**Status:** Approved — plan only, no implementation yet  
**Client org:** [Stop Now Foundation](https://stopnowfoundation.org/)  
**Preview URL (infra):** `https://volunteersatx.portfoliocameronschwach.com`  
**Repo:** [github.com/Tarkz/VolunteerSATX](https://github.com/Tarkz/VolunteerSATX)

---

## Correction — what this project actually is

The initial build wrongly assumed [volunteersanantonio.org](https://www.volunteersanantonio.org/) was the client site. That site is a **United Way volunteer directory** (agency listings, shift sign-ups, blog) and has **nothing to do with this project**.

The actual organization is **Stop Now Foundation** — a San Antonio-based 501(c)(3) focused on ending human trafficking. The mockup should be a **modern homepage redesign concept** for their public site, not a volunteer hub clone.

---

## About Stop Now Foundation

| Field | Detail |
|-------|--------|
| **Legal status** | 501(c)(3) nonprofit · EIN 99-0636212 |
| **Location** | 5804 Babcock Road, Suite 726, San Antonio, TX 78240 |
| **Phone** | +1 (210) 272-7635 |
| **Email** | info@stopnowfoundation.org |
| **Mission** | End human trafficking through **Awareness, Advocacy, Action** |
| **Identity** | Survivor-led, community-rooted, trauma-informed |
| **Reach** | Founded in San Antonio; programs across 32+ states (per their site) |
| **Crisis resources** | National hotline **1-888-373-7888** · Text **BeFree** to 233733 (24/7, 200+ languages) |

### Three program pillars

1. **Survivor Support** — 24/7 crisis intervention, safe housing, counseling, job training, legal advocacy  
2. **Community Awareness** — School presentations, workshops, bilingual EN/ES public-education campaigns  
3. **Tech for Good** — Free web development, data management, and digital tools for partner nonprofits  

### Six operating principles (from their site)

Survivor-led · Trauma-informed · Accountable · Community-rooted · We Provide Care · We Consult

### Impact stats (as published on stopnowfoundation.org)

| Stat | Value |
|------|-------|
| Survivors supported | 500+ |
| Community workshops | 180+ |
| Active volunteers | 240+ |
| States reached | 32 |

---

## How their current site is set up

Their live site at [stopnowfoundation.org](https://stopnowfoundation.org/) is a **traditional nonprofit marketing site**, not a volunteer portal or agency directory.

**Likely stack:** WordPress on InterServer hosting, cookie-consent plugin, e-commerce store (WooCommerce or similar). Content is editorial and conversion-focused (donate, volunteer, get help).

### Site information architecture

```
Home
├── About
│   ├── Our Team
│   ├── Our Mission
│   └── Our Partners
├── The Issue
│   ├── Warning Signs
│   └── Local Statistics
├── Programs
│   ├── Survivor Support
│   ├── Community Awareness
│   └── Tech for Good
├── Get Involved
│   ├── Volunteer
│   ├── Events
│   ├── Become a Partner
│   └── Board Membership
├── Resources
│   ├── News & Stories
│   ├── Get Help
│   └── Español
├── Contact Us
├── Donate
└── Store
```

### Homepage sections (current site, top to bottom)

1. Hero — "Build a World Where All Are FREE, Safe & Valued" + Donate / Volunteer / Request Help CTAs  
2. Crisis callout — 24/7 hotline + Text BeFree  
3. Who We Are — survivor-led, San Antonio roots  
4. Our Mission — Awareness / Advocacy / Action pillars  
5. Six principles grid  
6. Impact stats (4 numbers)  
7. The Issue — "It hides in plain sight" + warning signs  
8. Our Programs — 3 integrated pillars  
9. Volunteer opportunities overview  
10. Volunteer spotlight (quote)  
11. Get Involved — Volunteer / Board / Advocate  
12. Voices of Resilience (story/video cards)  
13. Partners strip  
14. Store / "Wear the Cause"  
15. Footer — contact, hotline, EIN, links  

---

## Approved scope (2026-07-26)

| Decision | Choice |
|----------|--------|
| **Coverage** | Homepage only — one modern landing page with key sections |
| **Repo / subdomain** | Keep `VolunteerSATX` repo + `volunteersatx.portfoliocameronschwach.com` (content rebranded to SNF) |
| **Design direction** | Modern redesign — same IA and messaging, cleaner UI |
| **Next step** | Plan only first; implement when explicitly requested |

---

## Mockup equivalent — homepage section map

```
┌─────────────────────────────────────────────────────────┐
│  CrisisBar — hotline + Text BeFree (always prominent)   │
├─────────────────────────────────────────────────────────┤
│  SiteHeader — logo, nav anchors, Donate + Volunteer     │
├─────────────────────────────────────────────────────────┤
│  Hero — headline + 3 CTAs (Donate / Volunteer / Help)   │
├─────────────────────────────────────────────────────────┤
│  WhoWeAre — survivor-led, community-rooted              │
├─────────────────────────────────────────────────────────┤
│  MissionPillars — Awareness · Advocacy · Action         │
├─────────────────────────────────────────────────────────┤
│  ImpactStats — 500+ / 180+ / 240+ / 32                   │
├─────────────────────────────────────────────────────────┤
│  WarningSigns — 4 cards ("It hides in plain sight")     │
├─────────────────────────────────────────────────────────┤
│  Programs — Survivor Support · Community Ed · Tech        │
├─────────────────────────────────────────────────────────┤
│  GetInvolved — Volunteer · Board · Advocate             │
├─────────────────────────────────────────────────────────┤
│  VolunteerSpotlight — single Tech for Good quote        │
├─────────────────────────────────────────────────────────┤
│  Partners — text strip of partner org names             │
├─────────────────────────────────────────────────────────┤
│  SiteFooter — contact, hotline, EIN, disclaimer         │
└─────────────────────────────────────────────────────────┘
```

**Out of scope for v1:** Store/e-commerce, full inner pages, fake named survivor stories, verbatim copy scrape, Español toggle.

---

## What to remove from current mockup

The existing build is a volunteersanantonio.org-style hub. Delete or replace entirely:

| Current file / section | Why it goes |
|------------------------|-------------|
| `AgencyGrid` | Volunteer agency directory — not SNF's model |
| `OpportunityList` | United Way shift listings — wrong org |
| `BlogPreview` | Placeholder posts from wrong site |
| Hero copy ("Get Involved, Make a Difference") | Volunteer-hub tone, not anti-trafficking |
| VolunteerSATX branding in header/footer | Rebrand to Stop Now Foundation |
| United Way disclaimer | Replace with SNF concept disclaimer |

---

## Proposed components (new)

| Component | Purpose |
|-----------|---------|
| `CrisisBar` | Sticky or top-of-page hotline + Text BeFree |
| `SiteHeader` | SNF name, anchor nav, Donate + Volunteer CTAs |
| `Hero` | Primary headline + three action buttons |
| `WhoWeAre` | Survivor-led, San Antonio-founded narrative |
| `MissionPillars` | Awareness / Advocacy / Action cards |
| `ImpactStats` | Four published stat blocks |
| `WarningSigns` | Four warning-sign cards |
| `Programs` | Three program pillar cards |
| `GetInvolved` | Volunteer, Board Membership, Advocate columns |
| `VolunteerSpotlight` | One anonymized or org-voice quote (Tech for Good angle) |
| `Partners` | Partner name strip (from their public list) |
| `SiteFooter` | Address, phone, email, hotline, EIN, disclaimer |

### Files to delete after implementation

- `components/AgencyGrid.tsx`
- `components/OpportunityList.tsx`
- `components/BlogPreview.tsx`

---

## Data layer (`lib/data.ts`)

Replace volunteer-hub placeholders with SNF-specific exports:

```ts
export const crisisResources = {
  hotline: "1-888-373-7888",
  textKeyword: "BeFree",
  textNumber: "233733",
  // ...
};

export const missionPillars = [/* Awareness, Advocacy, Action */];
export const impactStats = [/* 500+, 180+, 240+, 32 */];
export const warningSigns = [/* 4 items from their Issue section */];
export const programs = [/* Survivor Support, Community Awareness, Tech for Good */];
export const getInvolvedPaths = [/* Volunteer, Board, Advocate */];
export const partners = [/* Taproot, Eyes Open International, ... */];
```

**Copy rule:** Paraphrase public messaging from [stopnowfoundation.org](https://stopnowfoundation.org/). Do not copy long passages verbatim. Do not invent named survivor testimonials.

---

## Design direction

- **Palette:** Deep navy/charcoal primary + restrained warm accent. Drop the current orange volunteer-hub look unless it aligns with SNF brand after review.
- **Typography:** Geist (current) or add a serif for headings (e.g. Source Serif) for institutional weight.
- **Crisis UX:** Hotline must be visible above the fold — not buried in footer only.
- **Tone:** Serious, survivor-centered. No playful "Find Opportunities" volunteer-directory language.
- **Disclaimer (required):** *"Concept redesign mockup for portfolio purposes — not affiliated with Stop Now Foundation."*
- **Portfolio hook:** Tech for Good pillar — emphasize nonprofit tech consulting in Volunteer Spotlight section.

---

## What stays unchanged (infra)

No changes needed to deploy pipeline for the redesign:

| Item | Value |
|------|-------|
| GitHub repo | `Tarkz/VolunteerSATX` |
| Cloud Run service | `volunteersatx-frontend` |
| Subdomain | `volunteersatx.portfoliocameronschwach.com` |
| GCP project | `steady-circuit-453303-d0` |
| Stack | Next.js 15, React 19, TypeScript, Tailwind v4 |
| Workflows | `ci.yml`, `deploy-cloud-run.yml` |

Update `README.md` intro and `app/layout.tsx` metadata when implementing.

---

## Implementation checklist (when ready)

- [ ] Rewrite `lib/data.ts` with SNF content  
- [ ] Create new section components (list above)  
- [ ] Recompose `app/page.tsx` in section order  
- [ ] Update `SiteHeader`, `SiteFooter`, `Hero` (or replace Hero)  
- [ ] Update `app/layout.tsx` metadata  
- [ ] Delete `AgencyGrid`, `OpportunityList`, `BlogPreview`  
- [ ] Update `README.md` — correct org description and disclaimer  
- [ ] `npm run build` locally  
- [ ] Commit + push to `main` (deploys automatically)  
- [ ] Verify live at subdomain after SSL/DNS  

**Estimated effort:** One focused session for homepage-only.

---

## Partner names (from their public site)

For the Partners strip — use only names they publish:

Taproot Foundation · Eyes Open International · Bexar County DA's Office · University Health · San Antonio ISD · H-E-B Community · United Way of SA · City of San Antonio · Texas DPS · Catholic Charities

---

## References

- Live site: https://stopnowfoundation.org/
- Wrong reference (ignore): https://www.volunteersanantonio.org/
- Infra checklist: `docs/infrastructure-followup.md`
