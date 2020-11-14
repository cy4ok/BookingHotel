import React from "react";
import bgimage from "./img/corpoffer-photo.jpg";
import CorpOfferItem from "./CorpOfferItem";
import { corpOfferData } from "./corpOfferData";
import { ReactComponent as LinkIcon } from "./img/external_link.svg";
import "./customstyles/CorpStyle.css";

function CorpOffer() {
  return (
    <div
      className="corpoffer bg-primary 
     text-white"
    >
      <div className="container px-12">
        <div className="corpoffer-inner flex flex-wrap justify-between pt-10 pb-20 ">
          <div className="corpoffer-img  lg:w-3/5 sm:w-full md:full  bg-cover bg-center bg-no-repeat lg:-ml-12 lg:-mt-20 sm:ml-0  sm:mt-0 "></div>
          <div className="corpoffer-text  sm:w-full md:full lg:w-2/5  pt-5 pl-5">
            <div className="  pl-16 text-left uppercase text-xs font-bold mb-10">
              КОРПОРАТИВНЫМ КЛИЕНТАМ
            </div>
            {corpOfferData.map((d, i) => (
              <CorpOfferItem
                key={i}
                icon={d.icon}
                titel={d.titel}
                subtitel={d.subtitel}
              />
            ))}
            <div className="corpoffer-link text-left mt-12 pl-16">
              <a href="#">
                <span>
                  <LinkIcon className="corpoffer-linicon mr-3 mb-1" />
                </span>
                <span className="text-lg text-left text-brown">
                  Предложение для бизнес-клиентов
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CorpOffer;
