/* global React, FaluHeader, FaluFooter, SectionLabel, ImageSlot */

// ============================================================
//  /machinery/cotton-pad-machinery
//  Family overview. Mirrors cotton-swab template: process blocks
//  (pad production -> packing), complete line, benefits.
// ============================================================
window.CottonPadMachinery = function CottonPadMachinery() {
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
            <span style={{ color: "var(--navy)" }}>COTTON PAD MACHINERY</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section style={{ padding: "112px 0 88px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 80, alignItems: "end" }}>
            <h1 style={{ fontSize: 80, lineHeight: 0.98, letterSpacing: "-0.035em", color: "var(--navy)" }}>
              Cotton pad machinery.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ink-soft)" }}>
              FALU manufactures machinery for the industrial production of cosmetic cotton pads.
              Two production capacities, plus an automated packing line, run standalone or as a
              complete inline system.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS BLOCKS */}
      <section style={{ padding: "0 0 96px", background: "var(--bg-band)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container" style={{ paddingTop: 80 }}>
          <SectionLabel num="01">Production process</SectionLabel>
          <div style={{ marginTop: 32, marginBottom: 64 }}>
            <h2 style={{ fontSize: 48, lineHeight: 1.05, letterSpacing: "-0.025em", color: "var(--navy)" }}>
              Two connected steps.<br />Run together, or independently.
            </h2>
          </div>

          <div style={{ position: "relative" }}>
            <PadBlock
              num="01"
              title="Cotton pad production"
              body="Cotton pads are formed and cut from raw cotton. FALU offers three machines: the compact WR-600 V and high-volume WR-2100 S form round and oval pads from a web, while the VP-2 stamps square and rectangular pads from a roll without waste."
              image="WR-2100 cotton pad production machine"
              links={[
              ["WR-2100 S", "Round / oval\n2'100 pcs/min", "#wr2100"],
              ["WR-600 V", "Round / oval\n600 pcs/min", "#wr600"],
              ["VP-2", "Square / rectangle\n1'000 pcs/min", "#vp2"]]
              } />

            <PadConnector />
            <PadBlock
              num="02"
              title="Packing"
              body="The RB-2 fills polybags or paper bags with cotton pads, fully automatically. It connects to the WR-2100 S interface and receives pads via metal cassettes that stack them flawlessly, then pushes them through packaging molds into bags. Filled bags pass to the sealing unit and are closed by heat stamp. Up to 52 bags per minute, typically 50 to 120 pads per bag."
              image="RB-2 cotton pad polybag packing machine"
              links={[
              ["RB-2", "Polybag & paper bag", "#rb2"]]
              } />
          </div>

          <div style={{ marginTop: 64, paddingTop: 40, borderTop: "1px solid var(--rule)", textAlign: "center" }}>
            <p className="mono" style={{ fontSize: 12, color: "var(--ink-muted)", letterSpacing: "0.16em" }}>
              EACH STEP CAN BE IMPLEMENTED INDIVIDUALLY WITH EXISTING MACHINERY OR COMBINED INTO A COMPLETE PRODUCTION LINE
            </p>
          </div>
        </div>
      </section>

      {/* COMPLETE LINE */}
      <section style={{ padding: "112px 0", background: "var(--navy)", color: "#fff" }}>
        <div className="container">
          <SectionLabel num="02" tone="dark">The complete line</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "end", marginBottom: 48, marginTop: 32 }}>
            <h2 style={{ color: "#fff", maxWidth: 760, fontSize: 44, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Pad production and packing as one inline FALU line.
            </h2>
            <p style={{ color: "#cfdcec", fontSize: 16, lineHeight: 1.65 }}>
              Production and packing, engineered and serviced by FALU. Click any model below to
              see its product page.
            </p>
          </div>

          <div style={{ marginBottom: 32, border: "1px solid rgba(255,255,255,0.15)" }}>
            <ImageSlot label="Complete WR-2100 S + RB-2 pad line, video walkthrough" ratio="16 / 9" dark />
          </div>

          <div style={padLine.wrap}>
            <div style={padLine.col}>
              <div className="mono" style={padLine.colHeader}>01 · PAD PRODUCTION</div>
              <div style={padLine.list}>
                {[
                ["WR-2100 S", "Round / oval · 2'100 pcs/min", "#wr2100"],
                ["WR-600 V", "Round / oval · 600 pcs/min", "#wr600"],
                ["VP-2", "Square / rectangle · 1'000 pcs/min", "#vp2"]].
                map(([code, label, href]) =>
                <a key={code} href={href} style={padLine.row}>
                  <span className="mono" style={{ color: "#fff", fontWeight: 600 }}>{code} <span style={padLine.linkArrow}>↗</span></span>
                  <span style={{ color: "#cfdcec", fontSize: 13 }}>{label}</span>
                </a>
                )}
              </div>
            </div>
            <div style={padLine.arrow}>→</div>
            <div style={padLine.col}>
              <div className="mono" style={padLine.colHeader}>02 · PACKING</div>
              <a href="#rb2" style={padLine.link}>
                <div style={padLine.machine}>
                  <div className="mono" style={padLine.code}>RB-2 <span style={padLine.linkArrow}>↗</span></div>
                  <div style={padLine.label}>Polybag &amp; paper bag packing</div>
                  <p style={padLine.note}>Fills and heat-seals bags at up to 52 per minute, connected to the WR-series interface.</p>
                </div>
              </a>
            </div>
          </div>

          <div style={padBenefits.wrap}>
            <h2 style={padBenefits.label}>Why a complete FALU line.</h2>
            <div style={padBenefits.grid}>
              {[
                ["Continuous inline flow", "Pads pass straight from the WR-2100 S into the RB-2 packer via metal cassettes, with no manual transfer between production and packing."],
                ["One supplier, one contract", "Production and packing engineered to work together, commissioned and serviced by FALU from Rüti."],
                ["Scales with demand", "Start with the WR-600 V and move to the WR-2100 S, or add the RB-2 packer to an existing WR machine as volume grows."]
              ].map(([t, b]) => (
                <div key={t} style={padBenefits.benefit}>
                  <h4 style={padBenefits.benefitTitle}>{t}</h4>
                  <p style={padBenefits.benefitBody}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaluFooter />
    </div>);
};

const padLine = {
  wrap: { display: "grid", gridTemplateColumns: "1fr 24px 1fr", gap: 0, alignItems: "stretch" },
  col: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.15)", padding: "28px" },
  colHeader: { fontSize: 10, color: "#9ab3cc", letterSpacing: "0.18em", marginBottom: 20 },
  arrow: { display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.3)", fontSize: 24 },
  link: { display: "block", textDecoration: "none", color: "inherit" },
  machine: { padding: "20px 0" },
  featured: { borderTop: "3px solid var(--falu-red)", paddingTop: 16 },
  code: { fontSize: 22, color: "#fff", fontWeight: 600, letterSpacing: "-0.01em", display: "flex", alignItems: "baseline", gap: 6 },
  label: { color: "#fff", marginTop: 4, fontSize: 14, fontWeight: 500 },
  note: { marginTop: 12, color: "#9ab3cc", fontSize: 13, lineHeight: 1.55 },
  linkArrow: { fontSize: 12, color: "#9ab3cc", fontWeight: 400 },
  list: { display: "flex", flexDirection: "column" },
  row: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: 13, textDecoration: "none" }
};

const padBenefits = {
  wrap: { marginTop: 64, paddingTop: 48, borderTop: "1px solid rgba(255,255,255,0.15)" },
  label: { fontSize: 44, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#fff", maxWidth: 760, marginTop: 0, marginBottom: 32 },
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 },
  benefit: { paddingTop: 20, borderTop: "2px solid var(--falu-red)" },
  benefitTitle: { color: "#fff", fontSize: 16, fontWeight: 600, lineHeight: 1.3, marginBottom: 12 },
  benefitBody: { color: "#9ab3cc", fontSize: 13, lineHeight: 1.6 }
};

function PadBlock({ num, title, body, image, links, flipped }) {
  const left =
  <div style={{ padding: "48px 48px" }}>
      <div className="mono" style={{ fontSize: 11, color: "var(--falu-red)", letterSpacing: "0.2em", marginBottom: 16 }}>
        STEP · {num}
      </div>
      <h3 style={{ fontSize: 32, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--navy)" }}>
        {title}
      </h3>
      <div style={{ marginTop: 20, fontSize: 15, lineHeight: 1.65, color: "var(--ink-soft)" }}>
        {body}
      </div>
      <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid var(--rule)", display: "flex", flexWrap: "wrap", gap: 14 }}>
        {links.map(([code, sub, href]) =>
        <a key={code} href={href} style={{ flex: "1 1 0", minWidth: 160, display: "flex", flexDirection: "column", gap: 4, padding: "16px 20px", border: "1px solid var(--rule)", borderLeft: "3px solid var(--falu-red)", background: "#fff", textDecoration: "none", transition: "background 120ms ease" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
            <span className="mono" style={{ fontSize: 15, fontWeight: 600, color: "var(--navy)", letterSpacing: "-0.01em" }}>{code}</span>
            <span className="mono" style={{ fontSize: 12, color: "var(--falu-red)", fontWeight: 600 }}>→</span>
          </div>
          <span style={{ fontSize: 13, color: "var(--ink-soft)", whiteSpace: "pre-line", lineHeight: 1.45 }}>{sub}</span>
        </a>
        )}
      </div>
    </div>;

  const right = <ImageSlot label={image} height="100%" />;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: "#fff", border: "1px solid var(--rule)", alignItems: "stretch" }}>
      {flipped ? <>{right}{left}</> : <>{left}{right}</>}
    </div>);
}

function PadConnector() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px 0" }}>
      <div style={{ width: 0, height: 0, borderLeft: "32px solid transparent", borderRight: "32px solid transparent", borderTop: "20px solid rgba(236, 28, 36, 0.28)" }} />
    </div>);
}
