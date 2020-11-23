import React from "react";

const OfferItem = ({ icon, title, text }) => {
  return (
    <div className="relative pl-16 mt-12">
      <div className="absolute offer-icon left-0 w-8">{icon}</div>
      <div className="text-2xl text-left">{title}</div>
      <div className="offer-text mt-1 text-left text-lg">{text}</div>
    </div>
  );
};

export default OfferItem;
