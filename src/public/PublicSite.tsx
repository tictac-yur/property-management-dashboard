import { useEffect, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import "./public.css";

type Site = NonNullable<ReturnType<typeof useQuery<typeof api.site.getPublic>>>;
type Listing = Site["listings"][number];

const baht = (n: number) => "฿" + n.toLocaleString("en");

export default function PublicSite() {
  const site = useQuery(api.site.getPublic);
  const [filter, setFilter] = useState<"all" | "available">("all");
  const [open, setOpen] = useState<Listing | null>(null);
  const [askAbout, setAskAbout] = useState<Listing | null>(null);

  useEffect(() => {
    if (site) document.title = site.content.brandName + " — " + site.content.tagline;
  }, [site]);

  if (site === undefined) return <div className="pub-loading">Loading…</div>;
  const { content: c, listings } = site;
  const available = listings.filter((l) => l.availability === "Available");
  const shown = filter === "available" ? available : listings;

  const ask = (l: Listing | null) => {
    setOpen(null);
    setAskAbout(l);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pub">
      <header className="pub-header">
        <a className="pub-brand" href="/">
          <span className="pub-logo">🏢</span>
          <span>
            <strong>{c.brandName}</strong>
            <small>{c.tagline}</small>
          </span>
        </a>
        <nav className="pub-nav">
          <a href="#listings">Units</a>
          <a href="#about">About</a>
          <a href="#contact" className="pub-nav-cta">
            Contact
          </a>
        </nav>
      </header>

      <section className="pub-hero">
        <h1>{c.heroTitle}</h1>
        <p>{c.heroSubtitle}</p>
        <div className="pub-hero-actions">
          <a className="pub-btn" href="#listings">
            See available units
          </a>
          <a className="pub-btn ghost" href="#contact">
            Ask a question
          </a>
        </div>
        {listings.length > 0 && (
          <div className="pub-stats">
            <div>
              <strong>{listings.length}</strong>
              <span>units listed</span>
            </div>
            <div>
              <strong>{available.length}</strong>
              <span>available now</span>
            </div>
            <div>
              <strong>{baht(Math.min(...listings.map((l) => l.rent)))}</strong>
              <span>rent from / month</span>
            </div>
          </div>
        )}
      </section>

      <section className="pub-section" id="listings">
        <div className="pub-section-head">
          <h2>Our units</h2>
          <div className="pub-chips">
            <button className={filter === "all" ? "on" : ""} onClick={() => setFilter("all")}>
              All ({listings.length})
            </button>
            <button className={filter === "available" ? "on" : ""} onClick={() => setFilter("available")}>
              Available ({available.length})
            </button>
          </div>
        </div>
        {shown.length === 0 ? (
          <div className="pub-empty">
            {listings.length === 0
              ? "Listings are coming soon — get in touch and we'll tell you what's available."
              : "Nothing available right now. Leave your details below and we'll let you know when a unit opens up."}
          </div>
        ) : (
          <div className="pub-grid">
            {shown.map((l) => (
              <button key={l._id} className="pub-card" onClick={() => setOpen(l)}>
                <div className="pub-card-img">
                  {l.photos[0] ? <img src={l.photos[0]} alt="" loading="lazy" /> : <span>🏢</span>}
                  <span className={"pub-avail " + l.availability.replace(" ", "-").toLowerCase()}>
                    {l.availability}
                  </span>
                </div>
                <div className="pub-card-body">
                  <div className="pub-card-title">{l.title}</div>
                  {l.location && <div className="pub-card-loc">{l.location}</div>}
                  <div className="pub-card-meta">
                    <span>{l.type}</span>
                    {l.sqm > 0 && <span>{l.sqm} sqm</span>}
                    {l.bedrooms > 0 && <span>{l.bedrooms} bed</span>}
                    {l.bathrooms > 0 && <span>{l.bathrooms} bath</span>}
                  </div>
                  <div className="pub-card-price">
                    {baht(l.rent)} <small>/ month</small>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      <section className="pub-section pub-about" id="about">
        <h2>{c.aboutTitle}</h2>
        <p>{c.aboutBody}</p>
      </section>

      <section className="pub-section" id="contact">
        <h2>Contact us</h2>
        <div className="pub-contact">
          <div className="pub-contact-ways">
            {c.contactPhone && (
              <a href={"tel:" + c.contactPhone.replace(/[^\d+]/g, "")}>
                <span>📞</span>
                {c.contactPhone}
              </a>
            )}
            {c.contactLine && (
              <a href={"https://line.me/R/ti/p/" + encodeURIComponent(c.contactLine)} target="_blank" rel="noopener">
                <span>💬</span>LINE: {c.contactLine}
              </a>
            )}
            {c.contactEmail && (
              <a href={"mailto:" + c.contactEmail}>
                <span>✉️</span>
                {c.contactEmail}
              </a>
            )}
            {c.contactAddress && (
              <div>
                <span>📍</span>
                {c.contactAddress}
              </div>
            )}
          </div>
          <InquiryForm listing={askAbout} listings={listings} onListing={setAskAbout} />
        </div>
      </section>

      <footer className="pub-footer">
        <span>{c.footerNote}</span>
        <a href="/admin">Owner login</a>
      </footer>

      {open && <ListingDialog l={open} onClose={() => setOpen(null)} onAsk={() => ask(open)} />}
    </div>
  );
}

function ListingDialog({ l, onClose, onAsk }: { l: Listing; onClose: () => void; onAsk: () => void }) {
  const [photo, setPhoto] = useState(0);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return (
    <div className="pub-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="pub-dialog" role="dialog" aria-label={l.title}>
        <button className="pub-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <div className="pub-gallery">
          {l.photos.length ? <img src={l.photos[photo]} alt="" /> : <div className="pub-gallery-empty">🏢</div>}
        </div>
        {l.photos.length > 1 && (
          <div className="pub-thumbs">
            {l.photos.map((p, i) => (
              <button key={p} className={i === photo ? "on" : ""} onClick={() => setPhoto(i)}>
                <img src={p} alt="" />
              </button>
            ))}
          </div>
        )}
        <div className="pub-dialog-body">
          <span className={"pub-avail inline " + l.availability.replace(" ", "-").toLowerCase()}>
            {l.availability}
          </span>
          <h3>{l.title}</h3>
          {l.location && <div className="pub-card-loc">{l.location}</div>}
          <div className="pub-card-price big">
            {baht(l.rent)} <small>/ month</small>
          </div>
          <div className="pub-card-meta">
            <span>{l.type}</span>
            {l.sqm > 0 && <span>{l.sqm} sqm</span>}
            {l.bedrooms > 0 && <span>{l.bedrooms} bedroom{l.bedrooms > 1 ? "s" : ""}</span>}
            {l.bathrooms > 0 && <span>{l.bathrooms} bathroom{l.bathrooms > 1 ? "s" : ""}</span>}
          </div>
          {l.description && <p className="pub-desc">{l.description}</p>}
          {l.features.length > 0 && (
            <ul className="pub-features">
              {l.features.map((f) => (
                <li key={f}>✓ {f}</li>
              ))}
            </ul>
          )}
          <button className="pub-btn" onClick={onAsk}>
            Ask about this unit
          </button>
        </div>
      </div>
    </div>
  );
}

function InquiryForm({
  listing,
  listings,
  onListing,
}: {
  listing: Listing | null;
  listings: Listing[];
  onListing: (l: Listing | null) => void;
}) {
  const submit = useMutation(api.inquiries.submit);
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  if (state === "sent") {
    return (
      <div className="pub-form pub-sent">
        <strong>Thanks — message received!</strong>
        <p>We'll get back to you soon.</p>
        <button className="pub-btn ghost" onClick={() => setState("idle")}>
          Send another
        </button>
      </div>
    );
  }
  return (
    <form
      className="pub-form"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        setState("sending");
        setError(null);
        submit({
          name: String(fd.get("name") ?? ""),
          contact: String(fd.get("contact") ?? ""),
          message: String(fd.get("message") ?? ""),
          listingId: (listing?._id ?? undefined) as Id<"listings"> | undefined,
        })
          .then(() => {
            setState("sent");
            onListing(null);
          })
          .catch((err) => {
            setState("idle");
            setError(String(err?.data ?? err?.message ?? err).replace(/^.*Uncaught Error: /, "").split("\n")[0]);
          });
      }}
    >
      <label>
        Interested in
        <select
          value={listing?._id ?? ""}
          onChange={(e) => onListing(listings.find((l) => l._id === e.target.value) ?? null)}
        >
          <option value="">General question</option>
          {listings.map((l) => (
            <option key={l._id} value={l._id}>
              {l.title}
            </option>
          ))}
        </select>
      </label>
      <label>
        Your name
        <input name="name" required maxLength={120} autoComplete="name" />
      </label>
      <label>
        Phone, email or LINE ID
        <input name="contact" required maxLength={200} />
      </label>
      <label>
        Message
        <textarea name="message" rows={4} maxLength={2000} placeholder="When would you like to move in? Any questions?" />
      </label>
      {error && <div className="pub-error">{error}</div>}
      <button className="pub-btn" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
