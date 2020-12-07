import React, { useLayoutEffect, useState, useRef } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "./Calendar";
import Guests from "./Guests";

const Search = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);
  const containerRef = useRef();
  const [hidden, setHidden] = useState(true);

  const toggleGuests = (event) => {
    if (event.target === containerRef.current) setHidden(!hidden);
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

  const {adults, children} = useWatch({
    control,
    name: ["adults", "children"]
  });

  const adultsPresentation = {
    one: 'взрослый',
    few: 'взрослых',
    many: 'взрослых'
  }

  const adultsPluralRule = new Intl.PluralRules('ru-RU').select(adults)
  return (
    <div className="flex search-section -my-10 mx-auto h-20 border-black justify-between text-grey text-lg">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full border-black flex justify-between"
      >
        <Controller
          as={Calendar}
          control={control}
          defaultValue={""}
          name="dates"
          className="input"
        />
        <div className="w-1/2 flex">
          <div
            className="flex relative justify-center items-center border-l bg-white border-gray-300 h-full w-3/5 cursor-pointer text-gray-500"
            onClick={toggleGuests}
            ref={containerRef}
          >
            {adults} {adultsPresentation[adultsPluralRule]} {children}
            <div
              className={`flex flex-col absolute search-guests pointer-events-none mt-5 p-5 w-72 left-0 right-0 z-30 bg-white text-grey ${
                hidden ? "hidden" : "flex"
              }`}
            >
              <div className="flex w-full">
                <div className="w-2/3">Взрослые</div>
                <Controller
                  as={<Guests />}
                  name="adults"
                  control={control}
                  defaultValue={0}
                />
              </div>
              <div className="flex w-full mt-5">
                <div className="w-2/3">Дети</div>
                <Controller
                  as={<Guests />}
                  name="children"
                  control={control}
                  defaultValue={0}
                />
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
