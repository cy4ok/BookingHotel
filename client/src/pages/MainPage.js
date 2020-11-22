import React from "react";
import ArtStudio from "../components/ArtStudio";
import Discounts from "../components/Discounts";
import Header from "../components/Header/Header";
import Offer from "../components/Offer";
import CorpOffer from "../components/CorpOffer/CorpOffer"
import Footer from "../components/Footer"

const MainPage = () => {
  return (
    <>
      <Header bgHeader="images/bg-1.jpg" smallTitle="ДОМ ВДАЛИ ОТ ДОМА" mainTitle="ARTSTUDIO - апарт-отель в Санкт-Петербурге"/>
      <Offer />
      <ArtStudio />
      <CorpOffer/>
      <Discounts title="Текущие акции" />
      <Footer />
    </>
  );
};

export default MainPage;
