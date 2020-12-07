import React from "react";

const Guests = ({ value, onChange, ...rest }) => (
  <div className="flex w-1/3 pointer-events-auto">
    <button
      type="button"
      className={`flex justify-center items-center text-2xl search-btn-circle focus:outline-none outline-none bg-btnGold text-white ${
        value === 0 ? "opacity-50 cursor-default" : "opacity-100"
      }`}
      onClick={() => {
        if (value > 0) onChange(value - 1);
      }}
    >
      -
    </button>
    <input
      className="w-16 text-center"
      value={value}
      disabled
      {...rest}
    />
    <button
      type="button"
      className="flex justify-center items-center text-2xl search-btn-circle focus:outline-none outline-none search-btn-circle-plus cursor-pointer bg-btnGold text-white"
      onClick={() => {
        onChange(value + 1);
      }}
    >
      +
    </button>
  </div>
);

export default Guests;
