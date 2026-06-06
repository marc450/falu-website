/* global React */
// ============================================================
//  FALU site router — hash-based navigation
//  Maps URL hash -> page component. Scrolls to top on navigate.
// ============================================================

window.FaluRouter = function FaluRouter() {
  const [hash, setHash] = React.useState(getHash());

  React.useEffect(() => {
    const onHash = () => {
      setHash(getHash());
      // Jump to top on every page change.
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const Page = resolve(hash);
  return <Page />;
};

function getHash() {
  const h = (window.location.hash || "").replace(/^#/, "").trim();
  return h;
}

// Machine-detail ids handled by the shared <MachineDetail id> component.
const MACHINE_IDS = ["rb2", "sv2x", "rb30a", "polybag", "sqb2a", "bl12", "wr600", "wr2100", "vp2"];

function resolve(hash) {
  const {
    HomepageB, Machinery, CottonSwabMachinery, CottonPadMachinery,
    MachineCB1, MachinePRX, MachineDetail, Services, About, Contact, Careers, PackingMachines, Imprint, Terms, Privacy
  } = window;

  // Normalise a few aliases.
  let h = hash;
  if (h === "" || h === "home" || h === "/") return HomepageB;
  if (h === "quote") return Contact;
  if (h === "about-us") h = "about";

  const map = {
    "machinery": Machinery,
    "cotton-swab-machinery": CottonSwabMachinery,
    "cotton-pad-machinery": CottonPadMachinery,
    "packing": PackingMachines,
    "cb1": MachineCB1,
    "prx": MachinePRX,
    "services": Services,
    "about": About,
    "careers": Careers,
    "contact": Contact,
    "imprint": Imprint,
    "terms": Terms,
    "privacy": Privacy,
  };

  if (map[h]) return map[h];

  if (MACHINE_IDS.includes(h)) {
    return () => <MachineDetail id={h} />;
  }

  // Footer stubs and anything unrecognised fall back to home.
  // (careers, spare-parts, retrofits, financing, downloads, imprint, terms, privacy)
  return HomepageB;
}
