import React from "react";

const DiscountItem = ({ img, title, text }) => {
  return (
    <div className="flex-col w-1/2 p-3 mb-10">
      <div className={`w-full h-full bg-${img} mb-10 discounts-photo`}></div>
      <div className="text-grey text-2xl">{title}</div>
      <div className="text-grey text-opacity-60 mt-2 text-lg">{text}</div>
    </div>
  );
};

export default DiscountItem;
