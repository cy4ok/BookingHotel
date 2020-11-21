import React from "react";
import Header from "../components/Header";
//import OurAdvantages from "../components/OurAdvantages";
import Footer from "../components/Footer"

const ApartmentsPage = () => {
  return (
    <div id="ApartmentsPage">
      <Header camelCase="от 2 800 руб." maintitle="ARTSTUDIO Nevsky" address="ул. 2-ая Советская, 4Б, стр.1"/>
      {/* <OurAdvantages /> */}
      <Footer />
    </div>
  );
};

export default ApartmentsPage;
