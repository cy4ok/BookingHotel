import React from "react";
import ArtStudio from "../components/ArtStudio";
import Discounts from "../components/Discounts";
import Header from "../components/Header/Header";
// import SectionBg from '../components/Header/SectionBg';
import Offer from "../components/Offer";
import CorpOffer from "../components/CorpOffer/CorpOffer"

const MainPage = () => {
  return (
    <div id="MainPage">
      <Header />
      {/* <SectionBg/> */}
      <Offer />
      <ArtStudio />
      <CorpOffer/>
      <Discounts title="Текущие акции" />
    </div>
  );
};

export default MainPage;
