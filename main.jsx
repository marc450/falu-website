// FALU AG website entry point.
//
// Each component module assigns itself to `window.X` as a side effect. We import
// them all (order does not matter: the only cross-component reads happen at
// render time, inside FaluRouter's resolve()), then mount the router.
import ReactDOM from "react-dom/client";

import "./styles/falu.css";

import "./components/shared.jsx";
import "./components/HomepageB.jsx";
import "./components/Machinery.jsx";
import "./components/CottonSwabMachinery.jsx";
import "./components/CottonPadMachinery.jsx";
import "./components/PackingMachines.jsx";
import "./components/MachineCB1.jsx";
import "./components/MachinePRX.jsx";
import "./components/machines-data.jsx";
import "./components/MachineDetail.jsx";
import "./components/Services.jsx";
import "./components/About.jsx";
import "./components/Careers.jsx";
import "./components/Contact.jsx";
import "./components/Imprint.jsx";
import "./components/Terms.jsx";
import "./components/Privacy.jsx";
import "./components/FaluRouter.jsx";

const { FaluRouter } = window;
// Reuse a single root across HMR re-executions of this entry; calling
// createRoot twice on the same node mounts duplicate React trees that fight
// over the DOM (broken events/state in dev).
const root = (window.__faluRoot ||= ReactDOM.createRoot(document.getElementById("root")));
root.render(<FaluRouter />);
