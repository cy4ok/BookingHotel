import React from "react";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ContactsPage = () => {
  return (
    <>
      <Header title="Контакты" />
      <Contacts />
      <Footer />
    </>
  );
};

export default ContactsPage;
