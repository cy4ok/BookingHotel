import React from "react";
import Header from "../components/Header";
import Infrastructure from "../components/Infrastructure";
import Search from "../components/Search";

const ApartmentsPage = () => {
  return (
    <>
      <Header
        bgHeader="header-bg-2"
        smallTitle="от 2 800 руб."
        mainTitle="ARTSTUDIO Nevsky"
        address="ул. 2-ая Советская, 4Б, стр.1"
      />
      <Search />
      <Infrastructure />
      {/*  <Superior /> */}

    </>
  );
};

export default ApartmentsPage;