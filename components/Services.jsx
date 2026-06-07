/* global React, FaluHeader, FaluFooter, SectionLabel, ImageSlot */

// ============================================================
// SERVICES & LIFECYCLE SUPPORT
// Consolidates the promises made across the site: spare parts,
// retrofits (the 4 fact-sheet upgrades), training, commissioning,
// consultation. Procurement-facing.
// ============================================================

window.Services = function Services() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <FaluHeader active="services" />

      {/* Breadcrumb */}
      <div style={svcCrumb.wrap}>
        <div className="container" style={svcCrumb.inner}>
          <a href="#home" style={svcCrumb.link}>Home</a>
          <span style={svcCrumb.sep}>/</span>
          <span style={svcCrumb.current}>Services</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{ padding: "112px 0 88px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 80, alignItems: "end" }}>
            <h1 style={{ fontSize: 80, lineHeight: 0.98, letterSpacing: "-0.035em", color: "var(--navy)" }}>
              Services.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ink-soft)" }}>
              A FALU machine is a multi-decade investment. We support it for the whole of that life,
              from line planning and commissioning through training, spare parts, and retrofits that
              keep an installed machine current.
            </p>
          </div>
        </div>
      </section>

      {/* LIFECYCLE SERVICES */}
      <section style={{ padding: "96px 0", background: "var(--bg-band)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <SectionLabel num="01">Lifecycle support</SectionLabel>
          <h2 style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: 32, marginBottom: 56 }}>
            One partner, from concept<br />to decades of operation.
          </h2>

          <div style={svc.grid}>
            {[
              ["S-01", "Consultation & production planning", "Line specification, capacity modelling and factory layout before a machine is ordered. We size the line to your output target and footprint."],
              ["S-02", "Commissioning & ramp-up", "Installation, integration with upstream and downstream equipment, and supervised production start-up until the line runs to specification."],
              ["S-03", "Operator training", "On-site or at Rüti. Operators and maintenance staff are trained on running, changeover, cleaning and first-line fault finding."],
              ["S-04", "Spare parts", "We guarantee spare part availability for the entire lifecycle of your machine, independent of installation date. Critical wear parts are held and shipped fast."],
              ["S-05", "Retrofits & upgrades", "Add capability to an installed machine: gluing, inspection, drive, and dust-control upgrades engineered to fit machines built decades ago."],
              ["S-06", "Remote diagnostics & support", "Modem-based remote access lets FALU technicians diagnose and often resolve issues without a site visit, reducing downtime."]
            ].map(([num, title, body]) => (
              <div key={num} style={svc.cell}>
                <div className="mono" style={svc.num}>{num}</div>
                <h3 style={{ marginTop: 14, fontSize: 20 }}>{title}</h3>
                <p style={{ marginTop: 12, color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPARE PARTS COMMITMENT — navy slab */}
      <section style={{ padding: "112px 0", background: "var(--navy)", color: "#fff" }}>
        <div className="container">
          <div style={{ borderLeft: "4px solid var(--falu-red)", paddingLeft: 32 }}>
            <h2 style={{ fontSize: 42, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: 820 }}>
              Spare parts guaranteed for the entire lifecycle of the machine.
            </h2>
            <p style={{ marginTop: 22, color: "rgba(255,255,255,0.78)", fontSize: 16, lineHeight: 1.65, maxWidth: 720 }}>
              Not a warranty window. FALU continues to manufacture parts for machines installed
              decades ago, which is why so many are still in service. Your line keeps running on the
              day the original engineer retires, and on the day the one after them retires too.
            </p>
          </div>
        </div>
      </section>

      {/* RETROFITS */}
      <section style={{ padding: "96px 0", borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <SectionLabel num="02">Retrofits &amp; upgrades</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "end", marginBottom: 56, marginTop: 32 }}>
            <h2 style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: "-0.025em" }}>
              Add new capability to a<br />machine you already own.
            </h2>
            <p style={{ color: "var(--ink-soft)", fontSize: 16, lineHeight: 1.65 }}>
              The core retrofit programme. Each upgrade is available on new machines and as a field
              retrofit on existing installations, including machines built decades ago.
            </p>
          </div>

          <div style={svcRetro.grid}>
            <RetroLine
              code="R-01"
              title="Hot Melt System"
              body="High-precision adhesive application that replaces heating bars and mechanical cold gluing. Speed-independent, fully metered, closed-loop."
              compat="All FALU cotton swab machine models"
            />
            <RetroLine
              code="R-02"
              title="Camera-based Quality Management"
              body="Industrial camera and centralised evaluation unit inspect swabs at up to 3'000 swabs/min from a defined distance, replacing fibre-optic light guides. Detects missing heads and visible defects, with image memory for root-cause analysis."
              compat="All FALU swab machines, all swab variants incl. baby and cosmetic"
            />
            <RetroLine
              code="R-03"
              title="Belt Drive System"
              body="Replaces the lubricated primary chain with a dry-running belt. Eliminates oil and grease from the enclosure, reduces contamination risk, and lowers maintenance standstill time. Standard on new CB1 4.1."
              compat="Standard on new CB1 4.1. Retrofit available for all existing FALU swab machines."
            />
            <RetroLine
              code="R-04"
              title="Dust Extraction System"
              body="Four extraction modules remove airborne fibres and heavier particles where they are generated: cotton feeder, secondary belt, airflow housing, and a belt-and-chain blow-off."
              compat="All FALU machine models featuring a closable machine housing"
            />
          </div>

          <div style={svcRetro.banner}>
            <div>
              <div className="mono" style={{ color: "var(--falu-red)", fontSize: 11, letterSpacing: "0.18em" }}>RETROFIT PROGRAMME</div>
              <h3 style={{ marginTop: 8, color: "#fff", fontSize: 24, maxWidth: 720 }}>
                Tell us your machine and serial number. We'll tell you which upgrades fit and what they change.
              </h3>
            </div>
            <a href="#contact" className="btn btn--primary" style={{ whiteSpace: "nowrap" }}>Request a retrofit quotation<span className="arrow" /></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "96px 0", background: "var(--bg-alt)", borderTop: "1px solid var(--rule)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 48, alignItems: "center" }}>
          <h2 style={{ color: "var(--navy)", maxWidth: 720 }}>
            Already running a FALU machine, or planning your first line?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-end" }}>
            <a href="#contact" className="btn btn--primary btn--lg">Get in touch with our specialists<span className="arrow" /></a>
            <a href="mailto:sales@falu.com" className="mono" style={{ color: "var(--ink-muted)", fontSize: 12, letterSpacing: "0.06em" }}>
              sales@falu.com · +41 55 225 51 51
            </a>
          </div>
        </div>
      </section>

      <FaluFooter />
    </div>
  );
};

function RetroLine({ code, title, body, compat, status, statusTone }) {
  return (
    <div style={svcRetro.row}>
      <div style={svcRetro.left}>
        <div className="mono" style={svcRetro.code}>{code}</div>
        <div style={status ? (statusTone === "navy" ? svcRetro.statusNavy : svcRetro.status) : { display: "none" }}>{status}</div>
      </div>
      <div style={svcRetro.mid}>
        <h3 style={{ fontSize: 22, color: "var(--navy)", letterSpacing: "-0.01em" }}>{title}</h3>
        <p style={{ marginTop: 12, color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.6 }}>{body}</p>
        <div className="mono" style={svcRetro.compat}>
          <span style={{ color: "var(--falu-red)", letterSpacing: "0.18em", marginRight: 8 }}>COMPATIBILITY</span>
          {compat}
        </div>
      </div>
      <a href="#contact" className="mono" style={svcRetro.link}>DETAILS →</a>
    </div>
  );
}

const svcCrumb = {
  wrap: { background: "var(--bg-alt)", borderBottom: "1px solid var(--rule)" },
  inner: { padding: "12px var(--gutter)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-muted)", display: "flex", gap: 10 },
  link: { color: "var(--ink-soft)" },
  sep: { color: "var(--rule)" },
  current: { color: "var(--navy)", fontWeight: 600 }
};

const svc = {
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--rule)", borderLeft: "1px solid var(--rule)" },
  cell: { padding: "32px 28px 36px", borderRight: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", background: "#fff" },
  num: { fontSize: 10, color: "var(--falu-red)", letterSpacing: "0.18em", fontWeight: 500 }
};

const svcRetro = {
  grid: { border: "1px solid var(--rule)", borderBottom: "none" },
  row: { display: "grid", gridTemplateColumns: "160px 1fr auto", gap: 32, padding: "32px", borderBottom: "1px solid var(--rule)", alignItems: "start", background: "#fff" },
  left: { display: "flex", flexDirection: "column", gap: 12 },
  code: { fontSize: 13, color: "var(--falu-red)", letterSpacing: "0.16em", fontWeight: 600 },
  status: { fontSize: 9, color: "var(--ink-muted)", letterSpacing: "0.16em", fontWeight: 500, fontFamily: "var(--font-mono)", padding: "4px 8px", border: "1px solid var(--rule)", alignSelf: "start" },
  statusNavy: { fontSize: 9, color: "#fff", letterSpacing: "0.16em", fontWeight: 500, fontFamily: "var(--font-mono)", padding: "4px 8px", background: "var(--navy)", alignSelf: "start" },
  mid: {},
  compat: { marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--rule-soft)", fontSize: 11, color: "var(--ink-muted)", letterSpacing: "0.04em", lineHeight: 1.5 },
  link: { fontSize: 11, color: "var(--navy)", letterSpacing: "0.16em", textDecoration: "none", whiteSpace: "nowrap", paddingTop: 6 },
  banner: { marginTop: 48, padding: "32px 40px", background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }
};
