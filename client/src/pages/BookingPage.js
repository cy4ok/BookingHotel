import React from "react";
import Booking from "../components/Booking";
import Header from "../components/Header";

const BookingPage = () => {
  return (
    <>
      <Header title="Заявка на бронирование" />
      <Booking />
    </>
  );
};

export default BookingPage;
