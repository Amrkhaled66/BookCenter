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
  Checkout,
  // DashBoard Pages
  LoginAsUser,
  UserProfile,
  AddNewSubject,
  AddNewProduct,
  AddNewGrade,
  AddManualOrder,
  AdminLogInPage,
  GetUserProfile,
} from "src/pages";

import {
  ProtectedRoute,
  OnlyGuestUser,
  IfAdmin,
  OnlyAdmin,
} from "src/middleware";

import DashBoardLayout from "src/layout/DashBoardLayout";

import { ADMIN_PATH } from "src/services/defaultSettings";
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
          path="checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        >
          <Route index element={<ProfileInfo />} />
          <Route path="orders" element={<Orders />} />
          <Route path="address" element={<DeliveryInfo />} />
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
      <Route path={ADMIN_PATH}>
        <Route index element={<Navigate to="login" replace />}></Route>
        <Route path="login" element={<AdminLogInPage />}></Route>
        <Route
          path="panel"
          element={
            <OnlyAdmin>
              <DashBoardLayout />
            </OnlyAdmin>
          }
        >
          <Route path="loginAsUser" element={<LoginAsUser />} />
          <Route path="GetUserProfile" element={<GetUserProfile />} />
          <Route path="addNewSubject" element={<AddNewSubject />} />
          <Route path="addNewProduct" element={<AddNewProduct />} />
          <Route path="addNewGrade" element={<AddNewGrade />} />
          <Route path="addManualOrder" element={<AddManualOrder />} />
        </Route>
      </Route>
    </Routes>
  );
}
