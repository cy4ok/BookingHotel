import React, { forwardRef } from "react";

const Guests = forwardRef(({ value, onChange, ...rest }, ref) => (
  <div className="flex w-1/3 pointer-events-auto">
    <button
      type="button"
      className={`flex justify-center items-center text-2xl search-btn-circle focus:outline-none outline-none bg-btnGold text-white ${
        value === 0 ? "opacity-50 cursor-default" : "opacity-100"
      }`}
      onClick={() => {
        if (Number(value) > 0) onChange(Number(value) - 1);
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
      ref={ref}
      onClick={() => {
        onChange(Number(value) + 1);
      }}
    >
      +
    </button>
  </div>
));

Guests.displayName = 'Guests';

export default Guests;
