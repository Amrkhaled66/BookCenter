import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "src/layout/MainLayout";

import {
  HomePage,
  ProductPage,
  CartPage,
  LoginPage,
  SignUpPage,
  ProfilePage,
  ProfileInfo,
  Orders,
  DeliveryInfo,
} from "src/pages";
import AdminLogIn from "src/pages/DashBoard/AdminLogInPage";

import { ProtectedRoute, OnlyGuestUser } from "src/middleware";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="product/:id" element={<ProductPage />} />

        <Route
          path="cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              // <ProtectedRoute>
              <ProfileInfo />
              // </ProtectedRoute>
            }
          />
          <Route
            path="orders"
            element={
              // <ProtectedRoute>
              <Orders />
              // </ProtectedRoute>
            }
          />
          <Route
            path="address"
            element={
              // <ProtectedRoute>
              <DeliveryInfo />
              // </ProtectedRoute>
            }
          />
        </Route>
      </Route>
      <Route
        path="login"
        element={
          <OnlyGuestUser>
            <LoginPage />
          </OnlyGuestUser>
        }
      />
      <Route
        path="signup"
        element={
          <OnlyGuestUser>
            <SignUpPage />
          </OnlyGuestUser>
        }
      />
      <Route path="book-center-adminDashBoard">
        <Route index element={<Navigate to="login" replace />}></Route>
        <Route path="login" element={<AdminLogIn />}></Route>
      </Route>
    </Routes>
  );
}
