import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import IsNavStickyContextProvider from "./contexts/isNavSticky";
import ShowMobileMenuContextProvider from "./contexts/showMobileMenu.jsx";
import ColorsContextProvider from "./contexts/colors";
import CartContextProvider from "./contexts/cart.jsx";
import ProductContextProvider from "./contexts/products.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductContextProvider>
      <CartContextProvider>
        <IsNavStickyContextProvider>
          <ShowMobileMenuContextProvider>
            <ColorsContextProvider>
              <App />
            </ColorsContextProvider>
          </ShowMobileMenuContextProvider>
        </IsNavStickyContextProvider>
      </CartContextProvider>
    </ProductContextProvider>
  </StrictMode>,
);
