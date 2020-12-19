import React from "react";
import Booking from "../components/Booking";
import Header from "../components/Header";
import ChoiceRooms from "../components/ChoiceRooms";

const BookingPage = () => {
  return (
    <>
      <Header title="Заявка на бронирование" />
      <Booking /> 
      <ChoiceRooms adult="2" child="" />
    </>
  );
};

export default BookingPage;
