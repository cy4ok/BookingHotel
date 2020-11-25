import React from "react";
import Header from "../components/Header";
import Offices from "../components/Offices/Offices";

const OfficesPage = () => {
  return (
    <div id="OfficesPage">
      <Header title="Офисы в аренду" />
      <Offices />
    </div>
  );
};

export default OfficesPage;
