import React from "react";
import Booking from "../components/Booking";
import Header from "../components/Header";
import ChoiceRooms from "../components/ChoiceRooms";
import Tariffs from "../components/Tariffs";

const BookingPage = () => {
  return (
    <>
      <Header title="Заявка на бронирование" />
      <Booking /> 
      <ChoiceRooms guests="2" days="2" />
      <Tariffs guests="2" days="2" priceday="2900" />
    </>
  );
};

export default BookingPage;
