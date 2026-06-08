/* global React, FaluHeader, FaluFooter, SectionLabel, ImageSlot */

// ============================================================
//  /about-us — About / Company
//  Vendor-qualification page. Heritage, Rüti, the engineering
//  approach, the long-horizon promise. Grounded in supplied facts.
// ============================================================
window.About = function About() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <FaluHeader active="about" />

      {/* Breadcrumb */}
      <div style={{ background: "var(--bg-alt)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container" style={{ padding: "12px var(--gutter)" }}>
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-muted)", letterSpacing: "0.14em" }}>
            <a href="#home" style={{ color: "inherit", textDecoration: "none" }}>HOME</a>
            <span style={{ margin: "0 10px", opacity: 0.4 }}>/</span>
            <span style={{ color: "var(--navy)" }}>ABOUT</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section style={{ padding: "112px 0 88px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 80, alignItems: "end" }}>
            <h1 style={{ fontSize: 80, lineHeight: 0.98, letterSpacing: "-0.035em", color: "var(--navy)" }}>
              Sixty years of<br />Swiss machine manufacturing.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ink-soft)" }}>
              FALU has built machinery for cotton swabs, cotton pads and paper sticks since 1965,
              from a single site in Rüti, Switzerland. We do one thing, and we have done it for
              three generations.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY FACTS */}
      <section style={{ padding: "0", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderLeft: "1px solid var(--rule)" }}>
          {[
            ["1965", "Founded in Switzerland"],
            ["Rüti", "Single site, design to assembly"],
            ["70+", "Countries with installed lines"],
            ["40+ yrs", "Typical machine service life"]
          ].map(([n, l]) => (
            <div key={l} style={{ padding: "40px 28px", borderRight: "1px solid var(--rule)" }}>
              <div style={{ fontSize: 36, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.02em" }}>{n}</div>
              <div style={{ marginTop: 10, fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.5 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HERITAGE NARRATIVE */}
      <section style={{ padding: "96px 0", background: "var(--bg-band)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <SectionLabel num="01">The company</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start", marginTop: 32 }}>
            <div>
              <h2 style={{ fontSize: 40, lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                A specialist, not a generalist.
              </h2>
              <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.7, color: "var(--ink-soft)" }}>
                FALU builds production and packaging machinery for cotton swabs, cotton pads and
                paper sticks, used across the health, beauty and food industries. It is the only
                thing we make, and the depth that comes from that focus is the reason our machines
                are trusted in more than 70 countries.
              </p>
              <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.7, color: "var(--ink-soft)" }}>
                Our engineers know cotton, sticks, glue and forming geometries the way most teams
                know spreadsheets. When a customer brings an unusual product or a difficult format,
                the answer almost always already exists somewhere in six decades of FALU machines.
              </p>
            </div>
            <ImageSlot label="FALU engineering team / archive photograph" ratio="4 / 3" />
          </div>
        </div>
      </section>

      {/* RÜTI / FACTORY */}
      <section style={{ padding: "96px 0", borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <ImageSlot label="FALU factory, Rüti, Switzerland, exterior" ratio="4 / 3" />
            <div>
              <SectionLabel num="02">Rüti, Switzerland</SectionLabel>
              <h2 style={{ fontSize: 40, lineHeight: 1.1, letterSpacing: "-0.025em", marginTop: 32 }}>
                Designed, built and assembled<br />under one roof.
              </h2>
              <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.7, color: "var(--ink-soft)" }}>
                Engineering, manufacturing, assembly and final testing all happen at our site at
                Joweid Zentrum 5 in Rüti. Keeping the whole process in one building is how we hold
                Swiss tolerances and how the same people who design a machine are the ones who see
                it run before it ships.
              </p>
              <div style={{ marginTop: 28, fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--navy)", letterSpacing: "0.02em", lineHeight: 1.7 }}>
                FALU AG<br />
                Joweid Zentrum 5, 8630 Rüti<br />
                Switzerland
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT GUIDES US — navy slab */}
      <section style={{ padding: "112px 0", background: "var(--navy)", color: "#fff" }}>
        <div className="container">
          <SectionLabel num="03" tone="dark">What guides us</SectionLabel>
          <h2 style={{ fontSize: 44, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.1, maxWidth: 820, marginTop: 32, marginBottom: 56 }}>
            Manufacturing machines that outlast the people who specified them.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {[
              ["Total cost of ownership", "We optimise for the cost of running a line over decades, not the price on the day it ships. Lower scrap, higher uptime, fewer operators."],
              ["Lifecycle commitment", "Spare parts guaranteed for the entire life of the machine, independent of installation date. Many FALU machines run for over forty years."],
              ["Long-term partnership", "Most of our business is with customers we have supported for decades. We sell machines, but we keep relationships."]
            ].map(([t, b]) => (
              <div key={t} style={{ paddingTop: 20, borderTop: "2px solid var(--falu-red)" }}>
                <h4 style={{ color: "#fff", fontSize: 18, fontWeight: 600, marginBottom: 12 }}>{t}</h4>
                <p style={{ color: "#9ab3cc", fontSize: 14, lineHeight: 1.6 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "96px 0", background: "var(--bg-alt)", borderTop: "1px solid var(--rule)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 48, alignItems: "center" }}>
          <h2 style={{ color: "var(--navy)", maxWidth: 720 }}>
            Want to know whether FALU is the right partner for your line?
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
    </div>);
};
