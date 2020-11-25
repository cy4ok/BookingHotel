import React from "react";
import ArtStudio from "../components/ArtStudio";
import Discounts from "../components/Discounts";
import Header from "../components/Header/Header";
import Offer from "../components/Offer";
import CorpOffer from "../components/CorpOffer/CorpOffer";
import Search from "../components/Search/Search";

const MainPage = () => {
  return (
    <>
      <Header
        bgHeader="header-bg-1"
        smallTitle="ДОМ ВДАЛИ ОТ ДОМА"
        mainTitle="ARTSTUDIO - апарт-отель в Санкт-Петербурге"
      />
      <Search />
      <Offer />
      <ArtStudio />
      <CorpOffer />
      <Discounts title="Текущие акции" />
    </>
  );
};

export default MainPage;
