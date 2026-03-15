import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MoleProvider } from "./Components/MoleContext/MoleContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MoleProvider>
      <App />
    </MoleProvider>
  </StrictMode>,
);
