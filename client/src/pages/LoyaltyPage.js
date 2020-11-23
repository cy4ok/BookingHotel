import React from "react";
import HeaderBrown from "../components/HeaderBrown";
import HeaderBrownTitle from '../components/HeaderBrownTitle';
import Loyalty from "../components/Loyalty";
import Footer from "../components/Footer"

const LoyaltyPage = () => {
  return (
    <>
      <HeaderBrown />
      <HeaderBrownTitle title="Программа лояльности" />
      <Loyalty />
      <Footer />
    </>
  );
};

export default LoyaltyPage;
