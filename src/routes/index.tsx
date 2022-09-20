import React from "react";
import { Route, Routes as AppRoutes } from "react-router-dom";
import { routes } from "../constants/routes";

export default function Routes() {
  return (
    <AppRoutes>
      {routes
        .filter((r) => r.component !== "")
        .map((route) => (
          <Route path={route.url} element={<route.component />} />
        ))}
    </AppRoutes>
  );
}
