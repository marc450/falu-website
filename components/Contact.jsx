/* global React, FaluHeader, FaluFooter, SectionLabel, ImageSlot */
const { useState: useStateC } = React;

// ============================================================
// CONTACT / REQUEST A QUOTATION
// Destination for every primary CTA on the site.
// Quotation form + direct contact + Rüti location.
// ============================================================

window.Contact = function Contact() {
  const [form, setForm] = useStateC({
    company: "",
    name: "",
    email: "",
    dialCode: "",
    phone: "",
    country: "",
    message: ""
  });
  const [files, setFiles] = useStateC([]);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const onFiles = (e) => {
    const incoming = Array.from(e.target.files || []);
    setFiles((prev) => [...prev, ...incoming].slice(0, 5));
    e.target.value = "";
  };
  const removeFile = (idx) => setFiles((prev) => prev.filter((_, i) => i !== idx));
  const fmtSize = (b) => b < 1024 ? b + " B" : b < 1048576 ? (b / 1024).toFixed(0) + " KB" : (b / 1048576).toFixed(1) + " MB";
  const required = ["company", "name", "email", "dialCode", "phone", "country", "message"];
  const complete = required.every((k) => form[k].trim() !== "");

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <FaluHeader active="contact" />

      {/* Breadcrumb */}
      <div style={cCrumb.wrap}>
        <div className="container" style={cCrumb.inner}>
          <a href="#home" style={cCrumb.link}>Home</a>
          <span style={cCrumb.sep}>/</span>
          <span style={cCrumb.current}>Contact</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{ padding: "112px 0 80px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 80, alignItems: "end" }}>
            <h1 style={{ fontSize: 80, lineHeight: 0.98, letterSpacing: "-0.035em", color: "var(--navy)" }}>Get in touch.

            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ink-soft)" }}>
              Whatever you need, our dedicated team is happy to help. Ask us about a new line, a
              single machine, spare parts, or servicing an installation that has been running for
              decades. We reply within two working days.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + CONTACT RAIL */}
      <section style={{ padding: "0 0 112px", borderTop: "1px solid var(--rule)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 0, borderLeft: "1px solid var(--rule)", borderRight: "1px solid var(--rule)" }}>

          {/* FORM */}
          <div style={{ padding: "56px", borderRight: "1px solid var(--rule)" }}>
            <SectionLabel num="01">Your enquiry</SectionLabel>

            {/* Two-up: company / name */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 32 }}>
              <div>
                <div className="mono" style={cForm.label}>COMPANY <span style={cForm.req}>*</span></div>
                <input value={form.company} onChange={set("company")} placeholder="Company name" style={cForm.input} required />
              </div>
              <div>
                <div className="mono" style={cForm.label}>CONTACT NAME <span style={cForm.req}>*</span></div>
                <input value={form.name} onChange={set("name")} placeholder="Full name" style={cForm.input} required />
              </div>
            </div>

            {/* Two-up: email / phone */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 28 }}>
              <div>
                <div className="mono" style={cForm.label}>EMAIL <span style={cForm.req}>*</span></div>
                <input type="email" value={form.email} onChange={set("email")} placeholder="name@company.com" style={cForm.input} required />
              </div>
              <div>
                <div className="mono" style={cForm.label}>PHONE <span style={cForm.req}>*</span></div>
                <div style={{ display: "grid", gridTemplateColumns: "84px 1fr", gap: 0 }}>
                  <select value={form.dialCode} onChange={set("dialCode")} style={{ ...cForm.input, borderRight: "none", paddingRight: 30, minWidth: 0, appearance: "none", WebkitAppearance: "none", MozAppearance: "none", backgroundImage: "linear-gradient(45deg, transparent 50%, var(--ink-muted) 50%), linear-gradient(135deg, var(--ink-muted) 50%, transparent 50%)", backgroundPosition: "calc(100% - 18px) 19px, calc(100% - 13px) 19px", backgroundSize: "5px 5px, 5px 5px", backgroundRepeat: "no-repeat" }} required>
                    <option value="">Code</option>
                    {DIAL_CODES.map((d) => (
                      <option key={d.code + d.iso} value={d.code}>{d.iso} {d.code}</option>
                    ))}
                  </select>
                  <input type="tel" value={form.phone} onChange={set("phone")} placeholder="79 123 45 67" style={cForm.input} required />
                </div>
              </div>
            </div>

            {/* Country */}
            <div style={{ marginTop: 28 }}>
              <div className="mono" style={cForm.label}>COUNTRY <span style={cForm.req}>*</span></div>
              <input value={form.country} onChange={set("country")} placeholder="Country" style={cForm.input} required />
            </div>

            {/* Message */}
            <div style={{ marginTop: 28 }}>
              <div className="mono" style={cForm.label}>YOUR MESSAGE <span style={cForm.req}>*</span></div>
              <textarea
                value={form.message}
                onChange={set("message")}
                rows={5}
                placeholder="Your message"
                style={{ ...cForm.input, resize: "vertical", lineHeight: 1.55 }}
                required />
            </div>

            {/* Attachments */}
            <div style={{ marginTop: 28 }}>
              <div className="mono" style={cForm.label}>ATTACHMENTS <span style={{ color: "var(--ink-muted)" }}>(optional)</span></div>
              <label style={cForm.dropzone}>
                <input type="file" multiple onChange={onFiles} style={{ display: "none" }}
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.dwg,.step,.stp" />
                <span className="mono" style={{ fontSize: 12, color: "var(--navy)", letterSpacing: "0.04em" }}>
                  + Attach files
                </span>
                <span style={{ fontSize: 12, color: "var(--ink-muted)" }}>
                  Drawings, specs or RFQs. PDF, DOC, XLS, images, CAD. Up to 5 files.
                </span>
              </label>
              {files.length > 0 &&
              <div style={{ marginTop: 12, border: "1px solid var(--rule)" }}>
                {files.map((f, idx) =>
                <div key={idx} style={cForm.fileRow}>
                    <span className="mono" style={{ fontSize: 11, color: "var(--falu-red)", letterSpacing: "0.1em", width: 36 }}>
                      {(f.name.split(".").pop() || "").toUpperCase().slice(0, 4)}
                    </span>
                    <span style={{ flex: 1, fontSize: 13, color: "var(--navy)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.name}</span>
                    <span className="mono" style={{ fontSize: 11, color: "var(--ink-muted)" }}>{fmtSize(f.size)}</span>
                    <button onClick={() => removeFile(idx)} style={cForm.fileRemove} aria-label="Remove">×</button>
                  </div>
                )}
              </div>
              }
            </div>

            <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 20 }}>
              <a
                href="#"
                className="btn btn--primary btn--lg"
                style={complete ? undefined : { opacity: 0.4, pointerEvents: "none" }}>
                Send enquiry<span className="arrow" />
              </a>
              <span style={{ fontSize: 13, color: "var(--ink-muted)" }}>All fields required. We reply within two working days.</span>
            </div>
          </div>

          {/* CONTACT RAIL */}
          <div style={{ padding: "56px", background: "var(--bg-alt)" }}>
            <SectionLabel num="02">Direct</SectionLabel>

            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 28 }}>
              <div>
                <div className="mono" style={cRail.label}>SALES</div>
                <a href="mailto:sales@falu.com" style={cRail.value}>sales@falu.com</a>
                <a href="tel:+41552255151" style={cRail.value}>+41 55 225 51 51</a>
              </div>

              <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 28 }}>
                <div className="mono" style={cRail.label}>FACTORY &amp; HEAD OFFICE</div>
                <p style={cRail.addr}>
                  FALU AG<br />
                  Joweid Zentrum 5<br />
                  8630 Rüti<br />
                  Switzerland
                </p>
                <div className="mono" style={{ fontSize: 11, color: "var(--ink-muted)", letterSpacing: "0.06em", marginTop: 12 }}>
                  UID CHE-105.813.399
                </div>
              </div>

              <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 28 }}>
                <div className="mono" style={cRail.label}>HOURS</div>
                <p style={cRail.addr}>
                  Monday to Friday<br />
                  08:00 to 17:00 CET
                </p>
              </div>

              <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 0 }}>
                <div style={{ aspectRatio: "4 / 3", border: "1px solid var(--rule)" }}>
                  <iframe
                    title="FALU AG location, Joweid Zentrum 5, 8630 Rüti, Switzerland"
                    src="https://maps.google.com/maps?q=FALU%20AG%2C%20Joweid%20Zentrum%205%2C%208630%20R%C3%BCti%2C%20Switzerland&z=15&output=embed"
                    style={{ width: "100%", height: "100%", border: 0, display: "block" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaluFooter />
    </div>);

};

const DIAL_CODES = [
  { iso: "CH", code: "+41" },
  { iso: "DE", code: "+49" },
  { iso: "AT", code: "+43" },
  { iso: "FR", code: "+33" },
  { iso: "IT", code: "+39" },
  { iso: "ES", code: "+34" },
  { iso: "GB", code: "+44" },
  { iso: "NL", code: "+31" },
  { iso: "BE", code: "+32" },
  { iso: "PL", code: "+48" },
  { iso: "SE", code: "+46" },
  { iso: "US", code: "+1" },
  { iso: "BR", code: "+55" },
  { iso: "TR", code: "+90" },
  { iso: "AE", code: "+971" },
  { iso: "IN", code: "+91" },
  { iso: "CN", code: "+86" },
  { iso: "JP", code: "+81" },
  { iso: "KR", code: "+82" }
];

const cCrumb = {
  wrap: { background: "var(--bg-alt)", borderBottom: "1px solid var(--rule)" },
  inner: { padding: "12px var(--gutter)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-muted)", display: "flex", gap: 10 },
  link: { color: "var(--ink-soft)" },
  sep: { color: "var(--rule)" },
  current: { color: "var(--navy)", fontWeight: 600 }
};

const cForm = {
  label: { fontSize: 10, color: "var(--ink-muted)", letterSpacing: "0.18em", marginBottom: 10 },
  req: { color: "var(--falu-red)" },
  dropzone: { display: "flex", flexDirection: "column", gap: 6, padding: "18px 20px", border: "1px dashed var(--rule)", background: "#fff", cursor: "pointer", transition: "border-color 120ms ease" },
  fileRow: { display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderBottom: "1px solid var(--rule-soft)", background: "#fff" },
  fileRemove: { border: "none", background: "transparent", color: "var(--ink-muted)", fontSize: 18, lineHeight: 1, cursor: "pointer", padding: "0 4px" },
  input: {
    width: "100%",
    padding: "13px 16px",
    border: "1px solid var(--rule)",
    background: "#fff",
    fontFamily: "var(--font-sans)",
    fontSize: 14,
    color: "var(--ink)",
    outline: "none",
    boxSizing: "border-box"
  }
};

const cRail = {
  label: { fontSize: 10, color: "var(--falu-red)", letterSpacing: "0.18em", marginBottom: 12 },
  value: { display: "block", fontSize: 16, color: "var(--navy)", fontWeight: 500, textDecoration: "none", marginBottom: 4, letterSpacing: "-0.005em" },
  addr: { fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.6, margin: 0 }
};