import React from "react";

const ApartmentItem = ({ img, title, text }) => {
  return (
    <div className="flex-col w-1/2 p-3 mb-10">
        {/* <img src={`./images/${image}`} alt="Apart"/> */}
        <div className={`w-full h-full bg-${img} bg-auto mb-10`}></div>
        <div className="text-grey text-2xl">{title}</div>
        <div className="text-grey text-opacity-60 mt-2 text-lg">{text}</div>
        <button>Бронировать</button>
    </div>
  );
};

export default ApartmentItem;