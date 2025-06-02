import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@/layout/App";
import "@fontsource-variable/inter/index.css";
import "@/styles/global.css";

const rootElement = document.querySelector<HTMLDivElement>("#root")!;
createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>
);