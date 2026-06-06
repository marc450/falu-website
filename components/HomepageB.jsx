/* global React, FaluHeader, FaluFooter, SectionLabel, ImageSlot */

// ============================================================
// HOMEPAGE, DIRECTION B v2 · "INDUSTRIAL EDITORIAL"
// Restructured around the user's wireframe + earlier feedback.
// ============================================================

window.HomepageB = function HomepageB() {
  return (
    <div style={{ background: "#fff" }}>
      <FaluHeader active="home" />

      {/* 1. HERO */}
      <section style={{ background: "#fff" }}>
        <div style={heroB.wrap}>
          <ImageSlot label="CB1 line, Rüti production floor wide shot" height={620} />
          <div style={heroB.overlay}>
            <div className="container" style={heroB.overlayInner}>
              <h1 style={heroB.title}>
                Production lines<br />
                for cotton swabs<br />
                & pads.
              </h1>
            </div>
          </div>
        </div>

        <div className="container" style={heroB.subRow}>
          <p style={heroB.lede}>Swiss-engineered machinery for long-term, industrial use. Built for a decades long service life, the lowest total cost of ownership in the category, and lifetime spare-parts availability.



          </p>
          <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
            <a className="btn btn--primary btn--lg" href="#contact">Discuss your setup<span className="arrow" /></a>
            <a className="btn btn--ghost btn--lg" href="#machinery">Browse machinery<span className="arrow" /></a>
          </div>
        </div>

      </section>

      {/* 2. FEATURED CB1 */}
      <section style={{ padding: "120px 0", borderTop: "1px solid var(--rule)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: 52, lineHeight: 1.05, letterSpacing: "-0.025em" }}>CB1, the cotton swab production machine that defines the category.

            </h2>
            <p style={{ marginTop: 28, fontSize: 17, lineHeight: 1.65, color: "var(--ink-soft)" }}>Mechanical speed in excess of 3'100 swabs per minute. Compatible with paper, plastic and wood sticks. Pairs upstream with the PRX paper-stick machine and downstream with different packaging configurations.



            </p>
            <a href="#cb1" className="btn btn--primary" style={{ marginTop: 36 }}>View CB1 specification<span className="arrow" /></a>
          </div>
          <ImageSlot label="CB1 4.1, front 3/4 product shot" ratio="4 / 5" />
        </div>
      </section>

      {/* 3. MACHINERY, three families */}
      <section style={{ padding: "120px 0", background: "var(--bg-band)", borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <SectionLabel num="01">Machinery</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "end", marginBottom: 72 }}>
            <h2 style={{ fontSize: 52, lineHeight: 1.0, letterSpacing: "-0.03em" }}>
              Production machinery, from single machines to fully integrated lines.
            </h2>
            <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65 }}>
              Three families of machines, each engineered as a complete production line. Choose
              the family that matches your product and we'll specify the line around it.
            </p>
          </div>

          <div style={famB.list}>
            {[
            {
              num: "01",
              title: "Cotton Swab Production",
              desc: "Machinery and integrated production systems for automated cotton swab manufacturing. Flexible packaging formats, scalable automation, compatible with paper, wood and polypropylene sticks.",
              machines: "CB1 · SV2 · BV/ABS · RB-30A · SQB-2A · BL-12",
              cta: "Cotton Swab Machinery",
              href: "#cotton-swab-machinery",
              imgLabel: "Cotton swab production line"
            },
            {
              num: "02",
              title: "Cotton Pad Production",
              desc: "Machinery for round and square cosmetic pads. Two production capacities for entry and high-volume operations, plus a dedicated automated packing line.",
              machines: "WR-600 V · WR-2100 · VP",
              cta: "Cotton Pad Machinery",
              href: "#cotton-pad-machinery",
              imgLabel: "Cotton pad production line"
            },
            {
              num: "03",
              title: "Paper Stick Production",
              desc: "Dedicated machinery for efficient, zero-waste paper stick manufacturing. Designed for standalone production or seamless integration into automated cotton swab production systems.",
              machines: "PRX",
              cta: "Paper Stick Machinery",
              href: "#prx",
              imgLabel: "PRX paper stick production machine"
            }].
            map((f, i) =>
            <div key={f.num} style={{ ...famB.row, flexDirection: i % 2 ? "row-reverse" : "row" }}>
                <div style={famB.imageCol}>
                  <ImageSlot label={f.imgLabel} ratio="4 / 3" />
                </div>
                <div style={famB.textCol}>
                  <h3 style={{ fontSize: 36, lineHeight: 1.1, letterSpacing: "-0.02em" }}>{f.title}</h3>
                  <p style={{ marginTop: 18, color: "var(--ink-soft)", fontSize: 16, lineHeight: 1.65, maxWidth: 520 }}>{f.desc}</p>
                  <div className="mono" style={famB.machines}>{f.machines}</div>
                  <a href={f.href} className="btn btn--minimal" style={{ marginTop: 24 }}>View {f.cta}<span className="arrow" /></a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. PRODUCTION PLANNING, visually distinct */}
      <section style={planning.wrap}>
        <div className="container">
          <div style={planning.frame}>
            <div style={planning.left}>
              <h2 style={{ fontSize: 44, color: "#fff", lineHeight: 1.05 }}>
                Production planning<br />& factory layout.
              </h2>
              <p style={{ marginTop: 24, color: "#9ab3cc", fontSize: 16, lineHeight: 1.65, maxWidth: 520 }}>
                Engineering services covering material flow, line integration and operational
                scalability. Before a single machine is specified, our engineers help structure
                the plant around your output target, footprint and capacity roadmap.
              </p>
              <a href="#machinery" className="btn btn--primary" style={{ marginTop: 32 }}>Production Planning & Layout<span className="arrow" /></a>
            </div>
            <div style={planning.right}>
              {[
              ["A", "Output targets", "Volume, mix, throughput planning"],
              ["B", "Production flow", "Material flow & line integration"],
              ["C", "Layout", "Factory footprint & expansion"],
              ["D", "Scalability", "Capacity roadmap, phased rollout"]].
              map(([k, t, d]) =>
              <div key={k} style={planning.tile}>
                  <div className="mono" style={planning.tileKey}>{k}</div>
                  <div style={planning.tileTitle}>{t}</div>
                  <div style={planning.tileDesc}>{d}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY FALU */}
      <section style={{ padding: "120px 0", borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <SectionLabel num="02">Why Falu</SectionLabel>
          <h2 style={{ fontSize: 56, maxWidth: 1000, lineHeight: 1.02, letterSpacing: "-0.03em" }}>
            Market leader in product quality, efficiency, and total cost of ownership.
          </h2>
          <p style={{ marginTop: 28, fontSize: 17, color: "var(--ink-soft)", maxWidth: 720, lineHeight: 1.65 }}>
            Since 1965, Falu machines have been designed and assembled in Switzerland and operate
            in more than 70 countries, valued for longevity, reliability and serviceability.
          </p>

          <div style={whyB.grid}>
            {[
            {
              head: "Designed for long-term value",
              body: "Falu supports manufacturers with a long-term focus on total cost of ownership and operational stability. Machines are designed for extended service lives, many installations have been operating reliably for over 40 years."
            },
            {
              head: "Engineering excellence",
              body: "Sixty years building exclusively this category of machinery. Specialised technicians and engineers combine precision, deep category experience and modern engineering practice, there is no second specialty."
            },
            {
              head: "Spare parts guarantee",
              body: "Falu ensures spare parts availability across the entire machine lifecycle, independent of installation date. Long-term production security for existing and future systems, a guarantee, not a warranty window."
            },
            {
              head: "Global support",
              body: "Falu supports customers worldwide through commissioning, training and operation. On-site and remote assistance keeps production stable wherever machines are installed."
            }].
            map((v, i) =>
            <div key={i} style={whyB.cell}>
                <div className="mono" style={whyB.cellNum}>{String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ marginTop: 16, fontSize: 24 }}>{v.head}</h3>
                <p style={{ marginTop: 16, color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.65 }}>{v.body}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. PROVEN WORLDWIDE */}
      <section style={{ padding: "120px 0", background: "var(--bg-band)", borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <SectionLabel num="03">Proven worldwide</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "end", marginBottom: 64 }}>
            <h2 style={{ fontSize: 52, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
              Falu machines run in more than 70 countries.
            </h2>
            <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65 }}>
              From single CB1 installations to fully integrated multi-line plants, Falu equipment
              is in operation across the health, beauty and food industries on six continents.
            </p>
          </div>

          <WorldMap />
        </div>
      </section>

      {/* 7. ONE PARTNER FROM CONCEPT TO OPERATION */}
      <section style={{ padding: "120px 0", borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <SectionLabel num="04">Scope & support</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "end", marginBottom: 72 }}>
            <h2 style={{ fontSize: 56, lineHeight: 1.0, letterSpacing: "-0.03em" }}>
              One partner from concept to operation.
            </h2>
            <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65 }}>Falu delivers support across planning, commissioning and long-term production, by the same engineers who built your machine.


            </p>
          </div>

          <div style={journey.wrap}>
            {[
            {
              phase: "01",
              title: "Production concept & layout",
              items: [
              "Understanding product and output targets",
              "Defining production flow",
              "Factory layout considerations"]

            },
            {
              phase: "02",
              title: "Commissioning & ramp-up",
              items: [
              "Installation",
              "On-site and remote operator training",
              "Production start-up"]

            },
            {
              phase: "03",
              title: "Long-term operation",
              items: [
              "Spare parts",
              "Retrofits & upgrades",
              "On-site and remote support"]

            }].
            map((p, i, arr) =>
            <div key={p.phase} style={{ ...journey.col, ...(i === arr.length - 1 ? { borderRight: "1px solid var(--rule)" } : {}) }}>
                <div style={journey.head}>
                  <div className="mono" style={journey.phase}>PHASE {p.phase}</div>
                  <h3 style={{ marginTop: 14, fontSize: 22 }}>{p.title}</h3>
                </div>
                <ul style={journey.list}>
                  {p.items.map((it) =>
                <li key={it} style={journey.item}>
                      <span className="mono" style={journey.itemDot}>,</span>
                      <span>{it}</span>
                    </li>
                )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 8. CONVERSION */}
      <section style={ctaB.wrap}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#fff", fontSize: 56, maxWidth: 1100, marginLeft: "auto", marginRight: "auto", lineHeight: 1.05 }}>
            Whether you are defining a new production concept or specifying machines, we help you structure the right setup.
          </h2>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 40 }}>
            <a href="#contact" className="btn btn--primary btn--lg">Discuss your production project<span className="arrow" /></a>
            <a href="tel:+41552255151" className="btn btn--ghost btn--lg" style={{ borderColor: "#9ab3cc", color: "#fff" }}>
              +41 55 225 51 51
            </a>
          </div>
        </div>
      </section>

      <FaluFooter />
    </div>);

};

// ============ WORLD MAP ============
const FALU_COUNTRIES = new Set([
"US", "CA", "MX", "BR", "CL", "PE", "PR", "PA", "CO", "VE", "EC", "UY", "AR",
"IS", "IE", "GB", "FR", "BE", "CH", "DE", "AT", "DK", "SE", "FI",
"UA", "RU", "GR", "BG", "RS", "RO", "HU", "CZ", "IT", "ES", "PT", "LT", "MK", "HR",
"TR", "AM", "IR", "IQ", "IL", "JO", "LB", "AE", "BH",
"EG", "LY", "TN", "DZ", "ML", "CI", "BJ", "NG", "KE", "ZW", "ZA",
"PK", "IN", "TH", "VN", "MY", "ID", "PH",
"CN", "KR", "TW", "JP",
"AU", "NZ"]
);

const NUM_TO_A2 = { "004": "AF", "008": "AL", "012": "DZ", "024": "AO", "032": "AR", "036": "AU", "040": "AT", "048": "BH", "050": "BD", "051": "AM", "056": "BE", "068": "BO", "070": "BA", "072": "BW", "076": "BR", "100": "BG", "104": "MM", "108": "BI", "112": "BY", "116": "KH", "120": "CM", "124": "CA", "140": "CF", "144": "LK", "148": "TD", "152": "CL", "156": "CN", "158": "TW", "170": "CO", "178": "CG", "180": "CD", "188": "CR", "191": "HR", "192": "CU", "196": "CY", "203": "CZ", "204": "BJ", "208": "DK", "214": "DO", "218": "EC", "222": "SV", "226": "GQ", "231": "ET", "232": "ER", "233": "EE", "242": "FJ", "246": "FI", "250": "FR", "260": "TF", "262": "DJ", "266": "GA", "268": "GE", "270": "GM", "275": "PS", "276": "DE", "288": "GH", "300": "GR", "320": "GT", "324": "GN", "328": "GY", "332": "HT", "340": "HN", "348": "HU", "352": "IS", "356": "IN", "360": "ID", "364": "IR", "368": "IQ", "372": "IE", "376": "IL", "380": "IT", "384": "CI", "388": "JM", "392": "JP", "398": "KZ", "400": "JO", "404": "KE", "408": "KP", "410": "KR", "414": "KW", "417": "KG", "418": "LA", "422": "LB", "426": "LS", "428": "LV", "430": "LR", "434": "LY", "440": "LT", "442": "LU", "450": "MG", "454": "MW", "458": "MY", "466": "ML", "478": "MR", "484": "MX", "496": "MN", "498": "MD", "499": "ME", "504": "MA", "508": "MZ", "512": "OM", "516": "NA", "524": "NP", "528": "NL", "540": "NC", "548": "VU", "554": "NZ", "558": "NI", "562": "NE", "566": "NG", "578": "NO", "586": "PK", "591": "PA", "598": "PG", "600": "PY", "604": "PE", "608": "PH", "616": "PL", "620": "PT", "624": "GW", "626": "TL", "630": "PR", "634": "QA", "642": "RO", "643": "RU", "646": "RW", "682": "SA", "686": "SN", "688": "RS", "694": "SL", "702": "SG", "703": "SK", "704": "VN", "705": "SI", "706": "SO", "710": "ZA", "716": "ZW", "724": "ES", "728": "SS", "729": "SD", "740": "SR", "748": "SZ", "752": "SE", "756": "CH", "760": "SY", "762": "TJ", "764": "TH", "768": "TG", "780": "TT", "784": "AE", "788": "TN", "792": "TR", "795": "TM", "800": "UG", "804": "UA", "807": "MK", "818": "EG", "826": "GB", "834": "TZ", "840": "US", "854": "BF", "858": "UY", "860": "UZ", "862": "VE", "887": "YE", "894": "ZM" };

function WorldMap() {
  const [paths, setPaths] = React.useState(null);
  React.useEffect(() => {
    let cancelled = false;
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json").
    then((r) => r.json()).
    then((world) => {
      if (cancelled) return;
      const features = window.topojson.feature(world, world.objects.countries).features;
      const projection = window.d3.geoEqualEarth().fitSize([1200, 560], { type: "Sphere" });
      const path = window.d3.geoPath(projection);
      setPaths(features.map((f) => {
        const num = String(f.id).padStart(3, "0");
        return { d: path(f), a2: NUM_TO_A2[num] };
      }).filter((p) => p.d));
    });
    return () => {cancelled = true;};
  }, []);

  return (
    <div style={{ background: "#021a33", border: "1px solid #0c3056", padding: "24px", position: "relative" }}>
      <svg viewBox="0 0 1200 560" style={{ width: "100%", display: "block" }}>
        {paths ? paths.map((p, i) => {
          const isHQ = p.a2 === "CH";
          const isFalu = p.a2 && FALU_COUNTRIES.has(p.a2);
          return (
            <path
              key={i}
              d={p.d}
              fill={isHQ ? "var(--falu-red)" : isFalu ? "#d1d5db" : "#0c3056"}
              stroke="#021a33"
              strokeWidth="0.5" />);


        }) :
        <text x="600" y="280" textAnchor="middle" fill="#9ab3cc" fontFamily="var(--font-mono)" fontSize="12">Loading map...</text>
        }
      </svg>
      <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #0c3056", display: "flex", gap: 24, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.06em", color: "#9ab3cc", textTransform: "uppercase", flexWrap: "wrap" }}>
        <span><span style={{ display: "inline-block", width: 10, height: 10, background: "var(--falu-red)", marginRight: 8, verticalAlign: "middle" }} />HQ, Rüti CH</span>
        <span><span style={{ display: "inline-block", width: 10, height: 10, background: "#d1d5db", marginRight: 8, verticalAlign: "middle" }} />Country with Falu installations</span>
        <span style={{ marginLeft: "auto" }}>70+ countries served since 1965</span>
      </div>
    </div>);

}

// ========= STYLES =========
const heroB = {
  wrap: { position: "relative" },
  overlay: { position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", paddingBottom: 56, background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.55) 100%)" },
  overlayInner: {},
  eyebrow: { color: "#fff", fontSize: 11, letterSpacing: "0.2em", opacity: 0.9 },
  title: { color: "#fff", fontSize: 96, lineHeight: 0.98, marginTop: 24, letterSpacing: "-0.035em", fontWeight: 600 },
  subRow: { display: "flex", gap: 64, alignItems: "center", padding: "56px 32px", borderBottom: "1px solid var(--rule)" },
  lede: { fontSize: 19, color: "var(--ink-soft)", lineHeight: 1.6, maxWidth: 640 },
  ribbon: { padding: "32px 0", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", borderBottom: "1px solid var(--rule)" },
  ribbonCell: { padding: "0 24px", borderRight: "1px solid var(--rule)" },
  ribbonNum: { fontSize: 24, fontWeight: 600, color: "var(--navy)", letterSpacing: "-0.01em" },
  ribbonLabel: { marginTop: 8, fontSize: 12, color: "var(--ink-soft)" }
};

const featB = {
  tag: { fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase" },
  specGrid: { marginTop: 36, display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid var(--rule)", borderLeft: "1px solid var(--rule)" },
  specCell: { padding: "18px 20px", borderRight: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" },
  specKey: { fontSize: 10, color: "var(--ink-muted)", letterSpacing: "0.18em" },
  specVal: { marginTop: 6, fontSize: 16, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.005em" }
};

const famB = {
  list: { display: "flex", flexDirection: "column", gap: 96 },
  row: { display: "flex", gap: 64, alignItems: "center" },
  imageCol: { flex: "1 1 0", minWidth: 0 },
  textCol: { flex: "1 1 0", minWidth: 0 },
  num: { fontSize: 11, color: "var(--falu-red)", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500 },
  machines: { marginTop: 20, padding: "10px 0", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", color: "var(--navy)", fontSize: 13, letterSpacing: "0.04em" }
};

const planning = {
  wrap: { padding: "80px 0", background: "var(--navy)", borderTop: "4px solid var(--falu-red)" },
  frame: { display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "center" },
  left: {},
  tag: { color: "var(--falu-red)", fontSize: 11, letterSpacing: "0.2em" },
  right: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid #103e6c", borderLeft: "1px solid #103e6c" },
  tile: { padding: "28px 24px", borderRight: "1px solid #103e6c", borderBottom: "1px solid #103e6c" },
  tileKey: { color: "var(--falu-red)", fontSize: 11, letterSpacing: "0.2em" },
  tileTitle: { marginTop: 14, color: "#fff", fontSize: 17, fontWeight: 600 },
  tileDesc: { marginTop: 8, color: "#9ab3cc", fontSize: 13, lineHeight: 1.55 }
};

const whyB = {
  grid: { marginTop: 80, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 },
  cell: { padding: "0" },
  cellNum: { fontSize: 11, color: "var(--falu-red)", letterSpacing: "0.18em", fontWeight: 500 }
};

const mapStats = {
  row: { marginTop: 32, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid var(--rule)" },
  cell: { padding: "20px 16px 0 0", borderRight: "1px solid var(--rule)" },
  num: { fontSize: 22, fontWeight: 600, color: "var(--navy)", letterSpacing: "-0.01em" },
  label: { marginTop: 6, fontSize: 12, color: "var(--ink-soft)" }
};

const journey = {
  wrap: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderTop: "2px solid var(--navy)", borderLeft: "1px solid var(--rule)" },
  col: { padding: "32px 28px 36px", borderRight: "1px solid var(--rule)", background: "#fff" },
  head: {},
  phase: { fontSize: 11, color: "var(--falu-red)", letterSpacing: "0.2em", fontWeight: 500 },
  list: { marginTop: 24, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 },
  item: { display: "flex", gap: 12, alignItems: "flex-start", color: "var(--ink-soft)", fontSize: 15 },
  itemDot: { color: "var(--falu-red)", marginTop: 2 }
};

const ctaB = {
  wrap: { padding: "120px 0", background: "var(--navy)" }
};