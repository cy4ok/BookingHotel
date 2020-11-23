import React from "react";
import OfferItem from "./OfferItem";
import { offerItems } from "./offerItems";

const Offer = () => {
  return (
    <div className="pt-12 bg-primary text-white offer-section">
      <div className="container">
        <div className="pt-12 flex justify-between">
          <div className="pt-6 w-2/5">
            <h4 className="uppercase text-xs font-bold">что мы предлагаем</h4>
            <div>
              <div className="w-full">
                {offerItems.map(({ icon, title, text }, idx) => {
                  return <OfferItem icon={icon} title={title} text={text} key={idx} />;
                })}
              </div>
            </div>
          </div>
          <div className="w-2/4 bg-no-repeat bg-offer-photo -mr-12 -mb-10 bg-auto bg-center offer-photo"></div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
