import AppRouter from "src/routes/AppRouter";

import IsNavStickyContextProvider from "./contexts/isNavSticky";
import ShowMobileMenuContextProvider from "./contexts/showMobileMenu.jsx";
import ColorsContextProvider from "./contexts/colors";
import CartContextProvider from "./contexts/cart.jsx";
import CategoryContextProvider from "./contexts/category.jsx";
import WidthContextProvider from "./contexts/widthContext";
import SideBarContextProvider from "./contexts/useSideBar";
import AdminContextProvider from "./contexts/AdminContext";
import ProductsContextProvider from "./contexts/products";

import AuthContextProvider from "./contexts/authContext";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // ✅ Data stays fresh for 5 minutes
      cacheTime: 1000 * 60 * 10, // ✅ Cached for 10 minutes
      refetchOnWindowFocus: false, // ✅ Prevents unnecessary re-fetching when switching tabs
      refetchOnReconnect: false, // ✅ Prevents refetch on internet reconnect
      retry: 1, // ✅ Retries failed queries only once
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WidthContextProvider>
        <SideBarContextProvider>
          <CartContextProvider>
            <AuthContextProvider>
              <CategoryContextProvider>
                <ProductsContextProvider>
                  <IsNavStickyContextProvider>
                    <ShowMobileMenuContextProvider>
                      <ColorsContextProvider>
                        <AdminContextProvider>
                          <AppRouter />
                        </AdminContextProvider>
                      </ColorsContextProvider>
                    </ShowMobileMenuContextProvider>
                  </IsNavStickyContextProvider>
                </ProductsContextProvider>
              </CategoryContextProvider>
            </AuthContextProvider>
          </CartContextProvider>
        </SideBarContextProvider>
      </WidthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
