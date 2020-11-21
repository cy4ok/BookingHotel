import React from "react";
import ArtStudio from "../components/ArtStudio";
import Discounts from "../components/Discounts";
import Header from "../components/Header/Header";
import Offer from "../components/Offer";
import CorpOffer from "../components/CorpOffer/CorpOffer"
import RestorauntHero from "../components/Restaurant/RestaurantHero"
import RestorauntSection from "../components/Restaurant/RestaurantSection"
const MainPage = () => {
  return (
    <>
      <Header />
      <Offer />
      <ArtStudio />
      <CorpOffer/>
      <Discounts title="Текущие акции" />
      <RestorauntHero/>
      <RestorauntSection/>
    </>
  );
};

export default MainPage;
