import React from "react";
import Header from "../components/Header";
//import OurAdvantages from "../components/OurAdvantages";
import Footer from "../components/Footer"

const ApartmentsPage = () => {
  return (
    <div id="ApartmentsPage">
      <Header smallTitle="от 2 800 руб." mainTitle="ARTSTUDIO Nevsky" address="ул. 2-ая Советская, 4Б, стр.1"/>
      {/* <OurAdvantages /> */}
      <Footer />
    </div>
  );
};

export default ApartmentsPage;
