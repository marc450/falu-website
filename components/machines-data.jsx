/* Machine data registry for the data-driven MachineDetail page.
 * Each entry is grounded in supplied fact sheets / live-site content.
 * RB-2 is from falu.com live site. Others marked PLACEHOLDER await
 * fact sheets, hard specs shown as [TBC].
 */
window.FALU_MACHINES = {

  // ===== RB-2: from falu.com live site (verified) =====
  "rb2": {
    code: "RB-2",
    family: "Cotton Pad Machinery",
    name: "Cotton pad bagging machine",
    lede: "Fully automatic packing machine that fills polybags or paper bags with cotton pads. Designed to run with the WR-2100 S cutting machine, receiving pads through metal cassettes and sealing each bag by heat stamp.",
    heroImage: "RB-2, full unit",
    thumbs: ["Cassette infeed", "Bagging mold", "Heat-seal unit"],
    featuresHeadline: "Automated bagging,\nfrom cassette to sealed bag.",
    featuresLede: "The RB-2 connects to the WR-2100 S interface and takes over once pads are cut: it stacks, fills and seals without manual handling.",
    features: [
      ["Fully automatic", "Fills polybags or paper bags with cotton pads and seals them without manual intervention."],
      ["Cassette infeed", "Connects to the WR-2100 S interface and receives pads via metal cassettes that stack them flawlessly."],
      ["Packaging molds", "Stacked pads are pushed through packaging molds and filled into the bag, keeping the stack intact."],
      ["Heat-seal closing", "Filled bags transfer to the sealing unit and are closed automatically by heat stamp."],
      ["Format flexible", "Handles a range of bag sizes and pad shapes, typically 50 to 120 pads per bag."],
      ["Lifecycle support", "Spare parts guaranteed for the entire life of the machine, serviced by FALU from Rüti."]
    ],
    techLede: "Verified specifications for the RB-2. Output depends on bag size and pad format.",
    tech: [
      ["OUTPUT", "Speed", "Up to 52 bags/min (depending on bag size and pad format)"],
      ["", "Bag contents", "Typically 50 to 120 cotton pads"],
      ["PACKAGING", "Bag types", "Polybags or paper bags"],
      ["", "Sealing", "Automatic, heat stamp"],
      ["INFEED", "Source machine", "WR-2100 S cutting machine"],
      ["", "Transfer", "Metal cassettes via WR-2100 S interface"],
      ["CERTIFICATION", "Compliance", "CE certified"]
    ],
    lineHeadline: "The RB-2 is the packing stage of the cotton pad line.",
    lineLede: "Pads are produced and cut by the WR-2100 S, then transferred to the RB-2 for bagging and sealing.",
    line: [
      { stage: "01 · PAD PRODUCTION", code: "WR-2100 S", label: "Cotton pad cutting", href: "#wr2100" },
      { stage: "02 · PACKING", code: "RB-2", label: "Bagging & sealing", current: true },
      { stage: "OUTPUT", code: "Bagged pads", label: "Sealed polybags or paper bags" }
    ],
    ctaHeadline: "Packing cotton pads, or planning a complete pad line?"
  },

  // ===== SV-2X: from FALU fact sheet (verified) =====
  "sv2x": {
    code: "SV-2X",
    family: "Cotton Swab Machinery",
    name: "Cardboard box packing machine",
    lede: "Fully automatic cardboard box packing machine for FALU CT and CB swab lines. It erects, fills, closes and seals flat pre-glued cartons, turning bulk swab output into a compact, retail-ready package and replacing plastic packaging with cardboard.",
    heroImage: "SV-2X, full unit",
    thumbs: ["Carton magazine", "Press module", "Hotmelt sealing"],
    featuresHeadline: "Bulk swab output to\nsealed retail carton.",
    featuresLede: "The SV-2X synchronises directly with the CB1, taking swabs straight from production and presenting them in a printable cardboard box, all without manual handling.",
    features: [
      ["Carton feeding", "Flat cartons are supplied in stacks, with a standard magazine capacity of around 200 cartons."],
      ["Automatic erection", "Cartons are automatically opened and positioned for filling."],
      ["Swab filling & layering", "Swabs transfer directly from the production machine into predefined layer configurations, for example 10 × 20 for a 200-count box."],
      ["Press stabilisation", "An integrated press module compacts the layers for dimensional stability and transport durability."],
      ["Closing & sealing", "Box flaps are folded and sealed automatically with hotmelt adhesive."],
      ["Sustainable presentation", "A printable cardboard format supports the move away from plastic and gives a high-quality retail surface for branding."]
    ],
    techLede: "Verified specifications for the SV-2X. Output depends on carton size and raw material quality.",
    tech: [
      ["OUTPUT", "Speed", "Up to 14 boxes/min (depending on carton size and material)"],
      ["", "Matched to", "CB1 maximum production speed"],
      ["CARTON", "Supply", "Flat, pre-folded, pre-glued cartons"],
      ["", "Magazine capacity", "Approx. 200 cartons"],
      ["", "Filling range", "60 to 400 swabs (higher counts on request)"],
      ["", "Layer configuration", "12 to 25 swabs per layer (other counts on request)"],
      ["SEALING", "Method", "Hotmelt glue"],
      ["COMPATIBILITY", "Machines", "All FALU CT and CB1 machinery"],
      ["CERTIFICATION", "Compliance", "CE certified"]
    ],
    lineHeadline: "The SV-2X is the cardboard packing stage of the swab line.",
    lineLede: "Swabs are formed by the CB1, then transferred directly to the SV-2X for cartoning, with no manual handling between the two.",
    line: [
      { stage: "01 · STICK PRODUCTION", code: "PRX", label: "Paper stick production", href: "#prx" },
      { stage: "02 · SWAB PRODUCTION", code: "CB1 4.1", label: "Cotton swab forming", href: "#cb1" },
      { stage: "03 · PACKING", code: "SV-2X", label: "Cardboard box packing", current: true }
    ],
    ctaHeadline: "Moving cotton swab packing to cardboard, or planning a complete line?"
  },

  // ===== RB-30A: from FALU fact sheet (verified) =====
  "rb30a": {
    code: "RB-30A",
    family: "Cotton Swab Machinery",
    name: "Round box packing machine",
    lede: "Fully automatic packing machine that fills round boxes with cotton swabs. Combines with all FALU CT and CB swab machines to dispense boxes, fill a predefined swab count, and close them with their lids.",
    heroImage: "RB-30A, full unit",
    thumbs: ["Box dispenser", "Transfer wheel", "Lid closing unit"],
    featuresHeadline: "Round boxes, dispensed,\nfilled and closed.",
    featuresLede: "The RB-30A handles the full round-box cycle, gently and consistently, from box dispensing through gripper-placed filling to automatic lid closing.",
    features: [
      ["Automatic dispensing", "Automatic round box dispenser plus automatic lid dispensing and closing for fully automated packaging cycles."],
      ["Storing disc system", "Controlled positioning of round jars throughout the packaging process."],
      ["Presence detection", "Sensors verify correct placement of jars before filling."],
      ["Shaped transfer wheel", "Precise transport of containers between stations, with a moving gripper unit placing swabs accurately."],
      ["PLC control", "PLC-controlled electrical system for stable, precise operation."],
      ["Protection cabin", "Aluminium rails and polycarbonate panels keep operators safe while maintaining visibility of the process."]
    ],
    techLede: "Verified specifications for the RB-30A. Output depends on container size and raw material quality.",
    tech: [
      ["OUTPUT", "Production speed", "Up to 25 boxes/min"],
      ["", "Swabs per box", "50 to 300 swabs"],
      ["PACKAGING", "Container", "Round boxes, plastic or cardboard"],
      ["", "Per layer", "1 set of swab quantity per layer included"],
      ["DIMENSIONS", "Length × Width × Height", "1'639 × 1'207 × 1'735 mm"],
      ["ELECTRICAL", "Voltage", "400 V / 50 Hz (transformer required for other voltages)"],
      ["", "Control system", "PLC controlled electrical system"],
      ["COMPATIBILITY", "Machines", "All FALU CT and CB machinery"],
      ["CERTIFICATION", "Compliance", "CE certified"]
    ],
    lineHeadline: "The RB-30A is the round-box packing stage of the swab line.",
    lineLede: "Swabs are formed by the CB1, then transferred to the RB-30A for round-box filling and lid closing.",
    line: [
      { stage: "01 · STICK PRODUCTION", code: "PRX", label: "Paper stick production", href: "#prx" },
      { stage: "02 · SWAB PRODUCTION", code: "CB1 4.1", label: "Cotton swab forming", href: "#cb1" },
      { stage: "03 · PACKING", code: "RB-30A", label: "Round box packing", current: true }
    ],
    ctaHeadline: "Packing cotton swabs into round boxes, or planning a complete line?"
  },

  // ===== BV-2M / ABS-2: from falu.com live site (verified) =====
  "polybag": {
    code: "BV-2M / ABS-2",
    family: "Cotton Swab Machinery",
    name: "Polybag packing machines",
    lede: "Two polybag packing machines for the CB1 series: the BV-2M is semi-automatic with manual sealing, the ABS-2 is fully automatic with automated sealing. Both pack cotton swabs into polyethylene or paper bags.",
    heroImage: "ABS-2, full unit",
    thumbs: ["Filling cavity", "Bag station", "Zipper-lock seal"],
    featuresHeadline: "Polybag packing,\nsemi or fully automatic.",
    featuresLede: "Swabs transfer from the production machine into a cavity, then push into the bag at the filling station. Choose manual sealing with the BV-2M or fully automated sealing with the ABS-2.",
    features: [
      ["Two automation levels", "The BV-2M is semi-automatic with manual sealing. The ABS-2 is fully automatic with automated sealing."],
      ["Direct CB1 transfer", "The production machine places swabs in a cavity on the packing machine, which moves to the filling station."],
      ["Cavity filling", "Swabs are automatically pushed into bags positioned on the machine, keeping the count consistent."],
      ["Zipper-lock & perforation", "The top of the bag can be zipper-locked, with a seal and a perforation at the top end."],
      ["Polyethylene or paper", "Bags typically hold 50 to 400 swabs. Paper bags are available to eliminate plastic."],
      ["Customisable", "Bag size and swab count can be customised on request."]
    ],
    techLede: "Verified specifications for the BV-2M and ABS-2. Output depends on bag size.",
    tech: [
      ["PACKAGING", "Type", "Polybag (polyethylene or paper)"],
      ["", "Bag contents", "50 to 400 swabs, customisable on request"],
      ["OUTPUT", "Speed", "Up to 25 bags/min (depending on bag size)"],
      ["SEALING", "BV-2M", "Manual"],
      ["", "ABS-2", "Automatic"],
      ["CLOSURE", "Top finish", "Optional zipper-lock with seal and perforation"],
      ["COMPATIBILITY", "Machines", "FALU CB and CT series"],
      ["CERTIFICATION", "Compliance", "CE certified"]
    ],
    lineHeadline: "The polybag machines are the bagging stage of the swab line.",
    lineLede: "Swabs are formed by the CB1, then transferred to the BV-2M or ABS-2 for bagging and sealing.",
    line: [
      { stage: "01 · STICK PRODUCTION", code: "PRX", label: "Paper stick production", href: "#prx" },
      { stage: "02 · SWAB PRODUCTION", code: "CB1 4.1", label: "Cotton swab forming", href: "#cb1" },
      { stage: "03 · PACKING", code: "BV-2M / ABS-2", label: "Polybag packing", current: true }
    ],
    ctaHeadline: "Packing cotton swabs into polybags, or planning a complete line?"
  },

  // ===== SQB-2A: from falu.com live site (verified) =====
  "sqb2a": {
    code: "SQB-2A",
    family: "Cotton Swab Machinery",
    name: "Square box packing machine",
    lede: "Fully automatic packing machine that fills square boxes with cotton swabs. Combines with all FALU CT and CB swab machines to erect cartons, fill a predefined swab count, and close them, producing a compact, retail-ready square pack.",
    heroImage: "SQB-2A, full unit",
    thumbs: ["Carton magazine", "Filling station", "Lid closing unit"],
    featuresHeadline: "Square boxes, erected,\nfilled and closed.",
    featuresLede: "The SQB-2A handles the full square-carton cycle automatically, from carton erection through gently filled, counted swab loads to lid closing.",
    features: [
      ["Automatic carton erection", "Flat cartons are erected automatically and presented to the filling station for a fully automated packaging cycle."],
      ["Counted filling", "A predefined quantity of swabs is filled into each box, keeping pack counts consistent."],
      ["Gentle handling", "Swabs are transferred and placed without damaging the cotton heads or sticks."],
      ["Lid closing", "Boxes are automatically closed once filled, ready for downstream cartoning or shipping."],
      ["PLC control", "PLC-controlled electrical system for stable, precise operation."],
      ["Protection cabin", "Aluminium rails and polycarbonate panels keep operators safe while keeping the process visible."]
    ],
    techLede: "Verified specifications for the SQB-2A. Output depends on box size and raw material quality.",
    tech: [
      ["OUTPUT", "Production speed", "Up to 25 boxes/min"],
      ["", "Swabs per box", "50 to 200 swabs"],
      ["PACKAGING", "Container", "Square boxes, plastic or cardboard"],
      ["", "Per layer", "1 set of swab quantity per layer included"],
      ["ELECTRICAL", "Voltage", "400 V / 50 Hz (transformer required for other voltages)"],
      ["", "Control system", "PLC controlled electrical system"],
      ["COMPATIBILITY", "Machines", "All FALU CT and CB machinery"],
      ["CERTIFICATION", "Compliance", "CE certified"]
    ],
    lineHeadline: "The SQB-2A is the square-box packing stage of the swab line.",
    lineLede: "Swabs are formed by the CB1, then transferred to the SQB-2A for square-box filling and closing.",
    line: [
      { stage: "01 · STICK PRODUCTION", code: "PRX", label: "Paper stick production", href: "#prx" },
      { stage: "02 · SWAB PRODUCTION", code: "CB1 4.1", label: "Cotton swab forming", href: "#cb1" },
      { stage: "03 · PACKING", code: "SQB-2A", label: "Square box packing", current: true }
    ],
    ctaHeadline: "Packing cotton swabs into square boxes, or planning a complete line?"
  },

  // ===== BL-12: from falu.com live site (verified) =====
  "bl12": {
    code: "BL-12",
    family: "Cotton Swab Machinery",
    name: "Blister packing machine",
    lede: "Fully automatic blister packing machine for cotton swabs. Forms blister cavities from film, fills them with a counted set of swabs, and seals them with a backing card or foil, producing tamper-evident retail blister packs.",
    heroImage: "BL-12, full unit",
    thumbs: ["Forming station", "Filling station", "Sealing unit"],
    featuresHeadline: "Blister packs, formed,\nfilled and sealed.",
    featuresLede: "The BL-12 handles the full blister cycle automatically, from thermoforming the cavity through counted swab filling to sealing a retail-ready, tamper-evident pack.",
    features: [
      ["Automatic thermoforming", "Blister cavities are formed from film on the machine, sized to the swab count and pack format."],
      ["Counted filling", "A predefined quantity of swabs is placed into each blister, keeping pack counts consistent."],
      ["Sealing", "Filled blisters are sealed with a backing card or foil for a tamper-evident, retail-ready pack."],
      ["Gentle handling", "Swabs are transferred and placed without damaging the cotton heads or sticks."],
      ["PLC control", "PLC-controlled electrical system for stable, precise operation."],
      ["Protection cabin", "Aluminium rails and polycarbonate panels keep operators safe while keeping the process visible."]
    ],
    techLede: "Verified specifications for the BL-12. Output depends on pack format and raw material quality.",
    tech: [
      ["OUTPUT", "Production speed", "Up to 12 cycles/min"],
      ["PACKAGING", "Type", "Blister pack, film with backing card or foil"],
      ["", "Per cycle", "Counted set of swabs per blister"],
      ["ELECTRICAL", "Voltage", "400 V / 50 Hz (transformer required for other voltages)"],
      ["", "Control system", "PLC controlled electrical system"],
      ["COMPATIBILITY", "Machines", "All FALU CT and CB machinery"],
      ["CERTIFICATION", "Compliance", "CE certified"]
    ],
    lineHeadline: "The BL-12 is the blister packing stage of the swab line.",
    lineLede: "Swabs are formed by the CB1, then transferred to the BL-12 for blister forming, filling and sealing.",
    line: [
      { stage: "01 · STICK PRODUCTION", code: "PRX", label: "Paper stick production", href: "#prx" },
      { stage: "02 · SWAB PRODUCTION", code: "CB1 4.1", label: "Cotton swab forming", href: "#cb1" },
      { stage: "03 · PACKING", code: "BL-12", label: "Blister packing", current: true }
    ],
    ctaHeadline: "Packing cotton swabs into blister packs, or planning a complete line?"
  },

  // ===== WR-600 V: from falu.com live site (verified) =====
  "wr600": {
    code: "WR-600 V",
    family: "Cotton Pad Machinery",
    name: "Cotton pad production machine",
    lede: "Entry-capacity cotton pad production machine. Forms, embosses and cuts round or oval cosmetic pads from a cotton web, then stacks them ready for packing. A compact, flexible choice for emerging and specialty production.",
    heroImage: "WR-600 V, full unit",
    thumbs: ["Cotton web infeed", "Embossing roller", "Stacking unit"],
    featuresHeadline: "Round and oval pads,\nformed, embossed and cut.",
    featuresLede: "The WR-600 V turns a cotton web into finished, embossed and stacked cosmetic pads, with format flexibility for round and oval shapes.",
    features: [
      ["Web forming", "Pads are formed continuously from a cotton web, keeping shape and density consistent."],
      ["Embossing", "Decorative or functional embossing is applied to each pad during production."],
      ["Round or oval", "Format flexibility for round and oval pads, changed over with tooling."],
      ["Automatic stacking", "Finished pads are counted and stacked, ready for the packing stage."],
      ["PLC control", "PLC-controlled electrical system for stable, precise operation."],
      ["Compact footprint", "A small-footprint machine suited to emerging and specialty production."]
    ],
    techLede: "Verified specifications for the WR-600 V. Output depends on pad size and material quality.",
    tech: [
      ["OUTPUT", "Production speed", "Up to 600 pads/min"],
      ["PRODUCT", "Pad shape", "Round or oval"],
      ["", "Material", "Cotton, viscose and blends"],
      ["ELECTRICAL", "Voltage", "400 V / 50 Hz (transformer required for other voltages)"],
      ["", "Control system", "PLC controlled electrical system"],
      ["COMPATIBILITY", "Packing", "FALU RB-2 cotton pad packing machine"],
      ["CERTIFICATION", "Compliance", "CE certified"]
    ],
    lineHeadline: "The WR-600 V is the entry-capacity pad production stage.",
    lineLede: "The WR-600 V forms and stacks cosmetic pads, then the RB-2 bags and seals them.",
    line: [
      { stage: "01 · PAD PRODUCTION", code: "WR-600 V", label: "Cotton pad forming", current: true },
      { stage: "02 · PACKING", code: "RB-2", label: "Bagging and sealing", href: "#rb2" }
    ],
    ctaHeadline: "Starting cotton pad production, or planning a complete line?"
  },

  // ===== WR-2100 S: from falu.com live site (verified) =====
  "wr2100": {
    code: "WR-2100 S",
    family: "Cotton Pad Machinery",
    name: "Cotton pad production machine",
    lede: "High-volume cotton pad production machine. Forms, embosses and cuts round or oval cosmetic pads from a cotton web at high speed, then stacks them ready for packing. The flagship pad machine for established, high-output operations.",
    heroImage: "WR-2100 S, full unit",
    thumbs: ["Cotton web infeed", "Embossing roller", "Stacking unit"],
    featuresHeadline: "High-volume pads,\nformed, embossed and cut.",
    featuresLede: "The WR-2100 S turns a cotton web into finished, embossed and stacked cosmetic pads at high output, with format flexibility for round and oval shapes.",
    features: [
      ["High-speed web forming", "Pads are formed continuously from a cotton web at high output, keeping shape and density consistent."],
      ["Embossing", "Decorative or functional embossing is applied to each pad during production."],
      ["Round or oval", "Format flexibility for round and oval pads, changed over with tooling."],
      ["Automatic stacking", "Finished pads are counted and stacked, ready for the packing stage."],
      ["RB-2 interface", "A dedicated interface feeds the RB-2 packing machine via metal cassettes for a continuous inline flow."],
      ["PLC control", "PLC-controlled electrical system for stable, precise operation."]
    ],
    techLede: "Verified specifications for the WR-2100 S. Output depends on pad size and material quality.",
    tech: [
      ["OUTPUT", "Production speed", "Up to 2'100 pads/min"],
      ["PRODUCT", "Pad shape", "Round or oval"],
      ["", "Material", "Cotton, viscose and blends"],
      ["ELECTRICAL", "Voltage", "400 V / 50 Hz (transformer required for other voltages)"],
      ["", "Control system", "PLC controlled electrical system"],
      ["COMPATIBILITY", "Packing", "FALU RB-2 cotton pad packing machine"],
      ["CERTIFICATION", "Compliance", "CE certified"]
    ],
    lineHeadline: "The WR-2100 S is the high-volume pad production stage.",
    lineLede: "The WR-2100 S forms and stacks cosmetic pads, then the RB-2 bags and seals them.",
    line: [
      { stage: "01 · PAD PRODUCTION", code: "WR-2100 S", label: "Cotton pad forming", current: true },
      { stage: "02 · PACKING", code: "RB-2", label: "Bagging and sealing", href: "#rb2" }
    ],
    ctaHeadline: "Scaling up cotton pad production, or planning a complete line?"
  },

  // ===== VP-2: from falu.com live site (verified) =====
  "vp2": {
    code: "VP-2",
    family: "Cotton Pad Machinery",
    name: "Cotton pad cutting machine",
    lede: "Semi-automatic cutting machine for square and rectangular cotton pads. Pulls cotton from a roll, embosses an optional pattern, then stamps pads to size with no material waste. Up to 1'000 pads per minute, filled into bags by an operator.",
    heroImage: "VP-2, full unit",
    thumbs: ["Cotton roll infeed", "Embossing cassette", "Stamping unit"],
    featuresHeadline: "Square and rectangular pads,\ncut without waste.",
    featuresLede: "The VP-2 draws cotton from a roll, applies an optional embossed pattern, and stamps square or rectangular pads to measure. A semi-automatic machine where the operator handles final packaging.",
    features: [
      ["Roll infeed", "Cotton, or other compatible synthetics, is pulled through the machine directly from a roll."],
      ["Optional embossing", "An embossing cassette applies a surface pattern, improving pad stability and allowing a customised design."],
      ["No-waste stamping", "The stamping unit cuts pads to measure with no material waste, in square or rectangular formats."],
      ["Size flexibility", "Each pad can be cut to different square and rectangular sizes."],
      ["Material flexibility", "100% cotton, 100% rayon, or any desired combination of cotton, rayon and other artificial fibres."],
      ["Semi-automatic packaging", "Finished pads are filled into polyethylene or paper bags by an operator."]
    ],
    techLede: "Verified specifications for the VP-2. Output depends on pad size and material quality.",
    tech: [
      ["PRODUCT", "Pad shape", "Rectangular and square (without waste)"],
      ["OUTPUT", "Speed", "Up to 1'000 pads/min"],
      ["PATTERN", "Embossing", "Optional embossed pattern"],
      ["PACKAGING", "Type", "Semi-automatic (operator-filled bags)"],
      ["MATERIAL", "Cotton tape width", "max. 100 mm"],
      ["", "Materials", "100% cotton, 100% rayon, or blends"]
    ],
    lineHeadline: "The VP-2 is a standalone, semi-automatic pad machine.",
    lineLede: "The VP-2 cuts and embosses pads, then an operator fills them into bags. No separate packing machine is required.",
    line: [
      { stage: "01 · PAD PRODUCTION", code: "VP-2", label: "Cutting and embossing", current: true },
      { stage: "02 · PACKING", code: "OPERATOR", label: "Semi-automatic bagging" }
    ],
    ctaHeadline: "Producing square or rectangular cotton pads, or planning a line?"
  }

};
