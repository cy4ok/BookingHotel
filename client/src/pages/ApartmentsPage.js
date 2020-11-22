import React from "react";
import Header from "../components/Header";
//import OurAdvantages from "../components/OurAdvantages";
import Footer from "../components/Footer"

const ApartmentsPage = () => {
  return (
    <>
      <Header bgHeader="images/bg-2.jpg" smallTitle="от 2 800 руб." mainTitle="ARTSTUDIO Nevsky" address="ул. 2-ая Советская, 4Б, стр.1"/>
      {/* <OurAdvantages /> */}
      <Footer />
    </>
  );
};

export default ApartmentsPage;
