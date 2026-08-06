/* global React, FaluHeader, FaluFooter, SectionLabel, ImageSlot */

// ============================================================
//  /machinery/cotton-swab-machinery/packing
//  Overview of all cotton swab packaging machines. Each card links
//  to its machine detail page. Format-led, scannable.
// ============================================================
window.PackingMachines = function PackingMachines() {
  const machines = [
  {
    code: "SV-2X",
    name: "Cardboard box packaging",
    desc: "Fully automatic cardboard box packaging. Erects, fills, closes and seals flat cartons, replacing plastic packaging with cardboard.",
    automation: ["full"],
    href: "#sv2x",
    img: "SV-2X cardboard box packaging machine"
  },
  {
    code: "BV-2M / ABS-2",
    name: "Polybag packaging",
    desc: "Semi-automatic (BV-2M) or fully automatic (ABS-2) polybag packaging. Polyethylene or paper bags, optional zipper-lock closure.",
    automation: ["semi", "full"],
    href: "#polybag",
    img: "ABS-2 polybag packaging machine"
  },
  {
    code: "RB-30A",
    name: "Round box packaging",
    desc: "Fully automatic round box filling. Dispenses boxes, fills a predefined swab count, and closes them with their lids.",
    automation: ["full"],
    href: "#rb30a",
    img: "RB-30A round box packaging machine"
  },
  {
    code: "SQB-2A",
    name: "Square box packaging",
    desc: "Fully automatic square box packaging. Erects, fills and closes square folding cartons for retail distribution.",
    automation: ["full"],
    href: "#sqb2a",
    img: "SQB-2A square box packaging machine"
  },
  {
    code: "BL-12",
    name: "Blister packaging",
    desc: "Fully automatic blister packaging. Thermoforms cavities, fills a counted set of swabs, and seals with card or foil for tamper-evident packs.",
    automation: ["full"],
    href: "#bl12",
    img: "BL-12 blister packaging machine"
  }];

  const automationLabel = { full: "Fully automatic", semi: "Semi-automatic" };


  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <FaluHeader active="machinery" />

      {/* Breadcrumb */}
      <div style={{ background: "var(--bg-alt)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container" style={{ padding: "12px var(--gutter)" }}>
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-muted)", letterSpacing: "0.14em" }}>
            <a href="#home" style={{ color: "inherit", textDecoration: "none" }}>HOME</a>
            <span style={{ margin: "0 10px", opacity: 0.4 }}>/</span>
            <a href="#machinery" style={{ color: "inherit", textDecoration: "none" }}>MACHINERY</a>
            <span style={{ margin: "0 10px", opacity: 0.4 }}>/</span>
            <a href="#cotton-swab-machinery" style={{ color: "inherit", textDecoration: "none" }}>COTTON SWAB MACHINERY</a>
            <span style={{ margin: "0 10px", opacity: 0.4 }}>/</span>
            <span style={{ color: "var(--navy)" }}>PACKAGING</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section style={{ padding: "112px 0 88px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 80, alignItems: "end" }}>
            <h1 style={{ fontSize: 80, lineHeight: 0.98, letterSpacing: "-0.035em", color: "var(--navy)" }}>
              Swab packaging machines.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ink-soft)" }}>Six packaging machines across five formats combine with cotton swab production to match any retail or bulk format. Each one connects to FALU CB and CT swab lines.


            </p>
          </div>
        </div>
      </section>

      {/* MACHINE LIST */}
      <section style={{ padding: "0 0 96px", background: "var(--bg-band)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container" style={{ paddingTop: 80 }}>
          <SectionLabel num="01">Six packaging machines</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 48 }}>
            {machines.map((m, i) =>
            <a key={m.code} href={m.href} style={pack.card}>
                <ImageSlot id={`PACK-0${i + 1}`} label={m.img} ratio="16 / 9" />
                <div style={pack.body}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                    <div className="mono" style={pack.code}>{m.code}</div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {m.automation.map((a) =>
                      <span key={a} className="mono" style={pack.pill}>{automationLabel[a]}</span>
                      )}
                    </div>
                  </div>
                  <h3 style={{ fontSize: 24, marginTop: 10, lineHeight: 1.15, letterSpacing: "-0.015em", color: "var(--navy)" }}>{m.name}</h3>
                  <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)", flex: 1 }}>{m.desc}</p>
                </div>
              </a>
            )}

            {/* Round table packaging card */}
            <div style={pack.card}>
              <ImageSlot id="PACK-06" label="Round table semi-automatic packaging" ratio="16 / 9" />
              <div style={pack.body}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <div className="mono" style={pack.code}>ROUND TABLE</div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    <span className="mono" style={pack.pill}>Semi-automatic</span>
                  </div>
                </div>
                <h3 style={{ fontSize: 24, marginTop: 10, lineHeight: 1.15, letterSpacing: "-0.015em", color: "var(--navy)" }}>Round table packaging</h3>
                <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)", flex: 1 }}>
                  The swab machine places finished swabs onto a rotating round table. Factory workers
                  pick them up and place them into the container by hand. Lower investment, full
                  format flexibility for low to mid volumes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIAL SOLUTIONS */}
      <section style={{ padding: "96px 0 0" }}>
        <div className="container">
          <SectionLabel num="02">Beyond the standard formats</SectionLabel>
          <h2 style={{ fontSize: 44, lineHeight: 1.1, letterSpacing: "-0.025em", color: "var(--navy)", marginTop: 32, marginBottom: 20, maxWidth: 760 }}>
            Special and custom formats.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--ink-soft)", maxWidth: 760 }}>
            Two further packaging options are available in combination with the cotton swab machines, and additional formats can be developed on request.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginTop: 48 }}>
            <div style={pack.ghost}>
              <div className="mono" style={pack.ghostLabel}>SPECIAL FORMAT</div>
              <h3 style={pack.ghostTitle}>Flip-top boxes</h3>
              <p style={pack.ghostDesc}>Hinged-lid retail box packaging, available in combination with FALU cotton swab machines.</p>
            </div>
            <div style={pack.ghost}>
              <div className="mono" style={pack.ghostLabel}>SPECIAL FORMAT</div>
              <h3 style={pack.ghostTitle}>Flow packs</h3>
              <p style={pack.ghostDesc}>Horizontal flow-wrap packaging for individual swabs or counted multipacks.</p>
            </div>
            <a href="#contact" style={pack.ghostCta}>
              <div className="mono" style={pack.ghostLabel}>CUSTOM SOLUTION</div>
              <h3 style={pack.ghostTitle}>Tell us your requirements</h3>
              <p style={pack.ghostDesc}>Further packaging solutions are developed on request. Get in touch to discuss your specific format.</p>
              <span style={pack.ghostArrow}>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "96px 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 48, alignItems: "center" }}>
          <h2 style={{ color: "var(--navy)", maxWidth: 720 }}>
            Not sure which format fits your market? We will help you choose.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-end" }}>
            <a href="#contact" className="btn btn--primary btn--lg">Get in touch with our specialists<span className="arrow" /></a>
          </div>
        </div>
      </section>

      <FaluFooter />
    </div>);
};

const pack = {
  card: { display: "flex", flexDirection: "column", background: "#fff", border: "1px solid var(--rule)", textDecoration: "none", color: "inherit" },
  body: { padding: "28px 28px 24px", display: "flex", flexDirection: "column", flex: 1 },
  code: { fontSize: 13, color: "var(--falu-red)", letterSpacing: "0.1em", fontWeight: 600 },
  pill: { fontSize: 10, color: "var(--navy)", background: "var(--bg-alt)", letterSpacing: "0.12em", textTransform: "uppercase", padding: "5px 10px", borderRadius: 999, fontWeight: 600, whiteSpace: "nowrap" },
  foot: { marginTop: 22, paddingTop: 18, borderTop: "1px solid var(--rule)", display: "flex", justifyContent: "flex-end", alignItems: "center" },
  ghost: { padding: "32px 28px", background: "#fff", border: "1px dashed var(--rule)", display: "flex", flexDirection: "column" },
  ghostCta: { padding: "32px 28px", background: "#fff", border: "1px solid var(--navy)", display: "flex", flexDirection: "column", textDecoration: "none", color: "inherit", position: "relative" },
  ghostLabel: { fontSize: 10, color: "var(--ink-muted)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 14 },
  ghostTitle: { fontSize: 22, lineHeight: 1.2, letterSpacing: "-0.015em", color: "var(--navy)" },
  ghostDesc: { marginTop: 12, fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)", flex: 1 },
  ghostArrow: { position: "absolute", right: 28, bottom: 24, color: "var(--falu-red)", fontSize: 20, fontWeight: 600 }
};