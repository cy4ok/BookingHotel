import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import addDays from "date-fns/addDays";
import Booking from "../components/Booking";
import Header from "../components/Header";
import Search from "../components/Search";

const BookingPage = () => {
  const location = useLocation();

  const urlParams = new URLSearchParams(location.search);
  const periodFrom = urlParams.get("periodFrom");
  const periodTo = urlParams.get("periodTo");
  const adults = urlParams.get("adults") || 1;
  const children = urlParams.get("children");

  const searchState = {
    periodFrom: new Date(periodFrom) || new Date(),
    periodTo: new Date(periodTo) || addDays(new Date(), 3),
    adults: adults || 1,
    children: children || 0,
  };

  const fetchApartments = async (
    _key,
    { periodFrom, periodTo, adults, children }
  ) => {
    const urlParams = new URLSearchParams();
    if (periodFrom) urlParams.set("periodFrom", periodFrom);
    if (periodTo) urlParams.set("periodTo", periodTo);
    if (adults) urlParams.set("adults", adults);
    if (children) urlParams.set("children", children);

    return await fetch(`/booking?${urlParams.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json());
  };

  const { isLoading, isError, data, error, isIdle } = useQuery(
    ["apartments", { periodFrom, periodTo, adults, children }],
    fetchApartments, {enabled: location.search}
  );

  return (
    <>
      <Header title="Заявка на бронирование" />
      <Search initialState={searchState} />
      <Booking
        apartments={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
        isIdle={isIdle}
        adult={adults}
        child={children}
        periodFrom={periodFrom}
        periodTo={periodTo}
      />
    </>
  );
};

export default BookingPage;
