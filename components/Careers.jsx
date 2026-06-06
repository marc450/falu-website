/* global React, FaluHeader, FaluFooter, SectionLabel, ImageSlot */

// ============================================================
//  /careers — Careers
//  Recruiting page. Why work at FALU, what we look for, open
//  roles, and how to apply. Grounded, no startup-perks fluff.
// ============================================================
window.Careers = function Careers() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <FaluHeader active="careers" />

      {/* Breadcrumb */}
      <div style={{ background: "var(--bg-alt)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container" style={{ padding: "12px var(--gutter)" }}>
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-muted)", letterSpacing: "0.14em" }}>
            <a href="#home" style={{ color: "inherit", textDecoration: "none" }}>HOME</a>
            <span style={{ margin: "0 10px", opacity: 0.4 }}>/</span>
            <span style={{ color: "var(--navy)" }}>CAREERS</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section style={{ padding: "112px 0 88px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 80, alignItems: "end" }}>
            <h1 style={{ fontSize: 80, lineHeight: 0.98, letterSpacing: "-0.035em", color: "var(--navy)" }}>
              Work on machines<br />built to last.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ink-soft)" }}>
              The people who design a FALU machine are often the ones who assemble it and service it
              years later. Our machines are built to run for decades, and so is the knowledge behind
              them. If you like doing careful work and seeing it last, this is a good place to do it.
            </p>
          </div>
        </div>
      </section>

      {/* WHY FALU */}
      <section style={{ padding: "96px 0", background: "var(--bg-band)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <SectionLabel num="01">Why work here</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start", marginTop: 32, marginBottom: 56 }}>
            <h2 style={{ fontSize: 44, lineHeight: 1.1, letterSpacing: "-0.025em" }}>
              A small team that<br />owns its work.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-soft)" }}>
              FALU is a specialist manufacturer, not a corporation. Engineering, manufacturing,
              assembly and service sit under one roof in Rüti, so the distance between an idea and a
              finished machine is short. You will see your work leave the building, and stay in touch
              with it long after.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {[
              ["Ownership, end to end", "Engineers follow a machine from concept through assembly and commissioning. No handing work over a wall."],
              ["Swiss craft, real depth", "Six decades of know-how in one narrow field. You will learn things about cotton, sticks and forming that exist nowhere else."],
              ["Stability over churn", "We invest in people for the long run, the same way we build our machines. Many colleagues have been here a long time."]
            ].map(([t, b]) => (
              <div key={t} style={{ paddingTop: 20, borderTop: "1px solid var(--rule)" }}>
                <div style={{ width: 28, height: 2, background: "var(--falu-red)", marginBottom: 18 }} />
                <h4 style={{ color: "var(--navy)", fontSize: 18, fontWeight: 600, marginBottom: 12 }}>{t}</h4>
                <p style={{ color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.6 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE LOOK FOR + IMAGE */}
      <section style={{ padding: "96px 0", borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <ImageSlot label="FALU assembly floor, technician at work" ratio="4 / 3" />
            <div>
              <SectionLabel num="02">Who we look for</SectionLabel>
              <h2 style={{ fontSize: 40, lineHeight: 1.1, letterSpacing: "-0.025em", marginTop: 32 }}>
                Precise, curious, patient.
              </h2>
              <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.7, color: "var(--ink-soft)" }}>
                Most of our work is mechanical and electrical engineering, assembly, and field
                service. We value people who care about tolerances, who finish what they start, and
                who are happy to spend years getting genuinely good at something specific.
              </p>
              <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {[
                  "Mechanical engineering",
                  "Electrical & controls",
                  "Machine assembly",
                  "Field service & commissioning",
                  "Apprenticeships (Lehre)",
                  "Production planning"
                ].map((d) => (
                  <div key={d} style={{ fontSize: 14, color: "var(--navy)" }}>
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section style={{ padding: "96px 0", background: "var(--bg-band)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <SectionLabel num="03">Open positions</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "end", marginTop: 32, marginBottom: 48 }}>
            <h2 style={{ fontSize: 40, lineHeight: 1.1, letterSpacing: "-0.025em" }}>
              Current openings.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--ink-soft)" }}>
              Positions are based at our site in Rüti, Switzerland. We also welcome speculative
              applications from people who want to work in this field, even when nothing matching is
              listed.
            </p>
          </div>

          <div style={{ border: "1px solid var(--rule)", background: "#fff" }}>
            {[
              ["Mechanical Design Engineer", "Engineering", "Rüti · 100%", "Permanent"],
              ["Electrical Engineer, Controls", "Engineering", "Rüti · 100%", "Permanent"],
              ["Machine Assembly Technician", "Assembly", "Rüti · 100%", "Permanent"],
              ["Field Service Engineer", "Service", "Rüti · travel", "Permanent"],
              ["Apprentice, Polymechanic (Polymechaniker/in EFZ)", "Apprenticeship", "Rüti", "4 years"]
            ].map(([title, dept, loc, type], i, arr) => (
              <a
                key={title}
                href="#contact"
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 1fr 0.8fr auto",
                  gap: 24,
                  alignItems: "center",
                  padding: "24px 32px",
                  borderBottom: i === arr.length - 1 ? "none" : "1px solid var(--rule)",
                  textDecoration: "none",
                  color: "inherit"
                }}>
                <div style={{ fontSize: 16, fontWeight: 600, color: "var(--navy)", letterSpacing: "-0.01em" }}>{title}</div>
                <div className="mono" style={{ fontSize: 11, color: "var(--ink-muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{dept}</div>
                <div className="mono" style={{ fontSize: 12, color: "var(--ink-soft)", letterSpacing: "0.04em" }}>{loc}</div>
                <div className="mono" style={{ fontSize: 11, color: "var(--ink-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{type}</div>
                <span className="mono" style={{ fontSize: 11, color: "var(--falu-red)", letterSpacing: "0.16em", fontWeight: 600 }}>APPLY →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SPECULATIVE / CTA */}
      <section style={{ padding: "112px 0", background: "var(--navy)", color: "#fff" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <SectionLabel num="04" tone="dark">Speculative applications</SectionLabel>
            <h2 style={{ fontSize: 44, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.1, marginTop: 32, maxWidth: 720 }}>
              Nothing matching, but you want to work here?
            </h2>
            <p style={{ marginTop: 24, color: "#9ab3cc", fontSize: 16, lineHeight: 1.65, maxWidth: 640 }}>
              Send us your CV and a short note about what you would like to do. We read every
              application, and good people are worth making room for.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-end" }}>
            <a href="mailto:jobs@falu.com" className="btn btn--primary btn--lg">Send a speculative application<span className="arrow" /></a>
            <a href="mailto:jobs@falu.com" className="mono" style={{ color: "#9ab3cc", fontSize: 12, letterSpacing: "0.06em" }}>
              jobs@falu.com · +41 55 225 51 51
            </a>
          </div>
        </div>
      </section>

      <FaluFooter />
    </div>);
};
