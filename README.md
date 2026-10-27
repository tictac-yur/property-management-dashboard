# PropManager

A private dashboard for keeping track of my rental condos: properties, tenants, rent, expenses, documents. Data is stored in [Convex](https://convex.dev), so it stays in sync across phone and laptop. Family can sign in to see it.

See [docs/PLAN.md](docs/PLAN.md) for how it's put together.

## Run it on your computer

```bash
npm install
npx convex dev            # leave running; creates/connects your Convex project
npx @convex-dev/auth      # once: sets up sign-in
npx convex env set ADMIN_EMAILS you@example.com   # once: makes you admin
npm run dev               # opens http://localhost:5173
```

## Put it online (free)

**1. Merge the code into `main`** on GitHub. Vercel publishes the `main` branch.

**2. Get a Convex deploy key**
- In the [Convex dashboard](https://dashboard.convex.dev), open your project.
- Switch to **Production** (dropdown at the top).
- Go to **Settings → Deploy Keys → Generate Production Deploy Key** and copy it.

**3. Create the site on Vercel**
- Go to [vercel.com](https://vercel.com) and sign up with GitHub.
- Click **Add New → Project** and import `property-management-dashboard`.
- Under **Environment Variables**, add `CONVEX_DEPLOY_KEY` and paste the key from step 2.
- Click **Deploy**. The build settings come from `vercel.json`, so leave everything else as it is.
- When it's done you get an address like `https://property-management-dashboard.vercel.app`.

**4. Set up sign-in on production** (in the VS Code terminal):
```bash
npx @convex-dev/auth --prod
npx convex env set ADMIN_EMAILS you@example.com --prod
```
If it asks for your site URL, paste the Vercel address.

**5. Open the Vercel address** and create your account with the same email.
- The online version has its own database, separate from the one on your computer.
- To copy your data over, use **Export backup** on your computer's version, then **Import / Restore** on the online one.

From then on, every change pushed to `main` goes live automatically.

## Who can see what

Anyone can create an account, but they see nothing until you pick a role in **Team & Access**:

| Role | Can do |
|---|---|
| Viewer | See everything, change nothing. Good for family. |
| Manager | See and edit records |
| Admin | Also choose who has access |

Emails listed in `ADMIN_EMAILS` are always admin.
