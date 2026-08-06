/* global React, FaluHeader, FaluFooter, SectionLabel, MachineHeroVideo */

// ============================================================
//  Generic, data-driven MACHINE DETAIL page.
//  Each machine is a data object in window.FALU_MACHINES.
//  Mirrors the CB1 / PRX template: breadcrumb, hero, features,
//  technical data, line context, CTA.
// ============================================================

window.MachineDetail = function MachineDetail({ id }) {
  const m = (window.FALU_MACHINES || {})[id];
  // Placeholder shot numbers are namespaced per machine: RB2-01, RB2-02, ...
  const imgPrefix = String(id || "").toUpperCase();

  if (!m) {
    return (
      <div style={{ background: "#fff", padding: 80, fontFamily: "var(--font-mono)", color: "var(--ink-muted)" }}>
        Unknown machine id: {id}
      </div>);
  }

  const FAMILY_HREF = {
    "Cotton Swab Machinery": "#cotton-swab-machinery",
    "Cotton Pad Machinery": "#cotton-pad-machinery",
    "Paper Stick Machinery": "#machinery"
  };
  const familyHref = FAMILY_HREF[m.family] || "#machinery";

  return (
    <div style={{ background: "#fff" }}>
      <FaluHeader active="machinery" />

      {/* Breadcrumb */}
      <div style={md.crumbWrap}>
        <div className="container" style={md.crumbInner}>
          <a href="#machinery" style={md.crumbLink}>Machinery</a>
          <span style={md.crumbSep}>/</span>
          <a href={familyHref} style={md.crumbLink}>{m.family}</a>
          <span style={md.crumbSep}>/</span>
          {/* Machines that live under an overview page, e.g. the packaging machines. */}
          {m.parent &&
          <React.Fragment>
              <a href={m.parent.href} style={md.crumbLink}>{m.parent.label}</a>
              <span style={md.crumbSep}>/</span>
            </React.Fragment>
          }
          <span style={md.crumbCurrent}>{m.code}</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{ padding: "64px 0 80px" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 64, alignItems: "center" }}>
          <div>
            <h1 style={{ fontSize: 64, lineHeight: 1.02 }}>
              {m.code}<br />
              <span style={{ color: "var(--ink-soft)", fontWeight: 500 }}>{m.name}</span>
            </h1>
            <p style={{ marginTop: 28, fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.6, maxWidth: 580 }}>
              {m.lede}
            </p>
            {m.headlineStat &&
            <div style={md.statBox}>
                <div style={md.statLabel}>{m.headlineStat.label}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 14 }}>
                  <span className="mono" style={md.statNum}>{m.headlineStat.value}</span>
                  <span className="mono" style={md.statUnit}>{m.headlineStat.unit}</span>
                </div>
              </div>
            }
            <div style={{ display: "flex", gap: 12, marginTop: 48 }}>
              <a className="btn btn--primary btn--lg" href="#contact">Request a quotation<span className="arrow" /></a>
              <a className="btn btn--ghost btn--lg" href="#contact">Download datasheet (PDF)<span className="arrow" /></a>
            </div>
          </div>
          <div>
            <MachineHeroVideo id={`${imgPrefix}-VIDEO`} src={m.heroVideo} label={`${m.code}, hero video`} />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "96px 0", borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <SectionLabel num="01">Machine features</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start", marginBottom: 56 }}>
            <h2>{m.featuresHeadline}</h2>
            <p style={{ color: "var(--ink-soft)", fontSize: 16, lineHeight: 1.65 }}>{m.featuresLede}</p>
          </div>
          <div style={md.featGrid(m.features.length)}>
            {m.features.map(([title, body], i) =>
            <div key={title} style={md.featCell}>
                <div className="mono" style={md.featNum}>F · {String(i + 1).padStart(2, "0")}</div>
                <h4 style={{ marginTop: 12, fontSize: 16 }}>{title}</h4>
                <p style={{ marginTop: 10, color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.6 }}>{body}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TECHNICAL DATA */}
      <section style={{ padding: "96px 0", background: "var(--bg-band)", borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <SectionLabel num="02">Technical data</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "end", marginBottom: 48 }}>
            <h2>Specifications.</h2>
            <p style={{ color: "var(--ink-soft)", fontSize: 16, lineHeight: 1.65 }}>{m.techLede}</p>
          </div>
          <div style={md.tableWrap}>
            {m.tech.map(([group, key, value], i, arr) => {
              const showGroup = group && (i === 0 || arr[i - 1][0] !== group);
              return (
                <div key={i} style={{ ...md.tableRow, ...(showGroup ? md.tableRowGrouped : {}) }}>
                  <div className="mono" style={md.tableGroup}>{showGroup ? group : ""}</div>
                  <div style={md.tableKey}>{key}</div>
                  <div className="mono" style={{ ...md.tableValue, color: "var(--navy)" }}>{value}</div>
                </div>);
            })}
          </div>
        </div>
      </section>

      {/* LINE CONTEXT */}
      <section style={{ padding: "112px 0", background: "var(--navy)", color: "#fff" }}>
        <div className="container">
          <SectionLabel num="03" tone="dark">Line context</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "end", marginBottom: 48, marginTop: 32 }}>
            <h2 style={{ color: "#fff", maxWidth: 760 }}>{m.lineHeadline}</h2>
            <p style={{ color: "#cfdcec", fontSize: 16, lineHeight: 1.65 }}>{m.lineLede}</p>
          </div>
          <div style={md.lineRow}>
            {m.line.map((node, i) =>
            <React.Fragment key={node.code}>
                {i > 0 && <div style={md.lineArrow}>→</div>}
                <a href={node.href || "#"} style={{ ...md.lineCol, ...(node.current ? md.lineColCurrent : {}), textDecoration: "none" }}>
                  <div className="mono" style={md.lineColHeader}>{node.stage}</div>
                  <div className="mono" style={{ ...md.lineCode, color: node.current ? "var(--falu-red)" : "#fff" }}>
                    {node.code}{!node.current && node.href ? <span style={md.lineArrowMark}> ↗</span> : null}
                  </div>
                  <div style={md.lineLabel}>{node.label}</div>
                  {node.current && <div className="mono" style={md.lineHere}>YOU ARE HERE</div>}
                </a>
              </React.Fragment>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#fff", padding: "96px 0", borderTop: "1px solid var(--rule)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 48, alignItems: "center" }}>
          <h2 style={{ color: "var(--navy)", maxWidth: 720 }}>{m.ctaHeadline}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-end" }}>
            <a href="#contact" className="btn btn--primary btn--lg">Request a quotation<span className="arrow" /></a>
            <div className="mono" style={{ color: "var(--ink-muted)", fontSize: 12, letterSpacing: "0.06em" }}>
              <a href="mailto:sales@falu.com" style={{ color: "inherit" }}>sales@falu.com</a>
              {" · "}
              <a href="tel:+41552255151" style={{ color: "inherit" }}>+41 55 225 51 51</a>
            </div>
          </div>
        </div>
      </section>

      <FaluFooter />
    </div>);
};

const md = {
  crumbWrap: { background: "var(--bg-alt)", borderBottom: "1px solid var(--rule)" },
  crumbInner: { padding: "12px var(--gutter)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-muted)", display: "flex", gap: 10 },
  crumbLink: { color: "var(--ink-soft)" },
  crumbSep: { color: "var(--rule)" },
  crumbCurrent: { color: "var(--navy)", fontWeight: 600 },

  statBox: { marginTop: 40, padding: "24px 28px", border: "1px solid var(--rule)", display: "inline-block" },
  statLabel: { fontSize: 11, color: "var(--ink-muted)", textTransform: "uppercase", letterSpacing: "0.18em", fontFamily: "var(--font-mono)" },
  statNum: { fontSize: 48, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1 },
  statUnit: { fontSize: 15, color: "var(--ink-soft)" },

  featGrid: (n) => ({ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--rule)", borderLeft: "1px solid var(--rule)" }),
  featCell: { padding: "28px 24px", borderRight: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" },
  featNum: { fontSize: 10, color: "var(--falu-red)", letterSpacing: "0.18em", fontWeight: 500 },

  tableWrap: { background: "#fff", border: "1px solid var(--rule)" },
  tableRow: { display: "grid", gridTemplateColumns: "180px 1fr 1.5fr", padding: "14px 24px", borderBottom: "1px solid var(--rule-soft)", alignItems: "center", fontSize: 14 },
  tableRowGrouped: { borderTop: "1px solid var(--rule)", paddingTop: 18 },
  tableGroup: { fontSize: 10, color: "var(--falu-red)", letterSpacing: "0.18em", fontWeight: 500 },
  tableKey: { color: "var(--ink-soft)" },
  tableValue: { fontSize: 14, fontWeight: 500 },

  lineRow: { display: "flex", alignItems: "stretch", gap: 0 },
  lineCol: { flex: 1, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.15)", padding: "28px", display: "block", color: "inherit" },
  lineColCurrent: {},
  lineColHeader: { fontSize: 10, color: "#9ab3cc", letterSpacing: "0.18em", marginBottom: 20 },
  lineCode: { fontSize: 22, color: "#fff", fontWeight: 600, letterSpacing: "-0.01em" },
  lineArrowMark: { fontSize: 12, color: "#9ab3cc", fontWeight: 400 },
  lineLabel: { color: "#fff", marginTop: 4, fontSize: 14, fontWeight: 500 },
  lineHere: { marginTop: 16, fontSize: 9, color: "var(--falu-red)", letterSpacing: "0.18em" },
  lineArrow: { display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.3)", fontSize: 24, width: 40 }
};