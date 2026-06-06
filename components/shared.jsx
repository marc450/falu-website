/* global React */
const { useState } = React;

// ============ HEADER ============
window.FaluHeader = function FaluHeader({ active = "home" }) {
  const items = [
    { id: "machinery", label: "Machinery", children: [
      { label: "Cotton swab machinery", href: "#cotton-swab-machinery" },
      { label: "Cotton pad machinery", href: "#cotton-pad-machinery" },
      { label: "Paper stick machinery", href: "#paper-stick-machinery" }
    ]},
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "careers", label: "Careers" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <header className="falu-header">
      <div className="falu-header__main">
        <a href="#home" className="falu-header__logo">
          <img src="assets/falu-logo.png" alt="FALU AG" />
        </a>
        <nav className="falu-nav">
          {items.map((it) => (
            <div key={it.id} className={`falu-nav__item${it.children ? " has-dropdown" : ""}`}>
              <a href={`#${it.id}`} className={active === it.id ? "active" : ""}>
                {it.label}
                {it.children && <span className="falu-nav__caret" aria-hidden="true">▾</span>}
              </a>
              {it.children && (
                <div className="falu-nav__dropdown">
                  {it.children.map((c) => (
                    <a key={c.label} href={c.href} className="falu-nav__dropdown-item">
                      {c.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="falu-header__cta">
          <a href="tel:+41552255151" className="falu-phone">
            <span className="dot" />
            +41 55 225 51 51
          </a>
          <a href="#contact" className="btn btn--primary">
            Request a quotation
            <span className="arrow" />
          </a>
        </div>
      </div>
    </header>
  );
};

// ============ FOOTER ============
window.FaluFooter = function FaluFooter() {
  return (
    <footer className="falu-footer">
      <div className="falu-footer__main">
        <div className="falu-footer__brand">
          <div className="lockup">
            <img src="assets/falu-logo.png" alt="FALU AG" />
          </div>
          <p>
            Swiss-engineered production and packaging machinery for cotton swabs, cotton pads,
            and paper sticks. Built in Rüti since 1965.
          </p>
          <p style={{ marginTop: 4, fontSize: 12, color: "#8fa1b3" }}>
            Joweidzentrum 5, 8630 Rüti, Switzerland<br/>
            +41 55 225 51 51 · sales@falu.com
          </p>
        </div>
        <div>
          <h4>Machinery</h4>
          <ul>
            <li><a href="#cotton-swab-machinery">Cotton Swab Machinery</a></li>
            <li><a href="#cotton-pad-machinery">Cotton Pad Machinery</a></li>
            <li><a href="#prx">Paper Stick Machinery</a></li>
            <li><a href="#services">Production Planning & Layout</a></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Falu</a></li>
            <li><a href="#about">Why Falu</a></li>
            <li><a href="#about">Proven in production worldwide</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li><a href="#services">Service & lifecycle support</a></li>
            <li><a href="#services">Spare parts</a></li>
            <li><a href="#services">Retrofits & upgrades</a></li>
            <li><a href="#contact">Request consultation</a></li>
            <li><a href="#contact">Downloads</a></li>
          </ul>
        </div>
      </div>
      <div className="falu-footer__bottom">
        <div>© 2026 FALU AG · UID CHE-105.813.399</div>
        <div className="falu-footer__bottom-links">
          <a href="#imprint">Imprint</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

// ============ SHARED PRIMITIVES ============
window.SectionLabel = function SectionLabel({ num, children, tone }) {
  const dark = tone === "dark";
  return (
    <div className="section-label" style={dark ? { color: "#fff" } : undefined}>
      <span className="num" style={dark ? { color: "var(--falu-red)" } : undefined}>{num}</span>
      <span>{children}</span>
      <span className="rule" style={dark ? { background: "rgba(255,255,255,0.2)" } : undefined} />
    </div>
  );
};

// Labelled image placeholder, diagonal stripes, mono caption
window.ImageSlot = function ImageSlot({ label, ratio = "16 / 10", height, dark = false, style = {} }) {
  const bg = dark
    ? "repeating-linear-gradient(135deg, #00213f 0 8px, #002e5b 8px 16px)"
    : "repeating-linear-gradient(135deg, #eaeef2 0 8px, #f1f4f7 8px 16px)";
  const fg = dark ? "#9ab3cc" : "#7a8a9a";
  const border = dark ? "1px solid #103e6c" : "1px solid #d8dde3";
  return (
    <div
      style={{
        background: bg,
        aspectRatio: height ? undefined : ratio,
        height: height || undefined,
        border,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          color: fg,
          background: dark ? "rgba(0,33,63,0.85)" : "rgba(255,255,255,0.85)",
          padding: "8px 14px",
          border: dark ? "1px solid #103e6c" : "1px solid #d8dde3",
        }}
      >
        {label}
      </div>
      <div
        style={{
          position: "absolute",
          top: 10, left: 10,
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.14em",
          color: fg,
          textTransform: "uppercase",
        }}
      >
        IMG · placeholder
      </div>
    </div>
  );
};
