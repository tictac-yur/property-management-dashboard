# How the app is put together

A single private dashboard. There is no public website: every page needs a sign-in.

```
 Phone / laptop (you + family)
          │  sign in (Convex Auth, email + password)
          ▼
 Dashboard (Vite + your original layout)  ── live sync ──▶  Convex database
```

## Sections

| Group | Sections |
|---|---|
| Overview | Dashboard: alerts, goal tracker, KPIs, charts, year-to-date, reminders, leases expiring, to-do, backup |
| Portfolio | Properties · Tenants · Rent Payments · Rent Calendar |
| Operations | Maintenance · Key Dates · Expenses |
| Finance | Income Summary · Loans |
| Records | Documents · Contracts · Contacts · Contractors |
| Settings (admins only) | Team & Access |

## Roles

| Role | Sees | Edits | Manages access |
|---|---|---|---|
| No role (just signed up) | "Waiting for access" screen | – | – |
| Viewer | ✓ | – | – |
| Manager | ✓ | ✓ | – |
| Admin (or listed in `ADMIN_EMAILS`) | ✓ | ✓ | ✓ |

Every Convex function checks the role on the server (`convex/lib/access.ts`). Hidden buttons are only a convenience, not what keeps the data safe.

## Data (Convex tables)

| Table | Holds |
|---|---|
| `users` + auth tables | Accounts and their role |
| `records` | One row per record: `{collection: "properties" \| "tenants" \| "payments" \| ..., rid: "P001", data}` |
| `settings` | Income tables, goal tracker, first-run flag |
| `attachments` | Files attached to documents and contracts |

Changes sync per record. When two people edit different records at the same time, both changes are kept.

## Code layout

```
convex/                    backend: schema, auth, access checks, portfolio + users functions
src/admin/AdminApp.tsx     sign in / waiting-for-access / dashboard
src/admin/bridge.ts        connects the dashboard's getData/setData to Convex
src/admin/legacy/          the dashboard: markup, styles, script, team.js
legacy/index.html          the original offline single-file version
```

## Ideas for later

- Rent-due and lease-end reminders by LINE or email (Convex cron)
- "Add to home screen" icon (PWA)
- This month's rent checklist, payment-slip photos, PDF receipts
- Export to Excel for taxes
