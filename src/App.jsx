import AppRouter from "src/routes/AppRouter";

import IsNavStickyContextProvider from "./contexts/isNavSticky";
import ShowMobileMenuContextProvider from "./contexts/showMobileMenu.jsx";
import ColorsContextProvider from "./contexts/colors";
import CartContextProvider from "./contexts/cart.jsx";
import ProductContextProvider from "./contexts/category.jsx";
import WidthContextProvider from "./contexts/widthContext";
import SideBarContextProvider from "./contexts/useSideBar";
import AdminContextProvider from "./contexts/AdminContext";

import AuthContextProvider from "./contexts/authContext";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WidthContextProvider>
        <SideBarContextProvider>
          <CartContextProvider>
            <AuthContextProvider>
              <ProductContextProvider>
                <IsNavStickyContextProvider>
                  <ShowMobileMenuContextProvider>
                    <ColorsContextProvider>
                      <AdminContextProvider>
                        <AppRouter />
                      </AdminContextProvider>
                    </ColorsContextProvider>
                  </ShowMobileMenuContextProvider>
                </IsNavStickyContextProvider>
              </ProductContextProvider>
            </AuthContextProvider>
          </CartContextProvider>
        </SideBarContextProvider>
      </WidthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
