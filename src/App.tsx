import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "./components/Layout";
import Routes from "./routes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes />
        </MainLayout>
      </BrowserRouter>
    </>
  );
}
