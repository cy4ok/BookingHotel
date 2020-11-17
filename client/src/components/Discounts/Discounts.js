import React from "react";
import DiscountItem from "./DiscountItem";
import { discountsItems } from "./discountItems";

const Discounts = ({ title }) => {
  return (
    <div className={`w-full pb-16 ${title ? "pt-12" : "pt-20"}`}>
      <div className="container">
        {title && (
          <h4 className="uppercase text-xs font-bold text-grey mb-12 pl-3">
            {title}
          </h4>
        )}
        <div className="flex">
          {discountsItems.map(({ img, title, texts }, idx) => {
            const text = texts.map((item) => {
              return <p>{item}</p>;
            });
            return (
              <DiscountItem img={img} title={title} text={text} key={idx} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Discounts;
