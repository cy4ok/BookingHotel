import React from "react";
import InfrastructureItem from "./InfrastructureItem.jsx";
import BusinessClient from "./BusinessClient.jsx";
import ContactInfrastructure from "./ContactInfrastructure.jsx";
import OurAdvantages from "../OurAdvantages/OurAdvantages.jsx";
import Info from "./Info";
import Appartments from "../Apartments";
import Search from "../Search";

function Infrastructure() {
  return (
    <div className="bg-fourth pt-32">
      <Info />
      <OurAdvantages />
      <Appartments />
      <div className="infrastructure-conteiner container p-16">
        <h4 className="py-12 text-xs font-bold uppercase from-white">
          Входит в инфраструктуру ARTSTUDIO Nevsky
        </h4>
        <InfrastructureItem />
      </div>
      <BusinessClient />
      <ContactInfrastructure />
      <div className="flex flex-col h-48 container pb-32">
        <div className="text-2xl mb-16">
          <h3>Забронируйте свой дом вдали от дома</h3>
        </div>
        <Search />
      </div>
    </div>
  );
}

export default Infrastructure;
