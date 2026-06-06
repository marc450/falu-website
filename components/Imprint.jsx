/* global React, FaluHeader, FaluFooter, SectionLabel */

// ============================================================
// IMPRINT / IMPRESSUM
// Legal disclosure page. Satisfies Swiss disclosure duty under
// Art. 3(1)(s) UWG: legal name, full postal address, and a
// direct means of contact, plus commercial-register / UID and
// VAT details for a registered AG.
// ============================================================

window.Imprint = function Imprint() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <FaluHeader active="imprint" />

      {/* Breadcrumb */}
      <div style={cCrumb.wrap}>
        <div className="container" style={cCrumb.inner}>
          <a href="#home" style={cCrumb.link}>Home</a>
          <span style={cCrumb.sep}>/</span>
          <span style={cCrumb.current}>Imprint</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{ padding: "112px 0 80px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 80, alignItems: "end" }}>
            <h1 style={{ fontSize: 80, lineHeight: 0.98, letterSpacing: "-0.035em", color: "var(--navy)" }}>Imprint.</h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ink-soft)" }}>
              Legal information about the operator of this website, in accordance with the
              Swiss Federal Act against Unfair Competition (UWG).
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ padding: "0 0 112px", borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <div style={{ maxWidth: 860, margin: "0 auto", borderLeft: "1px solid var(--rule)", borderRight: "1px solid var(--rule)", padding: "56px" }}>
            <SectionLabel num="01">Company details</SectionLabel>

            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 28 }}>
              <div>
                <div className="mono" style={cBody.label}>OPERATOR</div>
                <p style={cBody.addr}>
                  FALU AG<br />
                  Joweid Zentrum 5<br />
                  8630 Rüti<br />
                  Switzerland
                </p>
              </div>

              <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 28 }}>
                <div className="mono" style={cBody.label}>CONTACT</div>
                <a href="mailto:sales@falu.com" style={cBody.value}>sales@falu.com</a>
                <a href="tel:+41552255151" style={cBody.value}>+41 55 225 51 51</a>
              </div>

              <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 28 }}>
                <div className="mono" style={cBody.label}>LEGAL FORM &amp; REGISTRATION</div>
                <p style={cBody.addr}>
                  Aktiengesellschaft (AG) under Swiss law, registered in the
                  Commercial Register of the Canton of Zurich.
                </p>
                <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 6 }}>
                  <div className="mono" style={cBody.reg}>Company identification (UID): CHE-105.813.399</div>
                  <div className="mono" style={cBody.reg}>VAT number: CHE-105.813.399 MWST</div>
                </div>
              </div>

              <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 28 }}>
                <div className="mono" style={cBody.label}>REPRESENTED BY</div>
                <p style={cBody.addr}>
                  Marc Wyss, Owner &amp; Chief Executive Officer
                </p>
              </div>
            </div>

            <div style={{ marginTop: 48 }}>
              <SectionLabel num="02">Disclaimer</SectionLabel>

              <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 24 }}>
                <div>
                  <h3 style={cBody.h3}>Liability for content</h3>
                  <p style={cBody.para}>
                    The content of this website has been prepared with the greatest possible care.
                    FALU AG accepts no liability for the accuracy, completeness, or timeliness of
                    the information provided. The use of this website and its content is at the
                    user's own risk. Liability claims against FALU AG arising from material or
                    immaterial damage caused by the use or non-use of the published information are
                    excluded to the extent permitted by law.
                  </p>
                </div>

                <div>
                  <h3 style={cBody.h3}>Liability for links</h3>
                  <p style={cBody.para}>
                    This website may contain links to external third-party websites. FALU AG has no
                    influence over the content of these external sites and accepts no responsibility
                    for them. The respective provider or operator of the linked pages is solely
                    responsible for their content.
                  </p>
                </div>

                <div>
                  <h3 style={cBody.h3}>Copyright</h3>
                  <p style={cBody.para}>
                    The copyright and all other rights to the content, images, and files on this
                    website belong exclusively to FALU AG or to the specifically named rights
                    holders. Reproduction or use of any element requires the prior written consent
                    of the copyright holder.
                  </p>
                </div>

                <div>
                  <h3 style={cBody.h3}>Data protection</h3>
                  <p style={cBody.para}>
                    FALU AG processes personal data in accordance with the Swiss Federal Act on Data
                    Protection (FADP). For questions regarding the processing of your personal data,
                    please contact us at <a href="mailto:sales@falu.com" style={cBody.inlineLink}>sales@falu.com</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaluFooter />
    </div>
  );
};

const cCrumb = {
  wrap: { background: "var(--bg-alt)", borderBottom: "1px solid var(--rule)" },
  inner: { padding: "12px var(--gutter)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-muted)", display: "flex", gap: 10 },
  link: { color: "var(--ink-soft)" },
  sep: { color: "var(--rule)" },
  current: { color: "var(--navy)", fontWeight: 600 }
};

const cBody = {
  label: { fontSize: 10, color: "var(--falu-red)", letterSpacing: "0.18em", marginBottom: 12 },
  value: { display: "block", fontSize: 16, color: "var(--navy)", fontWeight: 500, textDecoration: "none", marginBottom: 4, letterSpacing: "-0.005em" },
  addr: { fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.6, margin: 0 },
  reg: { fontSize: 12, color: "var(--ink-soft)", letterSpacing: "0.04em" },
  h3: { fontSize: 16, color: "var(--navy)", fontWeight: 600, margin: "0 0 8px", letterSpacing: "-0.01em" },
  para: { fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.7, margin: 0 },
  inlineLink: { color: "var(--falu-red)", textDecoration: "none" }
};
