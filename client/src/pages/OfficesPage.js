import React from "react";
import Header from "../components/Header";
import Offices from "../components/Offices/Offices";

const OfficesPage = () => {
  return (
    <>
      <Header bgHeader="header-bg-4" mainTitle="Офисы в аренду" />
      <Offices />
    </>
  );
};

export default OfficesPage;
