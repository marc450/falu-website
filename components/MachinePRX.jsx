/* global React, FaluHeader, FaluFooter, SectionLabel, ImageSlot */
const { useState: useStatePRX, useEffect: useEffectPRX } = React;

// ============================================================
// PRX, PAPER STICK PRODUCTION MACHINE, DETAIL PAGE
// Mirrors the CB1 template. Hard specs are PLACEHOLDERS until
// the PRX fact sheet is supplied. Marked [TBC] in the table.
// ============================================================

window.MachinePRX = function MachinePRX() {
  const [activeTab, setActiveTab] = useStatePRX("overview");
  const SCROLL_OFFSET = 140;

  const scrollToSection = (id) => {
    const el = document.getElementById(`prx-${id}`);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffectPRX(() => {
    const ids = ["overview", "features", "tech", "line"];
    const els = ids.map((id) => document.getElementById(`prx-${id}`)).filter(Boolean);
    if (!els.length) return;
    const onScroll = () => {
      const probe = SCROLL_OFFSET + 80;
      let current = ids[0];
      for (const el of els) {
        if (el.getBoundingClientRect().top <= probe) current = el.id.replace("prx-", "");
      }
      setActiveTab(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: "#fff" }}>
      <FaluHeader active="machinery" />

      {/* Breadcrumb */}
      <div style={prxCrumb.wrap}>
        <div className="container" style={prxCrumb.inner}>
          <a href="#machinery" style={prxCrumb.link}>Machinery</a>
          <span style={prxCrumb.sep}>/</span>
          <a href="#machinery" style={prxCrumb.link}>Paper Stick Machinery</a>
          <span style={prxCrumb.sep}>/</span>
          <span style={prxCrumb.current}>PRX</span>
        </div>
      </div>

      {/* HERO */}
      <section id="prx-overview" style={{ padding: "64px 0 80px" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <h1 style={{ fontSize: 64, lineHeight: 1.02 }}>
              PRX<br />
              <span style={{ color: "var(--ink-soft)", fontWeight: 500 }}>
                Paper stick production machine
              </span>
            </h1>
            <p style={{ marginTop: 28, fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.6, maxWidth: 580 }}>Fully automatic production of biodegradable, compostable paper sticks. Runs as a standalone stick line, or feeds a FALU cotton swab machine inline, removing the carton and the operator who loads it from the process entirely.



            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 48 }}>
              <a className="btn btn--primary btn--lg" href="#contact">Request a quotation<span className="arrow" /></a>
              <a className="btn btn--ghost btn--lg" href="#contact">Download datasheet (PDF)<span className="arrow" /></a>
            </div>
          </div>
          <div>
            <ImageSlot label="PRX, full unit, side view" ratio="4 / 5" />
            <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
              <ImageSlot label="Forming head" ratio="1 / 1" />
              <ImageSlot label="Paper infeed" ratio="1 / 1" />
              <ImageSlot label="Drying & buffer" ratio="1 / 1" />
            </div>
          </div>
        </div>
      </section>

      {/* STICKY SUB-NAV */}
      <div style={prxSubnav.wrap}>
        <div className="container" style={prxSubnav.inner}>
          {[
          ["overview", "Overview"],
          ["features", "Features"],
          ["tech", "Technical data"],
          ["line", "Line integration"]].
          map(([id, label]) =>
          <button
            key={id}
            onClick={() => {setActiveTab(id);scrollToSection(id);}}
            style={{
              ...prxSubnav.tab,
              color: activeTab === id ? "var(--falu-red)" : "var(--navy)",
              borderBottomColor: activeTab === id ? "var(--falu-red)" : "transparent"
            }}>
            {label}
          </button>
          )}
          <span style={{ flex: 1 }} />
        </div>
      </div>

      {/* FEATURES */}
      <section id="prx-features" style={{ padding: "96px 0", borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <SectionLabel num="01">Machine features</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start", marginBottom: 56 }}>
            <h2>From conditioned paper<br />to finished sticks.</h2>
            <p style={{ color: "var(--ink-soft)", fontSize: 16, lineHeight: 1.65 }}>
              The PRX runs forming, drying, buffering and packing as one integrated system. It can
              supply other downstream processes, or sit directly upstream of a FALU swab machine so
              finished sticks never have to be cartoned, shipped or hand-loaded.
            </p>
          </div>

          <div style={prxFeatures.grid}>
            {[
            ["Virtually zero paper waste", "FALU's uniquely optimised forming process makes the PRX the only paper stick machine on the market that produces virtually zero paper waste."],
            ["Biodegradable & compostable", "Produces biodegradable, compostable paper sticks for cotton swabs, cosmetic and safety (baby) swabs, and lollipops."],
            ["Standalone or integrated", "Operates as a stand-alone stick line, or connects directly to FALU CT and CB series swab machines for fully automated stick supply."],
            ["Eliminates manual loading", "Produces, buffers and feeds sticks directly to the swab machine, removing manual carton loading and the operator errors that come with it."],
            ["Integrated buffer", "A buffer of 75'000 sticks harmonises stick and swab line speeds, around 30 minutes of swab production at 2'800/min."],
            ["Forming, drying, buffering, packing", "Conditioned paper is shaped, dried to remove excess humidity, buffered, then packed or fed onward, all in one machine."]].
            map(([title, body], i) =>
            <div key={title} style={prxFeatures.cell}>
              <div className="mono" style={prxFeatures.num}>F · {String(i + 1).padStart(2, "0")}</div>
              <h4 style={{ marginTop: 12, fontSize: 16 }}>{title}</h4>
              <p style={{ marginTop: 10, color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.6 }}>{body}</p>
            </div>
            )}
          </div>
        </div>
      </section>

      {/* TECHNICAL DATA */}
      <section id="prx-tech" style={{ padding: "96px 0", background: "var(--bg-band)", borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <SectionLabel num="02">Technical data</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "end", marginBottom: 48 }}>
            <h2>Specifications.</h2>
            <p style={{ color: "var(--ink-soft)", fontSize: 16, lineHeight: 1.65 }}>Layout dimensions vary by configuration, FALU provides a layout plan on request based on your production requirements and available space.


            </p>
          </div>

          <div style={prxTable.wrap}>
            {[
            ["OUTPUT", "Production speed", "Up to 3'000 sticks/min"],
            ["", "Operating mode", "Standalone or integrated with CT / CB swab machines"],
            ["BUFFER", "Capacity", "75'000 sticks"],
            ["", "Equivalent runtime", "~30 min of swab production at 2'800/min"],
            ["PAPER ROLL", "Roll diameter", "max. 1'100 mm (including core)"],
            ["", "Roll width", "max. 900 mm"],
            ["STICK CARTON", "Dimensions (standalone)", "230 × 80 × 800 mm"],
            ["", "Carton capacity", "~30'000 paper sticks"],
            ["", "Filling time", "up to 5 min, including handling"],
            ["DIMENSIONS", "Layout", "Configurable, layout plan on request"],
            ["ELECTRICAL", "Voltage", "400 V / 50 Hz (transformer required for other voltages)"],
            ["", "Control system", "PLC controlled electrical system"],
            ["CERTIFICATION", "Compliance", "CE certified, European machinery safety standards"],
            ["DELIVERY", "Tooling", "Complete standard tooling for one stick configuration"],
            ["", "Documentation", "Instruction manual and spare parts documentation"]].
            map(([group, key, value], i, arr) => {
              const showGroup = group && (i === 0 || arr[i - 1][0] !== group);
              return (
                <div key={i} style={{ ...prxTable.row, ...(showGroup ? prxTable.rowGrouped : {}) }}>
                  <div className="mono" style={prxTable.group}>{showGroup ? group : ""}</div>
                  <div style={prxTable.key}>{key}</div>
                  <div className="mono" style={{ ...prxTable.value, color: "var(--navy)" }}>{value}</div>
                </div>);
            })}
          </div>
        </div>
      </section>

      {/* LINE INTEGRATION */}
      <section id="prx-line" style={{ padding: "112px 0", background: "var(--navy)", color: "#fff" }}>
        <div className="container">
          <SectionLabel num="03" tone="dark">Line integration</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "end", marginBottom: 48, marginTop: 32 }}>
            <h2 style={{ color: "#fff", maxWidth: 720 }}>The PRX is the first stage of a complete swab line.</h2>
            <p style={{ color: "#cfdcec", fontSize: 16, lineHeight: 1.65 }}>Sticks can be fed straight into CB or CT swab machine stick magazines. Click a downstream machine to see its product page.


            </p>
          </div>

          <div style={prxLine.wrap}>
            <div style={prxLine.col}>
              <div className="mono" style={prxLine.colHeader}>01 · STICK PRODUCTION</div>
              <div style={{ ...prxLine.machine, ...prxLine.featured }}>
                <div className="mono" style={{ ...prxLine.code, color: "var(--falu-red)" }}>PRX</div>
                <div style={prxLine.label}>Paper stick production</div>
                <p style={prxLine.note}>Forms paper sticks from conditioned paper and feeds the swab machine magazine directly.</p>
                <div className="mono" style={prxLine.here}>YOU ARE HERE</div>
              </div>
            </div>
            <div style={prxLine.arrow}>→</div>
            <div style={prxLine.col}>
              <div className="mono" style={prxLine.colHeader}>02 · SWAB PRODUCTION</div>
              <a href="#cb1" style={prxLine.link}>
                <div style={prxLine.machine}>
                  <div className="mono" style={prxLine.code}>CB1 4.1 <span style={prxLine.linkArrow}>↗</span></div>
                  <div style={prxLine.label}>Cotton swab forming</div>
                  <p style={prxLine.note}>Forms swabs from cotton string and the applicator sticks at up to 3'100/min.</p>
                </div>
              </a>
            </div>
            <div style={prxLine.arrow}>→</div>
            <div style={prxLine.col}>
              <div className="mono" style={prxLine.colHeader}>03 · PACKING · 6 MACHINES</div>
              <div style={prxLine.list}>
                {[
                ["SV-2X", "Cardboard boxes", "#sv2x"],
                ["BV-2M", "Polybag (semi-auto)", "#polybag"],
                ["ABS-2", "Polybag (auto)", "#polybag"],
                ["RB-30A", "Round boxes", "#rb30a"],
                ["SQB-2A", "Square boxes", "#sqb2a"],
                ["BL-12", "Blister packaging", "#bl12"]].
                map(([code, l, href]) =>
                <a key={code} href={href} style={prxLine.row}>
                  <span className="mono" style={{ color: "#fff", fontWeight: 600 }}>{code} <span style={prxLine.linkArrow}>↗</span></span>
                  <span style={{ color: "#cfdcec", fontSize: 13 }}>{l}</span>
                </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#fff", padding: "96px 0", borderTop: "1px solid var(--rule)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 48, alignItems: "center" }}>
          <h2 style={{ color: "var(--navy)", maxWidth: 720 }}>
            Planning a swab line, or adding stick production to an existing one?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-end" }}>
            <a href="#contact" className="btn btn--primary btn--lg">Request a quotation<span className="arrow" /></a>
            <a href="mailto:sales@falu.com" className="mono" style={{ color: "var(--ink-muted)", fontSize: 12, letterSpacing: "0.06em" }}>
              sales@falu.com · +41 55 225 51 51
            </a>
          </div>
        </div>
      </section>

      <FaluFooter />
    </div>);
};

// ============ STYLES ============
const prxCrumb = {
  wrap: { background: "var(--bg-alt)", borderBottom: "1px solid var(--rule)" },
  inner: { padding: "12px var(--gutter)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-muted)", display: "flex", gap: 10 },
  link: { color: "var(--ink-soft)" },
  sep: { color: "var(--rule)" },
  current: { color: "var(--navy)", fontWeight: 600 }
};

const prxSubnav = {
  wrap: { borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", background: "#fff", position: "sticky", top: 84, zIndex: 40 },
  inner: { display: "flex", alignItems: "center", gap: 4, height: 56 },
  tab: { background: "transparent", border: "none", borderBottom: "2px solid transparent", padding: "0 18px", height: "100%", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, cursor: "pointer", letterSpacing: "-0.005em" }
};

const prxFeatures = {
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--rule)", borderLeft: "1px solid var(--rule)" },
  cell: { padding: "28px 24px", borderRight: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" },
  num: { fontSize: 10, color: "var(--falu-red)", letterSpacing: "0.18em", fontWeight: 500 }
};

const prxTable = {
  wrap: { background: "#fff", border: "1px solid var(--rule)" },
  row: { display: "grid", gridTemplateColumns: "180px 1fr 1.5fr", padding: "14px 24px", borderBottom: "1px solid var(--rule-soft)", alignItems: "center", fontSize: 14 },
  rowGrouped: { borderTop: "1px solid var(--rule)", paddingTop: 18 },
  group: { fontSize: 10, color: "var(--falu-red)", letterSpacing: "0.18em", fontWeight: 500 },
  key: { color: "var(--ink-soft)" },
  value: { fontSize: 14, fontWeight: 500 }
};

const prxLine = {
  wrap: { display: "grid", gridTemplateColumns: "1fr 24px 1fr 24px 1.4fr", gap: 0, alignItems: "stretch" },
  col: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.15)", padding: "28px" },
  colHeader: { fontSize: 10, color: "#9ab3cc", letterSpacing: "0.18em", marginBottom: 20 },
  arrow: { display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.3)", fontSize: 24 },
  link: { display: "block", textDecoration: "none", color: "inherit" },
  machine: { padding: "20px 0" },
  featured: { borderTop: "3px solid var(--falu-red)", paddingTop: 16 },
  code: { fontSize: 22, color: "#fff", fontWeight: 600, letterSpacing: "-0.01em", display: "flex", alignItems: "baseline", gap: 6 },
  label: { color: "#fff", marginTop: 4, fontSize: 14, fontWeight: 500 },
  note: { marginTop: 12, color: "#9ab3cc", fontSize: 13, lineHeight: 1.55 },
  here: { marginTop: 16, fontSize: 9, color: "var(--falu-red)", letterSpacing: "0.18em" },
  list: { display: "flex", flexDirection: "column" },
  row: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: 13, textDecoration: "none" },
  linkArrow: { fontSize: 12, color: "#9ab3cc", fontWeight: 400 }
};