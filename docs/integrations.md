# Integrations Guide

This site is currently static (Vite + React). The contact form is frontend-only. Use the steps below to wire production integrations.

## 1. Resend (Contact Form Email)

**Goal:** Send contact form submissions to `jehkat505@gmail.com` via Resend.

1. Create a Resend account and verify your sending domain.
2. Create an API key and store it in your hosting provider as `RESEND_API_KEY`.
3. Add a serverless endpoint (e.g., `/api/contact`) on your hosting platform:
   - Vercel: `/api/contact.ts`
   - Netlify: `/.netlify/functions/contact.ts`
4. Update `src/app/pages/Contact.tsx`:
   - Replace the simulated `setTimeout` with a `fetch` POST to `/api/contact`.
   - Send payload: `{ name, email, company, service, budget, message }`.
5. On the serverless endpoint:
   - Validate inputs.
   - Send email using Resend SDK.
   - Return success or error.

**Notes:** When you connect this, also update `documentation.md` to mark the form as live.

## 2. Domain Integration (luminouspixels.app)

**Goal:** Point the domain to your hosting provider and enable SSL.

1. Deploy the static site (Vite build output `dist/`) to your hosting provider.
2. In the hosting dashboard, add custom domain: `luminouspixels.app`.
3. Update DNS records at your registrar:
   - A record or CNAME as instructed by your host.
   - Add `www` alias if you want `www.luminouspixels.app` to resolve.
4. Wait for SSL provisioning to complete.
5. Add a 301 redirect from `www` to apex (or vice versa) for a single canonical domain.

## 3. PostHog (Product Analytics)

**Goal:** Track key events such as CTA clicks and form submissions.

1. Create a PostHog project and get your Project API Key + Host.
2. Add env vars:
   - `VITE_POSTHOG_KEY`
   - `VITE_POSTHOG_HOST` (e.g., `https://app.posthog.com`)
3. Initialize PostHog in `src/main.tsx` or `src/app/App.tsx`:
   - `posthog.init(import.meta.env.VITE_POSTHOG_KEY, { api_host: import.meta.env.VITE_POSTHOG_HOST })`
4. Track events:
   - CTA clicks (Contact / Book Call)
   - Contact form submissions (success/fail)
   - Route views (optional if you want lightweight page tracking)

## Suggested Events
- `cta_click` (label: "home_hero", "pricing", "footer")
- `contact_submit` (status: "success" | "error")
- `page_view` (path)
