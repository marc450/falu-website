/* global React */
const { useState } = React;

// ============ CONTACT LINKS → CLIPBOARD ============
// Site-wide rule: clicking an email address or a phone number must never open a
// mail client or a dialer. It copies the value and confirms with a small toast.
// Handled by one delegated listener so every mailto:/tel: anchor on any page is
// covered without touching each call site.
if (!window.__faluContactCopyBound) {
  window.__faluContactCopyBound = true;

  document.addEventListener("click", (e) => {
    const a = e.target && e.target.closest && e.target.closest('a[href^="mailto:"], a[href^="tel:"]');
    if (!a) return;
    e.preventDefault();
    const value = faluContactValue(a);
    faluCopy(value).then((ok) => faluToast(ok ? `Copied · ${value}` : value));
  });
}

// Prefer the visible text when the link shows the address/number itself (keeps
// the readable "+41 55 225 51 51" spacing); fall back to the href for links
// whose label is a call to action, e.g. "Send a speculative application".
function faluContactValue(a) {
  const href = a.getAttribute("href").replace(/^(mailto:|tel:)/i, "").split("?")[0].trim();
  const text = (a.textContent || "").trim();
  const isContactText = /^\+?[\d\s()./-]{6,}$/.test(text) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
  return isContactText ? text : href;
}

function faluCopy(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text).then(() => true, () => faluCopyFallback(text));
  }
  return Promise.resolve(faluCopyFallback(text));
}

// execCommand path for http:// origins, where the async clipboard API is blocked.
function faluCopyFallback(text) {
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;top:0;left:-9999px;opacity:0;";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch (err) {
    return false;
  }
}

function faluToast(message) {
  let el = document.getElementById("falu-toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "falu-toast";
    el.style.cssText =
      "position:fixed;left:50%;bottom:32px;transform:translateX(-50%);z-index:9999;" +
      "background:#00213f;color:#fff;border:1px solid #103e6c;padding:12px 18px;" +
      "font-family:var(--font-mono, monospace);font-size:12px;letter-spacing:0.08em;" +
      "text-transform:uppercase;pointer-events:none;opacity:0;transition:opacity .18s ease;";
    document.body.appendChild(el);
  }
  el.textContent = message;
  // Force a reflow so a repeat click restarts the fade instead of being ignored.
  void el.offsetWidth;
  el.style.opacity = "1";
  clearTimeout(el.__faluTimer);
  el.__faluTimer = setTimeout(() => {el.style.opacity = "0";}, 1800);
}

// ============ HEADER ============
window.FaluHeader = function FaluHeader({ active = "home" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  const items = [
    { id: "machinery", label: "Machinery", children: [
      { label: "Cotton swab machinery", href: "#cotton-swab-machinery" },
      { label: "Cotton pad machinery", href: "#cotton-pad-machinery" },
      { label: "Paper stick machinery", href: "#prx" }
    ]},
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "careers", label: "Careers" },
  ];
  return (
    <header className="falu-header">
      <div className="falu-header__main">
        <a href="#home" className="falu-header__logo" onClick={close}>
          <img src="assets/falu-logo.png" alt="FALU AG" />
        </a>
        <nav className="falu-nav">
          {items.map((it) => (
            <div key={it.id} className={`falu-nav__item${it.children ? " has-dropdown" : ""}`}>
              <a
                href={`#${it.id}`}
                className={active === it.id ? "active" : ""}
                aria-current={active === it.id ? "page" : undefined}
                aria-haspopup={it.children ? "true" : undefined}
              >
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
            +41 55 225 51 51
          </a>
          <a href="#contact" className="btn btn--primary">
            Request a quotation
            <span className="arrow" />
          </a>
        </div>
        <button
          type="button"
          className="falu-burger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="falu-mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={`falu-burger__icon${menuOpen ? " is-open" : ""}`} aria-hidden="true">
            <span /><span /><span />
          </span>
        </button>
      </div>

      <div id="falu-mobile-menu" className={`falu-mobile-menu${menuOpen ? " is-open" : ""}`}>
        <nav className="falu-mobile-nav">
          {items.map((it) => (
            <React.Fragment key={it.id}>
              <a
                href={`#${it.id}`}
                className={`falu-mobile-link${active === it.id ? " active" : ""}`}
                aria-current={active === it.id ? "page" : undefined}
                onClick={close}
              >
                {it.label}
              </a>
              {it.children && it.children.map((c) => (
                <a key={c.label} href={c.href} className="falu-mobile-sublink" onClick={close}>
                  {c.label}
                </a>
              ))}
            </React.Fragment>
          ))}
        </nav>
        <div className="falu-mobile-actions">
          <a href="tel:+41552255151" className="falu-phone" onClick={close}>+41 55 225 51 51</a>
          <a href="#contact" className="btn btn--primary" onClick={close}>
            Request a quotation<span className="arrow" />
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
            and paper sticks. Built in Switzerland since 1965.
          </p>
          <p style={{ marginTop: 4, fontSize: 12, color: "#8fa1b3" }}>
            Joweidzentrum 5, 8630 Rüti, Switzerland<br/>
            <a href="tel:+41552255151" style={{ color: "inherit" }}>+41 55 225 51 51</a>
            {" · "}
            <a href="mailto:sales@falu.com" style={{ color: "inherit" }}>sales@falu.com</a>
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
            <li><a href="#about">About FALU</a></li>
            <li><a href="#about">Why FALU</a></li>
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
          </ul>
        </div>
      </div>
      <div className="falu-footer__bottom">
        <div>© 2026 FALU AG · UID CHE-105.813.399</div>
        <div className="falu-footer__bottom-links">
          <a href="#imprint">Imprint</a>
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
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

// Labelled image placeholder, diagonal stripes, mono caption.
// `id` is the shot number the team uses to hand images back (e.g. "CB1-01").
window.ImageSlot = function ImageSlot({ id, label, ratio = "16 / 10", height, dark = false, style = {} }) {
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
          fontSize: id ? 13 : 10,
          fontWeight: id ? 700 : 400,
          letterSpacing: "0.14em",
          color: id ? "#fff" : fg,
          background: id ? "var(--falu-red)" : "transparent",
          padding: id ? "5px 9px" : 0,
          textTransform: "uppercase",
        }}
      >
        {id || "IMG · placeholder"}
      </div>
    </div>
  );
};

// ============ MACHINE HERO VIDEO ============
// Every machine page carries one hero video instead of a cluster of stills.
// It autoplays on load, loops, and is always muted: browsers block autoplay with
// sound, and the delivered files are cut without an audio track anyway. Controls
// are custom rather than the browser default so the bar matches the site: play /
// pause, scrub, and full screen.
//
// `src` is the video file (e.g. "assets/video/cb1-hero.mp4"). Until the footage
// exists, leave it off and the slot renders as a labelled placeholder, the same
// way ImageSlot does.
window.MachineHeroVideo = function MachineHeroVideo({ id, src, poster, label, ratio = "16 / 9" }) {
  const wrapRef = React.useRef(null);
  const videoRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(true);
  const [time, setTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [full, setFull] = React.useState(false);

  React.useEffect(() => {
    const onChange = () => setFull(
      (document.fullscreenElement || document.webkitFullscreenElement) === wrapRef.current
    );
    document.addEventListener("fullscreenchange", onChange);
    document.addEventListener("webkitfullscreenchange", onChange);
    return () => {
      document.removeEventListener("fullscreenchange", onChange);
      document.removeEventListener("webkitfullscreenchange", onChange);
    };
  }, []);

  if (!src) return <VideoPlaceholder id={id} label={label} ratio={ratio} />;

  const toggle = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) el.play(); else el.pause();
  };

  const seek = (e) => {
    const el = videoRef.current;
    if (!el || !duration) return;
    el.currentTime = Number(e.target.value) / 1000 * duration;
  };

  const toggleFull = () => {
    const box = wrapRef.current;
    const el = videoRef.current;
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      (document.exitFullscreen || document.webkitExitFullscreen).call(document);
      return;
    }
    // Fullscreen the wrapper so the FALU control bar stays visible. iPhone Safari
    // has no element fullscreen at all and only fullscreens the video itself,
    // with its native controls, so that is the fallback everywhere it fails.
    const native = () => {if (el && el.webkitEnterFullscreen) el.webkitEnterFullscreen();};
    const request = box && (box.requestFullscreen || box.webkitRequestFullscreen);
    if (!request) { native(); return; }
    try {
      const pending = request.call(box);
      if (pending && pending.catch) pending.catch(native);
    } catch (err) {
      native();
    }
  };

  const pct = duration ? Math.round(time / duration * 1000) : 0;

  return (
    <div
      ref={wrapRef}
      style={{
        position: "relative",
        background: "#00213f",
        border: "1px solid #103e6c",
        aspectRatio: full ? undefined : ratio,
        height: full ? "100%" : undefined,
        overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration || 0)}
        onClick={toggle}
        style={{
          width: "100%",
          height: "100%",
          objectFit: full ? "contain" : "cover",
          display: "block",
          cursor: "pointer",
        }}
      />
      <div style={vid.bar}>
        <button type="button" onClick={toggle} aria-label={playing ? "Pause" : "Play"} style={vid.btn}>
          {playing ? "❚❚" : "▶"}
        </button>
        <input
          type="range"
          min="0"
          max="1000"
          value={pct}
          onChange={seek}
          aria-label="Seek"
          style={vid.range}
        />
        <span className="mono" style={vid.time}>{faluClock(time)} / {faluClock(duration)}</span>
        <button
          type="button"
          onClick={toggleFull}
          aria-label={full ? "Exit full screen" : "Full screen"}
          style={vid.btn}
        >
          {full ? "⤡" : "⤢"}
        </button>
      </div>
    </div>
  );
};

function VideoPlaceholder({ id, label, ratio }) {
  return (
    <div
      style={{
        background: "repeating-linear-gradient(135deg, #00213f 0 8px, #002e5b 8px 16px)",
        border: "1px solid #103e6c",
        aspectRatio: ratio,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 14,
      }}
    >
      <div style={{ ...vid.btn, width: 52, height: 52, fontSize: 18, border: "1px solid #103e6c", background: "rgba(0,33,63,0.85)" }}>▶</div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          color: "#9ab3cc",
          background: "rgba(0,33,63,0.85)",
          padding: "8px 14px",
          border: "1px solid #103e6c",
          textAlign: "center",
        }}
      >
        {label}
      </div>
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          fontFamily: "var(--font-mono)",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.14em",
          color: "#fff",
          background: "var(--falu-red)",
          padding: "5px 9px",
          textTransform: "uppercase",
        }}
      >
        {id || "VIDEO · placeholder"}
      </div>
    </div>
  );
}

function faluClock(seconds) {
  const s = Math.max(0, Math.floor(seconds || 0));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

const vid = {
  bar: {
    position: "absolute",
    left: 0, right: 0, bottom: 0,
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "14px 16px",
    background: "linear-gradient(180deg, transparent, rgba(0,20,40,0.85) 45%)",
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    flexShrink: 0,
    padding: 0,
    border: "1px solid rgba(255,255,255,0.35)",
    background: "rgba(0,33,63,0.6)",
    color: "#fff",
    fontSize: 12,
    lineHeight: 1,
    cursor: "pointer",
  },
  range: {
    flex: 1,
    minWidth: 0,
    height: 4,
    accentColor: "var(--falu-red)",
    cursor: "pointer",
  },
  time: {
    flexShrink: 0,
    fontSize: 11,
    letterSpacing: "0.08em",
    color: "#fff",
  },
};
