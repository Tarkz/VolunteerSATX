# VolunteerSATX

Concept mockup for a modern San Antonio volunteer hub — inspired by [volunteersanantonio.org](https://www.volunteersanantonio.org/) but built as a fresh Next.js redesign with placeholder content.

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

## Disclaimer

Concept mockup only — not affiliated with United Way or volunteersanantonio.org.
