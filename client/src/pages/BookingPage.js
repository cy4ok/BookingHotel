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
      <ChoiceRooms adult="2" child="" />
      <Tariffs adult="2" child="" nights="3" priceday="2900" />
    </>
  );
};

export default BookingPage;
