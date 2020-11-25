import React from "react";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
import Header from "../components/Header";

const BookingPage = () => {
  return (
    <>
      <Header title="Программа лояльности" />
      <Booking />
      <Footer />
    </>
  );
};

export default BookingPage;
