import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Policy from "../components/Policy"


const PolicyPage = () => {
  return (
    <>
      <Header bgHeader="header-bg-2"  mainTitle="Политика конфиденциальности" />
      <Policy />
      <Footer />
    </>
  );
};

export default PolicyPage;