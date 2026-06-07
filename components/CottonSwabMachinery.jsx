/* global React, FaluHeader, FaluFooter, SectionLabel, ImageSlot */

// ============================================================
//  /machinery/cotton-swab-machinery
//  Built from wireframe: hero, vertically stacked process blocks
//  (paper stick → swab → packing), tiny CTA. No bottom navy CTA.
// ============================================================
window.CottonSwabMachinery = function CottonSwabMachinery() {
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
            <span style={{ color: "var(--navy)" }}>COTTON SWAB MACHINERY</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section style={{ padding: "112px 0 88px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 80, alignItems: "end" }}>
            <h1 style={{ fontSize: 80, lineHeight: 0.98, letterSpacing: "-0.035em", color: "var(--navy)" }}>
              Cotton swab machinery.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ink-soft)" }}>FALU designs and manufactures machinery for the industrial production of cotton swabs. Our machines
can be implemented as complete production lines or
as individual machines into existing lines.

            </p>
          </div>
        </div>
      </section>

      {/* PROCESS BLOCKS — vertically stacked */}
      <section style={{ padding: "0 0 96px", background: "var(--bg-band)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container" style={{ paddingTop: 80 }}>
          <SectionLabel num="01">Production process</SectionLabel>
          <h2 style={{ fontSize: 48, lineHeight: 1.05, letterSpacing: "-0.025em", color: "var(--navy)", marginTop: 32, marginBottom: 64 }}>
            Three connected steps.<br />Run together, or independently.
          </h2>

          {/* Vertical process stack */}
          <div style={{ position: "relative" }}>
            <ProcessBlock
              num="01"
              title="Paper stick production"
              body="The PRX produces paper sticks in-house and feeds them directly into the cotton swab machine, significantly simplifying production logistics and cutting out supplier dependencies."
              note="The CB1 also accepts paper or plastic sticks from external suppliers, so the PRX is only needed if you want to bring stick production in-house and increase production efficiency."
              image="PRX paper stick winder, full unit"
              links={[
              ["See our paper stick production machine", "#prx"]]
              } />

            <ProcessConnector />
            <ProcessBlock
              num="02"
              title="Cotton swab production"
              body="Cotton is applied to the sticks to form the finished swab. The cotton swab machine runs with both paper and plastic sticks, from a FALU paper stick machine or from any other supplier, so it works on its own in an existing line. It also integrates seamlessly with all FALU packing machines for a continuous, efficient flow."
              image="CB1 4.1 cotton swab production machine"
              links={[
              ["See our cotton swab production machine", "#cb1"]]
              }
              flipped />

            <ProcessConnector />
            <ProcessBlock
              num="03"
              title="Packing"
              body="Finished swabs are packed either semi-automatically (auto-sorted, hand-placed) or fully automatically (sorted, filled and closed without manual intervention). Five formats supported, cardboard box, polybag, round box, square box, and blister."
              image="Packing line, multiple format options"
              links={[
              ["See all packing machines", "#packing"]]
              } />
          </div>

          {/* Closer */}
          <div style={{ marginTop: 64, paddingTop: 40, borderTop: "1px solid var(--rule)", textAlign: "center" }}>
            <p className="mono" style={{ fontSize: 12, color: "var(--ink-muted)", letterSpacing: "0.16em" }}>EACH STEP CAN BE IMPLEMENTED INDIVIDUALLY WITH EXISTING MACHINERY OR COMBINED INTO A COMPLETE PRODUCTION LINE

            </p>
          </div>
        </div>
      </section>

      {/* COMPLETE PRODUCTION LINE */}
      <section style={{ padding: "112px 0", background: "var(--navy)", color: "#fff" }}>
        <div className="container">
          <SectionLabel num="02" tone="dark">The complete line</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "end", marginBottom: 48, marginTop: 32 }}>
            <h2 style={{ color: "#fff", maxWidth: 760, fontSize: 44, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              The three steps as one inline FALU line.
            </h2>
            <p style={{ color: "#cfdcec", fontSize: 16, lineHeight: 1.65 }}>
              Stick winding, swab forming and packing, all engineered and serviced by FALU.
              Click any model below to see its product page.
            </p>
          </div>

          <div style={{ marginBottom: 32, border: "1px solid rgba(255,255,255,0.15)" }}>
            <ImageSlot label="Complete CB1 production line, video walkthrough" ratio="16 / 9" dark />
          </div>

          <div style={lineRow.wrap}>
            <div style={lineRow.col}>
              <div className="mono" style={lineRow.colHeader}>01 · STICK PRODUCTION</div>
              <a href="#prx" style={lineRow.link}>
                <div style={lineRow.machine}>
                  <div className="mono" style={lineRow.code}>PRX <span style={lineRow.linkArrow}>↗</span></div>
                  <div style={lineRow.label}>Paper stick production</div>
                  <p style={lineRow.note}>Wound paper sticks fed directly into the CB1 stick magazine.</p>
                </div>
              </a>
            </div>
            <div style={lineRow.arrow}>→</div>
            <div style={lineRow.col}>
              <div className="mono" style={lineRow.colHeader}>02 · SWAB PRODUCTION</div>
              <a href="#cb1" style={lineRow.link}>
                <div style={lineRow.machine}>
                  <div className="mono" style={lineRow.code}>CB1 4.1 <span style={lineRow.linkArrow}>↗</span></div>
                  <div style={lineRow.label}>Cotton swab production</div>
                  <p style={lineRow.note}>Forms swabs from cotton string and applicator sticks at up to 3'100/min.</p>
                </div>
              </a>
            </div>
            <div style={lineRow.arrow}>→</div>
            <div style={lineRow.col}>
              <div className="mono" style={lineRow.colHeader}>03 · PACKING · 5 FORMATS</div>
              <div style={lineRow.list}>
                {[
                ["SV-2X", "Cardboard box packing"],
                ["BV/ABS", "Polybag packing"],
                ["RB-30A", "Round box packing"],
                ["SQB-2A", "Square box packing"],
                ["BL-12", "Blister packing"]].
                map(([code, label]) =>
                <a key={code} href={{ "SV-2X": "#sv2x", "BV/ABS": "#polybag", "RB-30A": "#rb30a", "SQB-2A": "#sqb2a", "BL-12": "#bl12" }[code] || "#sv2x"} style={lineRow.row}>
                    <span className="mono" style={{ color: "#fff", fontWeight: 600 }}>{code} <span style={lineRow.linkArrow}>↗</span></span>
                    <span style={{ color: "#cfdcec", fontSize: 13 }}>{label}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
          {/* WHY A COMPLETE FALU LINE — benefits */}
          <div style={lineBenefits.wrap}>
            <div className="mono" style={lineBenefits.label}>WHY A COMPLETE FALU LINE</div>
            <p style={lineBenefits.lede}>
              When the PRX feeds sticks directly into the CB1, the cardboard box and the operator who handles it disappear from the process. The result is a measurably better business case, less standstill, lower material cost, less waste.
            </p>
            <div style={lineBenefits.grid}>
              {[
              ["Less standstill, more output", "The CB1 is fed continuously. The line never stops because an operator failed to top up the stick magazine in time, and never stalls on a fragile box-onto-machine refill."],
              ["Lower material cost", "No finished sticks need to be purchased from a third party. The line produces its own sticks at the cost of raw paper, on the same factory floor."],
              ["Less material waste", "Sticks no longer have to survive shipping in cardboard boxes and a manual transfer onto the machine. The hand-off losses common in that step disappear entirely."],
              ["Less manual labour", "Operators no longer load sticks. No more cardboard handling, no more box-onto-magazine refills, freeing labour for line supervision and quality work."],
              ["Better OEE, lower TCO", "Continuous inline feed eliminates the buffer step between stick production and swab assembly. Higher overall equipment effectiveness and a lower total cost of ownership across the line."],
              ["Single point of accountability", "One supplier for the entire line. No interface disputes between vendors when something goes wrong, one phone number for commissioning, retrofits and service."]].
              map(([t, b]) =>
              <div key={t} style={lineBenefits.benefit}>
                  <h4 style={lineBenefits.benefitTitle}>{t}</h4>
                  <p style={lineBenefits.benefitBody}>{b}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <FaluFooter />
    </div>);

};

const lineBenefits = {
  wrap: { marginTop: 64, paddingTop: 48, borderTop: "1px solid rgba(255,255,255,0.15)" },
  label: { fontSize: 11, color: "var(--falu-red)", letterSpacing: "0.22em", marginBottom: 16 },
  lede: { color: "#cfdcec", fontSize: 16, lineHeight: 1.65, maxWidth: 820, marginBottom: 32 },
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 },
  benefit: { paddingTop: 20, borderTop: "2px solid var(--falu-red)" },
  benefitTitle: { color: "#fff", fontSize: 16, fontWeight: 600, lineHeight: 1.3, marginBottom: 12 },
  benefitBody: { color: "#9ab3cc", fontSize: 13, lineHeight: 1.6 }
};

// ============ LINE ROW STYLES ============
const lineRow = {
  wrap: { display: "grid", gridTemplateColumns: "1fr 24px 1fr 24px 1.4fr", gap: 0, alignItems: "stretch" },
  col: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.15)", padding: "28px" },
  colHeader: { fontSize: 10, color: "#9ab3cc", letterSpacing: "0.18em", marginBottom: 20 },
  arrow: { display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.3)", fontSize: 24 },
  link: { display: "block", textDecoration: "none", color: "inherit" },
  machine: { padding: "20px 0" },
  code: { fontSize: 22, color: "#fff", fontWeight: 600, letterSpacing: "-0.01em", display: "flex", alignItems: "baseline", gap: 6 },
  label: { color: "#fff", marginTop: 4, fontSize: 14, fontWeight: 500 },
  note: { marginTop: 12, color: "#9ab3cc", fontSize: 13, lineHeight: 1.55 },
  list: { display: "flex", flexDirection: "column" },
  row: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: 13, textDecoration: "none" },
  linkArrow: { fontSize: 12, color: "#9ab3cc", fontWeight: 400 }
};

// ============ PROCESS BLOCK ============
function ProcessBlock({ num, title, body, note, image, links, linksLabel, flipped }) {
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
      {note &&
      <div style={{ marginTop: 14, fontSize: 13, lineHeight: 1.55, color: "var(--ink-muted)", fontStyle: "italic" }}>
          {note}
        </div>
      }
      <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 12, paddingTop: 24, borderTop: "1px solid var(--rule)", alignItems: "flex-start" }}>
        {linksLabel &&
      <div className="mono" style={{ fontSize: 10, color: "var(--ink-muted)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 4 }}>
            {linksLabel}
          </div>
      }
        {links.map(([label, href]) =>
      <a key={label} href={href} className="btn btn--primary">
            {label}<span className="arrow" />
          </a>
      )}
      </div>
    </div>;


  const right = <ImageSlot label={image} height="100%" />;

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      background: "#fff",
      border: "1px solid var(--rule)",
      alignItems: "stretch"
    }}>
      {flipped ? <>{right}{left}</> : <>{left}{right}</>}
    </div>);

}

function ProcessConnector() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px 0" }}>
      <div style={{
        width: 0, height: 0,
        borderLeft: "32px solid transparent",
        borderRight: "32px solid transparent",
        borderTop: "20px solid rgba(236, 28, 36, 0.28)"
      }} />
    </div>);

}