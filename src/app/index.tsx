import { createRoot } from "react-dom";
import { App } from "./App";
import "styles/index.css";

const root = createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
