import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "./Calendar";

const Search = () => {
  const { handleSubmit, errors, control } = useForm();
  const onSubmit = (data) => console.log(data);
  const [hidden, setHidden] = useState(true);

  const hideGuests = () => {
    setHidden(!hidden);
  };

  return (
    <div className="container flex search-section h-20 border-black justify-between text-grey text-lg">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full border-black flex justify-between"
      >
        <Controller
          as={Calendar}
          control={control}
          defaultValue={["", ""]}
          name="dates"
          className="input"
        />
        <div className="w-1/2 flex">
          <div
            className="flex justify-center items-center border-l border-gray-300 h-full w-3/5 cursor-pointer text-gray-500 relative"
            onClick={hideGuests}
          >
            Гости
            <div
              className={`flex flex-col absolute search-guests mt-5 p-5 w-72 left-0 right-0 z-30 bg-white text-grey ${
                hidden ? "hidden" : "flex"
              }`}
            >
              <div className="flex w-full border-black">
                <div className="w-2/3">Взрослые</div>
                <div className="flex w-1/3">
                  <div className="flex justify-center items-center text-2xl search-btn-circle cursor-pointer bg-btnGold text-white">
                    -
                  </div>
                  <input className="w-16" />
                  <div className="flex justify-center items-center text-2xl search-btn-circle cursor-pointer bg-btnGold text-white">
                    +
                  </div>
                </div>
              </div>
              <div className="flex w-full border-black mt-5">
                <div className="w-2/3">Дети</div>
                <div className="flex w-1/3">
                  <div className="flex justify-center items-center text-2xl search-btn-circle cursor-pointer bg-btnGold text-white">
                    -
                  </div>
                  <input className="w-16" />
                  <div className="flex justify-center items-center text-2xl search-btn-circle cursor-pointer bg-btnGold text-white">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
          {errors.exampleRequired && <span>This field is required</span>}
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
