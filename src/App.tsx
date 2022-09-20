import React from "react";
import { MainLayout } from "./layouts";
import Routes from "./routes";

export default function App() {
  return (
    <>
      <MainLayout>
        <Routes />
      </MainLayout>
    </>
  );
}
