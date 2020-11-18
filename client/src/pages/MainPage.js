import React from "react";
import Apartments from "../components/Apartments";
import ArtStudio from "../components/ArtStudio";
import Discounts from "../components/Discounts";
import Header from "../components/Header/Header";
import Offer from "../components/Offer";

const MainPage = () => {
  return (
    <>
      <Header />
      <Offer />
      <ArtStudio />
      {/* <Apartments title="Апартементы и планировки" /> */}
      <Discounts title="Текущие акции" />
    </>
  );
};

export default MainPage;
