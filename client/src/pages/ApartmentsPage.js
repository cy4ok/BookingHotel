import React from "react";
import Header from "../components/Header";
//import OurAdvantages from "../components/OurAdvantages";
import Footer from "../components/Footer";
import Infrastructure from "../components/Infrastructure"

const ApartmentsPage = () => {
  return (
    <>
      <Header bgHeader="header-bg-2" smallTitle="от 2 800 руб." mainTitle="ARTSTUDIO Nevsky" address="ул. 2-ая Советская, 4Б, стр.1"/>
      {/* <OurAdvantages /> */}
      <Infrastructure />
      <Footer />
    </>
  );
};

export default ApartmentsPage;
