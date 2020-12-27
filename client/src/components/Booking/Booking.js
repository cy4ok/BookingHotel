import React from "react";
import EmptyBox from "./EmptyBox";
import Card from "../ChoiceRooms/Card";

const Booking = ({ apartments, isLoading, isError, error, isIdle, adult, child }) => {
  console.log(apartments);

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
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 py-8 montserrat">
            {apartments.map((item, idx) => {
              return <div key={idx}>
                <Card
                  item={item}
                  key={item.id}
                  adult={adult}
                  child={child}
                />
              </div>;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
