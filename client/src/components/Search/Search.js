import React, { useLayoutEffect, useState, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import Calendar from "./Calendar";
import Guests from "./Guests";
import AdultsChildren from "./AdultsChildren";
import { useHistory } from "react-router-dom";
import { formatISO } from "date-fns";
import addDays from "date-fns/addDays";

const Search = ({ initialState }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      adults: initialState?.adults || 0,
      children: initialState?.children || 0,
    },
  });
  const history = useHistory();

  const onSubmit = (data) => {
    const periodFrom = data.dates[0]?.getTime() ? data.dates[0] : new Date();
    const periodTo = data.dates[1]?.getTime() ? data.dates[1] : addDays(new Date(), 3);
    const adults = data.adults;
    const children = data.children;

    const urlParams = new URLSearchParams();
    if (periodFrom) urlParams.set("periodFrom", formatISO(periodFrom));
    if (periodTo) urlParams.set("periodTo", formatISO(periodTo));
    if (adults) urlParams.set("adults", adults);
    if (children) urlParams.set("children", children);

    history.push(`/booking?${urlParams.toString()}`);
  };

  const containerRef = useRef();
  const spanRef = useRef();
  const [hidden, setHidden] = useState(true);

  const toggleGuests = (event) => {
    console.log(event.target);
    if (
      event.target === containerRef.current ||
      event.target === spanRef.current
    )
      setHidden(!hidden);
  };

  useLayoutEffect(() => {
    const eventHandler = (event) => {
      if (!containerRef.current.contains(event.target)) {
        setHidden(true);
      }
    };

    document.addEventListener("click", eventHandler);
    return () => document.removeEventListener("click", eventHandler);
  }, []);

  return (
    <div className="flex search-section -my-10 mx-auto h-20 border-black justify-between text-grey text-lg z-30">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full border-black flex justify-between"
      >
        <Controller
          as={Calendar}
          control={control}
          defaultValue={
            initialState ? [initialState.periodFrom, initialState.periodTo] : ""
          }
          name="dates"
          className="input"
        />
        <div className="w-1/2 flex z-50">
          <div
            className="flex relative justify-center items-center border-l bg-white border-gray-300 h-full w-3/5 cursor-pointer text-gray-500"
            onClick={toggleGuests}
            ref={containerRef}
          >
            <AdultsChildren
              control={control}
              onClick={toggleGuests}
              ref={spanRef}
            />
            <div
              className={`flex flex-col absolute search-guests pointer-events-none mt-5 p-5 w-72 left-0 right-0 z-30 bg-white text-grey ${
                hidden ? "hidden" : "flex"
              }`}
            >
              <div className="flex w-full">
                <div className="w-2/3">Взрослые</div>
                <Controller as={<Guests />} name="adults" control={control} />
              </div>
              <div className="flex w-full mt-5">
                <div className="w-2/3">Дети</div>
                <Controller as={<Guests />} name="children" control={control} />
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="search-btn-submit outline-none h-full w-2/5 bg-btnGold cursor-pointer text-white uppercase text-sm font-bold relative"
            value="найти"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
