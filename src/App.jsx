import AppRouter from "src/routes/index";

import IsNavStickyContextProvider from "./contexts/isNavSticky";
import ShowMobileMenuContextProvider from "./contexts/showMobileMenu.jsx";
import ColorsContextProvider from "./contexts/colors";
import CartContextProvider from "./contexts/cart.jsx";
import ProductContextProvider from "./contexts/category.jsx";
import UserDataProvider from "./contexts/userData";

import AuthContextProvider from "./contexts/AuthContext";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        <AuthContextProvider>
          <ProductContextProvider>
            <IsNavStickyContextProvider>
              <ShowMobileMenuContextProvider>
                <ColorsContextProvider>
                  <UserDataProvider>
                    <AppRouter />
                  </UserDataProvider>
                </ColorsContextProvider>
              </ShowMobileMenuContextProvider>
            </IsNavStickyContextProvider>
          </ProductContextProvider>
        </AuthContextProvider>
      </CartContextProvider>
    </QueryClientProvider>
  );
}

export default App;
