import React from "react";
import EmptyBox from "./EmptyBox";

const Booking = ({ apartments, isLoading, isError, error, isIdle }) => {

  return (
    <div className="w-full pt-12 pb-16 bg-fourth">
      <div className="container">
        {isIdle ? (
          <div className="flex flex-col">
            <div className="mx-auto mt-24 mb-12 pt-8">
              <EmptyBox />
            </div>
          </div>
        ) : isLoading ? (
          <div className="flex flex-col">
            <div className="mx-auto mt-24 mb-12 pt-8">Loading...</div>
          </div>
        ) : isError ? (
          <div className="flex flex-col">
            <div className="mx-auto mt-24 mb-12 pt-8">
              <span>Error: {error.message}</span>
            </div>
          </div>
        ) : (
          <div className="flex justify-between">
            {apartments.map((item, idx) => {
              return <div key={idx}>{item.typeOfApartment}</div>;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
