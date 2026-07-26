# Stop Now Foundation — mockup redesign

Concept redesign mockup for [Stop Now Foundation](https://stopnowfoundation.org/), a San Antonio 501(c)(3) working to end human trafficking. Built as a fresh Next.js homepage with paraphrased placeholder content — a modern take on their public site's information architecture.

> Not affiliated with Stop Now Foundation. Content is paraphrased from public sources for portfolio demonstration only.

**Preview URL (after deploy):** `https://volunteersatx.portfoliocameronschwach.com`

## Local development

```bash
cd D:/Programming/Websites/VolunteerSATX
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Pushes to `main` deploy to Cloud Run service `volunteersatx-frontend` in GCP project `steady-circuit-453303-d0`.

### One-time setup

1. **GitHub secrets** (copy from ProfessionalPortfolio):
   - `GCP_PROJECT_ID`
   - `GCP_WORKLOAD_IDENTITY_PROVIDER`
   - `GCP_SERVICE_ACCOUNT_EMAIL`

2. **WIF:** Add `Tarkz/VolunteerSATX` to the GitHub WIF provider attribute condition.

3. **Domain mapping** (after first deploy):
   ```bash
   gcloud run domain-mappings create \
     --service volunteersatx-frontend \
     --domain volunteersatx.portfoliocameronschwach.com \
     --region us-central1 \
     --project steady-circuit-453303-d0
   ```

4. **Cloudflare DNS:** Add CNAME `volunteersatx` → target from GCP output (grey cloud / DNS only).

## Stack

- Next.js 15, React 19, TypeScript
- Tailwind CSS v4
- Cloud Run + GitHub Actions (WIF)

## Homepage sections

Crisis bar · header · hero · who we are · mission pillars · impact stats · warning signs · programs · get involved · volunteer spotlight · partners · footer.
