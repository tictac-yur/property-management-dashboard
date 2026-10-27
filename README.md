# PropManager: property management website

A public website for your rental units, plus a private admin portal (your dashboard) behind a login. Data is stored in [Convex](https://convex.dev), so it syncs live between your phone and laptop.

- **`/`**: public website. Anyone can open it, with no login.
- **`/admin`**: admin portal. Sign in with email and password ([Convex Auth](https://labs.convex.dev/auth)).

See **[docs/PLAN.md](docs/PLAN.md)** for the full site structure, roles, data model and roadmap.

## First-time setup (about 10 minutes)

You need [Node.js 20+](https://nodejs.org) and a free Convex account.

```bash
npm install

# 1. Create your Convex backend. This logs you in, creates a project, and writes VITE_CONVEX_URL to .env.local.
#    Leave it running in its own terminal: it pushes backend changes as you save.
npx convex dev

# 2. In a second terminal, set up Convex Auth (generates the sign-in keys and sets SITE_URL).
npx @convex-dev/auth

# 3. Make yourself admin. Use the email you will sign up with; separate several emails with commas.
npx convex env set ADMIN_EMAILS you@example.com

# 4. Start the website.
npm run dev
```

Then open http://localhost:5173/admin, choose **Create an account** with the email from step 3, and you're in.

**On the first sign-in** the database is empty, so it fills with the starting data from the dashboard (your 7 properties and 7 tenants).

### Bring over the data from the old single-file dashboard

Your current data is stored in the browser where you used the old version.

1. Open the old dashboard (the same page you've been using, or `legacy/index.html`).
2. Click **⬇ Export backup** on the Dashboard to download a `.json` file.
3. In the new admin portal, click **⬆ Import / Restore** and pick that file.

Records, income tables, the goal tracker, the to-do list and attached files are all copied in.

## Put it online (so it works on your phone)

1. **Backend:** `npx convex deploy` creates your production Convex deployment. Then set up auth and admins on production as well:
   ```bash
   npx @convex-dev/auth --prod
   npx convex env set ADMIN_EMAILS you@example.com --prod
   ```
2. **Frontend:** import this repo into [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
   - Build command: `npx convex deploy --cmd 'npm run build'`
   - Output directory: `dist`
   - Environment variable: `CONVEX_DEPLOY_KEY`. Get it from the Convex dashboard under Settings → Deploy keys → Production.
   - The routing files are already included (`vercel.json`, `public/_redirects`).
3. In the Convex dashboard, set the production `SITE_URL` to your real site address (for example `https://your-site.vercel.app`).

Open the address on your phone. Optionally, use "Add to Home Screen" so it opens like an app.

## Using the admin portal

- **Website → Listings**: create a listing for each unit you want to advertise, or click **Draft from Properties**. Add photos, write a description, then turn the **On Website** switch on.
- **Website → Site Content**: edit every text on the public site (headline, about, phone, LINE, email).
- **Website → Inquiries**: messages from the contact form. Mark them Contacted or Closed.
- **Website → Team & Access** (admins only): when someone creates an account they see nothing until you set them to *Manager* (dashboard + website) or *Admin* (also manages the team).

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Runs the website and the Convex backend together |
| `npm run build` | Typechecks and builds the website into `dist/` |
| `npm run typecheck` | Typechecks the frontend and the backend |
