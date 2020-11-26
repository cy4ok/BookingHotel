import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("ru", ru);
setDefaultLocale("ru");

const Calendar = ({ onChange }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    onChange([startDate, endDate]);
  }, [onChange, startDate, endDate]);

  console.log(startDate, endDate);

  return (
    <div className="flex w-1/2 h-full text-grey bg-white">
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
        }}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()}
        placeholderText="Прибытие"
        showDisabledMonthNavigation
        monthsShown={2}
        locale={ru}
        dateFormat="dd MMMM yyyy"
        className="h-full w-1/2 search-input text-center cursor-pointer"
        />
      <DatePicker
        selected={endDate}
        onChange={(date) => {
          setEndDate(date);
          console.log(date);
        }}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()}
        placeholderText="Отъезд"
        showDisabledMonthNavigation
        monthsShown={2}
        locale={ru}
        dateFormat="dd MMMM yyyy"
        className="h-full w-1/2 search-input text-center cursor-pointer"
      />
    </div>
  );
};

export default Calendar;
