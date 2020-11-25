import React from "react";
import Header from "../components/Header";
import ClientsSection from "../components/Clients/ClientsSection";

function ToClients() {
  return (
    <>
      <Header bgHeader="header-bg-3" mainTitle="Корпоративная аренда квартир" />
      <ClientsSection />
    </>
  );
}

export default ToClients;
