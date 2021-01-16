import React, {useState} from "react";
import differenceInDays from "date-fns/differenceInDays";
import EmptyBox from "./EmptyBox";
import Card from "./Card";
import Tariffs from "../Tariffs";
import useVisibilityToggler from "../Tariffs/useVisibilityToggler";

const Booking = ({ apartments, isLoading, isError, error, isIdle, adult, child, periodFrom, periodTo }) => {
  console.log(apartments);
  
  const [price, setPrice] = useState(0);
  const passPriceClick = (priceDay) => {
    setPrice(priceDay);
  }

  const nights = differenceInDays(
    new Date(periodTo),
    new Date(periodFrom)
  );

  const [TariffsComponent, toggleTariffsVisibility] = useVisibilityToggler(
    <Tariffs
      adult={adult}
      child={child}
      nights={nights}
      priceday={price}
    />, false
  );

  return (
    <div className="w-full pt-12 pb-8 bg-fourth">
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
          <div className="montserrat">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 py-8">
              {apartments.map((item, idx) => {
                return <div key={idx}>
                  <Card
                    item={item}
                    key={item.id}
                    adult={adult}
                    child={child}
                    nights={nights}
                    updateData={toggleTariffsVisibility}
                    passPriceClick={passPriceClick}
                  />
                </div>;
              })}
            </div>
            {TariffsComponent}
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
