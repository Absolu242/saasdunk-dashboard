import React from "react";
import { TopBar } from "../TopBar";

type MainLayoutProps = {
  children: any;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <TopBar />
    </>
  );
};
