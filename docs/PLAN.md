# Website structure plan

One web app, two sides, one database. Everything is stored in Convex, so the same data shows up on your phone and laptop and updates live on both.

```
                         ┌───────────────────────────────┐
  Anyone (tenants,       │  PUBLIC WEBSITE   /           │   reads: site content + published listings
  people looking  ─────▶ │  units · about · contact form │   writes: new inquiry only
  for a condo)           └───────────────────────────────┘
                                         │
                                  Convex database
                                         │
                         ┌───────────────────────────────┐
  You + people you       │  ADMIN PORTAL     /admin      │   sign in with Convex Auth (email + password)
  give access to  ─────▶ │  your dashboard + website     │   reads/writes everything
                         │  manager                      │
                         └───────────────────────────────┘
```

## 1. Sitemap

### Public website: `/` (no login)

| Section | What it shows | Where it's edited |
|---|---|---|
| Header | Brand name, tagline, links to Units / About / Contact | Admin → Site Content |
| Hero | Headline, sub-headline, buttons, live stats (units listed, available now, lowest rent) | Admin → Site Content (stats are automatic) |
| Our units | A card for each **published** listing with an All / Available filter. Tapping a card opens photos, description, features and an "Ask about this unit" button | Admin → Listings |
| About | Short owner story | Admin → Site Content |
| Contact | Phone (tap to call), LINE (opens LINE), email, area, plus an inquiry form | Admin → Site Content; form messages go to Admin → Inquiries |
| Footer | Footer text and an "Owner login" link to `/admin` | Admin → Site Content |

### Admin portal: `/admin` (login required)

Your existing layout, with the same 14 sections, plus a new **Website** group:

| Sidebar group | Sections |
|---|---|
| Overview | Dashboard (alerts, goal tracker, KPIs, charts, YTD, reminders, leases expiring, to-do) |
| Portfolio | Properties · Tenants · Rent Payments · Rent Calendar |
| Operations | Maintenance · Key Dates · Expenses |
| Finance | Income Summary · Loans |
| Records | Documents · Contracts · Contacts · Contractors |
| **Website (new)** | **Listings** (photos, rent, availability, an On/Off switch for the public site) · **Site Content** (every text on the public site) · **Inquiries** (contact-form messages with New/Contacted/Closed status) · **Team & Access** (admins only) |

The sidebar footer shows who's signed in, a "Synced / Saving…" indicator, **View website**, and **Sign out**.

## 2. Who can see what

| Role | How you get it | Public site | Dashboard + Website admin | Team & Access |
|---|---|---|---|---|
| Visitor | nobody signs in | ✅ | ❌ | ❌ |
| Signed up, no role | creates an account at `/admin` | ✅ | ❌ ("waiting for access" screen) | ❌ |
| Manager | an admin picks "Manager" | ✅ | ✅ | ❌ |
| Admin | your email is in `ADMIN_EMAILS`, or an admin picks "Admin" | ✅ | ✅ | ✅ |

The server enforces every rule. Each Convex function checks the role first (`convex/lib/access.ts`), so hiding a button isn't what keeps data private.

**Privacy line:** tenant names, phone numbers, deposits, payments, loans and documents live only in private tables. The public site reads two things: `siteContent` and listings that are switched **On**. A listing has its own title, description and photos, so nothing from the tenant records leaks onto the website.

## 3. Data model (Convex tables)

| Table | Visibility | Holds |
|---|---|---|
| `users`, `auth*` | private | Accounts from Convex Auth, plus `role` |
| `records` | private | One row per dashboard record: `{collection: "properties" \| "tenants" \| "payments" \| ..., rid: "P001", data}` |
| `settings` | private | Single values: `income` tables, `goal` tracker, `initialized` flag |
| `attachments` | private | Files attached to documents and contracts (stored in Convex file storage) |
| `siteContent` | **public** | All website text |
| `listings` | **public when `published`** | Title, linked property ID, type, location, rent, size, beds/baths, availability, description, features, photos, sort order |
| `inquiries` | private (public can only *add*) | Contact-form messages and their status |

Dashboard records sync **per record**. When you edit tenant T003 on your phone while someone edits P005 on a laptop, both changes are kept.

## 4. Code layout

```
convex/                    backend (runs on Convex)
  schema.ts                tables above
  auth.ts, auth.config.ts, http.ts   Convex Auth (Password provider)
  lib/access.ts            role checks used by every function
  portfolio.ts             dashboard load / save / file attachments
  site.ts                  public site query + content editor
  listings.ts              listing CRUD + publish switch
  inquiries.ts             public contact form + inbox
  users.ts                 current user, team list, role changes
src/
  main.tsx, App.tsx        Convex + auth providers; "/" vs "/admin" routing
  public/                  public website (React)
  admin/AdminApp.tsx       sign in / sign up / waiting-for-access screens
  admin/LegacyDashboard.tsx  mounts your original dashboard
  admin/bridge.ts          connects the dashboard's getData/setData to Convex (live sync)
  admin/legacy/            your layout: dashboard.html / .css / .js + website.js (new Website sections)
legacy/index.html          the original single-file version, kept for reference and for exporting old data
docs/PLAN.md               this file
```

## 5. Roadmap

**Phase 1 (this change): online and synced**
- [x] Convex backend, Convex Auth sign-in, roles
- [x] Original dashboard moved onto Convex with live sync between devices
- [x] Phone layout: slide-in menu, scrollable tables, full-width forms
- [x] Public website + Website admin (listings, content, inquiries, team)
- [x] Import the backup JSON from the old offline version, including attached files

**Phase 2 (suggested next)**
- Email or LINE Notify alert when a new inquiry arrives (Convex action + scheduler)
- Rent-due and lease-expiry reminders sent automatically (Convex cron)
- "Add to home screen" support (PWA manifest + icon) so it opens like an app on the phone
- Thai/English language toggle on the public site
- Limit how often the public contact form can be submitted (`@convex-dev/rate-limiter`)

**Phase 3 (later)**
- Tenant portal: tenants sign in to see their lease, upload payment slips and report repairs (adds a `tenant` role)
- Replace the free-text "Property ID" inputs with dropdowns, and rebuild screens in React piece by piece
