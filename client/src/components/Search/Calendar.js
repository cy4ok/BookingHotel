import React, { useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";
import { Russian } from "flatpickr/dist/l10n/ru.js";
import "flatpickr/dist/flatpickr.min.css";

const Calendar = ({ onChange }) => {

  return (
    <div className="flex w-1/2 h-full text-grey bg-white">
      <Flatpickr
        className="h-full w-1/2 search-input text-center cursor-pointer focus:outline-none z-20"
        allowinput="true"
        placeholder="Прибытие"
        onChange={onChange}
        options={{
          dateFormat: "d F Y",
          minDate: "today",
          mode: "range",
          locale: Russian,
          showMonths: 2,
          plugins: [new rangePlugin({ input: "#secondRangeInput" })],
        }}
      />
      <input
        placeholder="Выезд"
        id="secondRangeInput"
        onChange={onChange}
        className="h-full w-1/2 search-input text-center cursor-pointer focus:outline-none z-20"
      />
    </div>
  );
};

export default Calendar;
