/* global React, FaluHeader, FaluFooter, SectionLabel, ImageSlot */

// ============================================================
//  /machinery — Machinery family index page
//  Adapted from /solutions wireframe: 3 grouped machinery blocks,
//  planning visually separate. Bulleted, simple, scannable.
// ============================================================
window.Machinery = function Machinery() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <FaluHeader active="machinery" />

      {/* Breadcrumb */}
      <div style={{ background: "var(--bg-alt)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container" style={{ padding: "12px var(--gutter)" }}>
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-muted)", letterSpacing: "0.14em" }}>
            <a href="#home" style={{ color: "inherit", textDecoration: "none" }}>HOME</a>
            <span style={{ margin: "0 10px", opacity: 0.4 }}>/</span>
            <span style={{ color: "var(--navy)" }}>MACHINERY</span>
          </div>
        </div>
      </div>

      {/* HERO — above the fold */}
      <section style={{ padding: "112px 0 88px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 80, alignItems: "end" }}>
            <h1 style={{ fontSize: 88, lineHeight: 0.96, letterSpacing: "-0.035em", color: "var(--navy)" }}>
              Machinery.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ink-soft)" }}>FALU supports manufacturers with machinery and complete production lines for cotton-based hygiene products.



            </p>
          </div>
        </div>
      </section>

      {/* MACHINERY BLOCKS — grouped */}
      <section style={{ padding: "0 0 96px", background: "var(--bg-band)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container" style={{ paddingTop: 80 }}>
          <SectionLabel num="01">Machinery families</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, marginTop: 56 }}>
            <FamilyCard
              num="01"
              title="Cotton swab production"
              image="Cotton swab production line, CB1 4.1"
              bullets={[
              "Single machines or complete lines",
              "Integrated packaging options",
              "Manual to high-output automation"]
              }
              ctaLabel="View Cotton Swab Machinery"
              href="#cotton-swab-machinery" />
            
            <FamilyCard
              num="02"
              title="Cotton pad production"
              image="Cotton pad production line, WR-2100 + VP"
              bullets={[
              "Single machines or complete lines",
              "Integrated packaging options",
              "Manual to high-output automation"]
              }
              ctaLabel="View Cotton Pad Machinery"
              href="#cotton-pad-machinery" />
            
            <FamilyCard
              num="03"
              title="Paper stick production"
              image="Paper stick winding machine, PRX"
              bullets={[
              "Fully automatic systems",
              "Integration into swab production lines",
              "Available for food applications"]
              }
              ctaLabel="View Paper Stick Machinery"
              href="#prx" />
            
          </div>
        </div>
      </section>

      {/* PRODUCTION PLANNING — visually separate */}
      <section style={{ padding: "112px 0", background: "#fff" }}>
        <div className="container">
          <SectionLabel num="04">Production planning</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start", marginTop: 32 }}>
            <div>
              <h2 style={{ fontSize: 56, lineHeight: 1.0, letterSpacing: "-0.03em", color: "var(--navy)" }}>
                We help you plan<br />your production line around your needs.
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink-soft)" }}>
                Before machines are specified, FALU engineers help define the right line for your
                output target, footprint and product mix. Production planning covers production
                flow and capacity definition, factory layout and space planning, and line concept
                creation.
              </p>
              <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, paddingTop: 32, borderTop: "1px solid var(--rule)" }}>
                {[
                ["Production flow & capacity", "Output forecasts by shift pattern, format and downtime assumptions, matched to your business plan."],
                ["Factory layout & space", "CAD layout for your factory floor, including service zones, utilities and material flow."],
                ["Line concept creation", "End-to-end line concept covering stick supply, swab production, packing and inspection."],
                ["Capital sequencing", "Phased investment plan, retrofit-first paths where appropriate to spread capital expenditure."]].
                map(([t, b]) =>
                <div key={t}>
                    <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--navy)", marginBottom: 8 }}>{t}</h4>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)" }}>{b}</p>
                  </div>
                )}
              </div>
              <a href="#contact" style={{ marginTop: 40, display: "inline-flex", alignItems: "center", gap: 8, color: "var(--falu-red)", fontSize: 15, fontWeight: 600, textDecoration: "none", borderBottom: "1px solid var(--falu-red)", paddingBottom: 4, alignSelf: "flex-start" }}>Get in touch with our specialists<span className="arrow" style={{ borderColor: "var(--falu-red)" }} /></a>
            </div>
          </div>
        </div>
      </section>

      <FaluFooter />
    </div>);

};

// ============ FAMILY CARD ============
function FamilyCard({ num, title, image, bullets, ctaLabel, href }) {
  return (
    <a href={href} style={{ display: "flex", flexDirection: "column", textDecoration: "none", color: "inherit", background: "#fff", border: "1px solid var(--rule)" }}>
      <ImageSlot label={image} ratio="4 / 3" />
      <div style={{ padding: "32px 32px 36px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{ fontSize: 26, lineHeight: 1.15, letterSpacing: "-0.015em", color: "var(--navy)" }}>
          {title}
        </h3>
        <ul style={{ marginTop: 24, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
          {bullets.map((b) =>
          <li key={b} style={{ position: "relative", paddingLeft: 18, fontSize: 14, lineHeight: 1.55, color: "var(--ink-soft)" }}>
              <span style={{ position: "absolute", left: 0, top: 9, width: 8, height: 1, background: "var(--falu-red)" }} />
              {b}
            </li>
          )}
        </ul>
        <div style={{ marginTop: 28 }}>
          <span className="btn btn--primary" style={{ width: "100%", justifyContent: "space-between" }}>{ctaLabel}<span className="arrow" /></span>
        </div>
      </div>
    </a>);

}