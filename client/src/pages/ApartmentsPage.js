import React from "react";
import Header from "../components/Header";
import SectionBg from '../components/Header/SectionBg';
//import OurAdvantages from "../components/OurAdvantages";
import Footer from "../components/Footer";
import Infrastructure from "../components/Infrastructure"

const ApartmentsPage = () => {
  return (
    <div id="ApartmentsPage">
      <Header />
      <SectionBg smalltitle="от 2 800 руб." maintitle="ARTSTUDIO Nevsky" city="ул. 2-ая Советская, 4Б, стр.1"/>
      {/* <OurAdvantages /> */}
      <Infrastructure />
      <Footer />
    </div>
  );
};

export default ApartmentsPage;
