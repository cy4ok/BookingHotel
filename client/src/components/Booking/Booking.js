import React from "react";
import Search from "../Search";
import EmptyBox from "./EmptyBox";

const Booking = () => {
  return (
    <div className="w-full pt-12 pb-16">
      <div className="container">
        <div className="flex flex-col">
          <Search />
          <div className="mx-auto mt-24 mb-12 pt-8">
            <EmptyBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
