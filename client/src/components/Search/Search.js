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

  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  let countAdult = adult;
  let countChildren = children;

  const increase = (type, event) => {
    if (type === "adult") {
      countAdult++;
      setAdult(countAdult);
      event.stopPropagation();
    }
    if (type === "children") {
      countChildren++;
      setChildren(countChildren);
      event.stopPropagation();
    }
  };

  const decrease = (type, event) => {
    if (type === "adult" && adult > 0) {
      countAdult--;
      setAdult(countAdult);
      event.stopPropagation();
    } else {
      event.stopPropagation();
    }
    if (type === "children" && children > 0) {
      countChildren--;
      setChildren(countChildren);
      event.stopPropagation();
    } else {
      event.stopPropagation();
    }
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
              className={`flex flex-col absolute search-guests pointer-events-none mt-5 p-5 w-72 left-0 right-0 z-30 bg-white text-grey ${
                hidden ? "hidden" : "flex"
              }`}
            >
              <div className="flex w-full">
                <div className="w-2/3">Взрослые</div>
                <div className="flex w-1/3 pointer-events-auto">
                  <div
                    className={`flex justify-center items-center text-2xl search-btn-circle outline-none bg-btnGold text-white ${
                      adult === 0
                        ? "opacity-50 cursor-default"
                        : "opacity - 100"
                    }`}
                    onClick={(event) => {
                      decrease("adult", event);
                    }}
                  >
                    -
                  </div>
                  {/* <input
                    name="plus"
                    control={control}
                    ref={register}
                    defaultValue={count}
                    className="w-16"
                  /> */}
                  {/* <Controller
                    as={<input />}
                    name="plus"
                    control={control}
                    defaultValue={count}
                    className="w-16"
                  /> */}
                  <input className="w-16 text-center" value={adult} disabled />
                  {/* <button
                    className="flex justify-center items-center text-2xl search-btn-circle outline-none search-btn-circle-plus cursor-pointer bg-btnGold text-white"
                    onClick={(event) => {
                      increase("adult", event);
                    }}
                  >
                    +
                  </button> */}
                  <div
                    className="flex justify-center items-center text-2xl search-btn-circle outline-none search-btn-circle-plus cursor-pointer bg-btnGold text-white"
                    onClick={(event) => {
                      increase("adult", event);
                    }}
                  >
                    +
                  </div>
                </div>
              </div>
              <div className="flex w-full mt-5">
                <div className="w-2/3">Дети</div>
                <div className="flex w-1/3 pointer-events-auto">
                  <div
                    className={`flex justify-center items-center text-2xl search-btn-circle outline-none bg-btnGold text-white ${
                      children === 0
                        ? "opacity-50 cursor-default"
                        : "opacity - 100"
                    }`}
                    onClick={(event) => {
                      decrease("children", event);
                    }}
                  >
                    -
                  </div>
                  <input
                    className="w-16 text-center"
                    value={children}
                    disabled
                  />
                  <div
                    className="flex justify-center items-center text-2xl search-btn-circle outline-none search-btn-circle-plus cursor-pointer bg-btnGold text-white"
                    onClick={(event) => {
                      increase("children", event);
                    }}
                  >
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
