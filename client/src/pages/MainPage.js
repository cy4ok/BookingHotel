import React from "react";
import Apartments from "../components/Apartments";
import ArtStudio from "../components/ArtStudio";
import Discounts from "../components/Discounts";
import Header from "../components/Header/Header";
import Offer from "../components/Offer";
import CorpOffer from "../components/CorpOffer/CorpOffer"

const MainPage = () => {
  return (
    <>
      <Header />
      <Offer />
      <ArtStudio />
<<<<<<< HEAD
      {/* <Apartments title="Апартементы и планировки" /> */}
=======
      <CorpOffer/>
>>>>>>> main
      <Discounts title="Текущие акции" />
    </>
  );
};

export default MainPage;
