import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import MainLayout from "src/layout/MainLayout";

import {
  HomePage,
  ProductPage,
  CartPage,
  LoginPage,
  SignUpPage,
} from "src/pages";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}
