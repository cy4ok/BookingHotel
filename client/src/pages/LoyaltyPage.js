import React from "react";
import Header from "../components/Header";
import Loyalty from "../components/Loyalty";
import Footer from "../components/Footer"

const LoyaltyPage = () => {
  return (
    <>
      <Header title="Программа лояльности" />
      <Loyalty />
      <Footer />
    </>
  );
};

export default LoyaltyPage;
