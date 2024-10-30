import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import IsNavStickyContextProvider from "./contexts/isNavSticky";
import ShowMobileMenuContextProvider from "./contexts/ShowMobileMenu";
import ColorsContextProvider from "./contexts/colors";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <IsNavStickyContextProvider>
      <ShowMobileMenuContextProvider>
        <ColorsContextProvider>
          <App />
        </ColorsContextProvider>
      </ShowMobileMenuContextProvider>
    </IsNavStickyContextProvider>
  </StrictMode>
);
