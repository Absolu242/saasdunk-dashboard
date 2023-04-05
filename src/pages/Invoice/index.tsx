import React from "react";
import { MainLayout } from "../../components/Layout";
import { InvoiceView } from "../../components/_view/InvoiceView";

export default function InvoicePage() {
  return (
    <MainLayout>
      <InvoiceView />
    </MainLayout>
  );
}
