import React from "react";
import { Route, Routes as AppRoutes } from "react-router-dom";
import { routes } from "../constants/routes";
import ComingSoonPage from "../pages/ComingSoon";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";

export default function Routes() {
  return (
    <AppRoutes>
      {routes
        .filter((r) => r.component !== "")
        .map((route, i) => (
          <Route
            key={i}
            index={route.title === "Home" ? true : false}
            path={route.url}
            element={<route.component />}
          />
        ))}
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<ComingSoonPage />} />
    </AppRoutes>
  );
}
