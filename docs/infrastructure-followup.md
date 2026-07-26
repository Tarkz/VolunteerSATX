# Infrastructure follow-up — DNS, registrar, deploy

**Created:** 2026-07-26  
**Status:** Blocked on Squarespace auth code + GCP/GitHub one-time setup  
**Goal:** Live mockup at `https://volunteersatx.portfoliocameronschwach.com`

---

## Current state

| Item | Status |
|------|--------|
| VolunteerSATX repo | Done — [github.com/Tarkz/VolunteerSATX](https://github.com/Tarkz/VolunteerSATX) |
| Local mockup + CI workflow | Done |
| Portfolio DNS on Cloudflare | Done — nameservers `miki.ns.cloudflare.com`, `miles.ns.cloudflare.com` |
| Portfolio site live | Done — `portfoliocameronschwach.com` |
| Domain registrar | **Still Squarespace** (transfer pending) |
| Squarespace auth code | **Blocked** — email never arrives; need support ticket |
| VolunteerSATX GitHub secrets | **Not copied yet** |
| WIF for `Tarkz/VolunteerSATX` | **Not extended yet** |
| Cloud Run `volunteersatx-frontend` | **Not deployed yet** |
| Subdomain DNS (`volunteersatx`) | **Not added yet** |

---

## Phase A — Finish leaving Squarespace (optional but desired)

Squarespace still owns registration until transfer completes. DNS already works via Cloudflare; this phase is cleanup.

- [ ] **A1.** Open Squarespace support ticket (email support if live chat closed — weekends):
  - Domain: `portfoliocameronschwach.com`
  - Lock: OFF, registrant email: `cmschwac@gmail.com`
  - Request EPP/auth code directly (automated email delivery failed)
- [ ] **A2.** Receive auth code from Squarespace support
- [ ] **A3.** Cloudflare → **Domain Registration** → **Transfer domains** → enter code + pay (~$10–11)
- [ ] **A4.** Wait for transfer (5–7 days); approve any Squarespace outbound email if sent
- [ ] **A5.** Click **ICANN verification email** from Cloudflare when transfer completes
- [ ] **A6.** Confirm Cloudflare sidebar shows **Registrar: Cloudflare** (not Squarespace)
- [ ] **A7.** Remove/disconnect domain from Squarespace account

**Do not** switch nameservers away from Cloudflare during this process.

---

## Phase B — Enable VolunteerSATX deploy (GCP + GitHub)

Required before first Cloud Run deploy.

- [x] **B1.** Copy GitHub Actions secrets to [Tarkz/VolunteerSATX](https://github.com/Tarkz/VolunteerSATX/settings/secrets/actions) from ProfessionalPortfolio
- [x] **B2.** Extend WIF provider in GCP (`github-pool` / `github-provider`) for `Tarkz/VolunteerSATX`
- [x] **B3.** Trigger deploy (workflow run 30211650943 — deploy step succeeded; smoke check pending container fix)
- [ ] **B4.** Confirm smoke check passes; note Cloud Run URL:
  ```bash
  gcloud run services describe volunteersatx-frontend \
    --region us-central1 \
    --project steady-circuit-453303-d0 \
    --format='value(status.url)'
  ```

---

## Phase C — Subdomain: Cloud Run + Cloudflare

After Phase B deploy succeeds.

- [ ] **C1.** Create Cloud Run domain mapping:
  ```bash
  gcloud run domain-mappings create \
    --service volunteersatx-frontend \
    --domain volunteersatx.portfoliocameronschwach.com \
    --region us-central1 \
    --project steady-circuit-453303-d0
  ```
- [ ] **C2.** Copy DNS records from GCP output
- [ ] **C3.** Cloudflare → **DNS** → **Records** → Add record:
  - Type: **CNAME**
  - Name: `volunteersatx`
  - Target: value from GCP (often `ghs.googlehosted.com`)
  - Proxy: **DNS only (grey cloud)**
- [ ] **C4.** Wait for propagation; test `https://volunteersatx.portfoliocameronschwach.com`

---

## Phase D — Cloudflare hygiene (optional polish)

Not blocking the mockup preview.

- [ ] **D1.** Cloudflare → DNS → Records: confirm portfolio A/AAAA still **grey cloud**
- [ ] **D2.** Optional: add **Redirect Rule** `www.portfoliocameronschwach.com` → apex (301)
  - Requires `www` DNS record or proxied setup; apex-only was fine before migration
- [ ] **D3.** Optional: enable Cloudflare DNSSEC after registrar transfer completes

---

## Verification checklist

| URL / check | Expected |
|-------------|----------|
| `http://localhost:3000` | VolunteerSATX mockup |
| GitHub Actions CI | Green on `main` |
| GitHub Actions Deploy | Green after B1–B2 |
| Cloud Run default URL | 200 on `/` |
| `https://volunteersatx.portfoliocameronschwach.com` | Mockup live |
| `https://portfoliocameronschwach.com` | Portfolio still live |

---

## Reference

- **GCP project:** `steady-circuit-453303-d0`
- **Region:** `us-central1`
- **Artifact Registry:** `portfolio`
- **Cloud Run service:** `volunteersatx-frontend`
- **Cloudflare account:** `cmschwac@gmail.com`
- **Portfolio Cloud Run:** `professional-portfolio-frontend` (unchanged)

---

## Suggested order when resuming

1. Phase B (deploy pipeline) — unblocks the subdomain
2. Phase C (subdomain DNS)
3. Phase A (Squarespace exit) — in parallel with support ticket
4. Phase D (optional polish)
