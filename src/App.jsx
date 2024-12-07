import AppRouter from "src/routes/index";

import IsNavStickyContextProvider from "./contexts/isNavSticky";
import ShowMobileMenuContextProvider from "./contexts/showMobileMenu.jsx";
import ColorsContextProvider from "./contexts/colors";
import CartContextProvider from "./contexts/cart.jsx";
import ProductContextProvider from "./contexts/category.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductContextProvider>
        <CartContextProvider>
          <IsNavStickyContextProvider>
            <ShowMobileMenuContextProvider>
              <ColorsContextProvider>
                <AppRouter />
              </ColorsContextProvider>
            </ShowMobileMenuContextProvider>
          </IsNavStickyContextProvider>
        </CartContextProvider>
      </ProductContextProvider>
    </QueryClientProvider>
  );
}

export default App;
