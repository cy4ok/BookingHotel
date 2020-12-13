import React from "react";
import InfrastructureItem from "./InfrastructureItem.jsx";
import BusinessClient from "./BusinessClient.jsx";
import ContactInfrastructure from "./ContactInfrastructure.jsx";
import OurAdvantages from "../OurAdvantages/OurAdvantages.jsx";
import Info from "./Info";
import Appartments from "../Apartments"

function Infrastructure() {
    return (
        <div className="bg-fourth pt-32">
            <Info />
            <OurAdvantages />
            <Appartments />
            <div className="infrastructure-conteiner container p-16">
                <h4 className="py-12 text-xs font-bold uppercase from-white">Входит в инфраструктуру ARTSTUDIO Nevsky</h4>
                <InfrastructureItem />
            </div>
            <BusinessClient />
            <ContactInfrastructure />
        </div>
    );
};

export default Infrastructure;
