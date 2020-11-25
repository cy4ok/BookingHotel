import React from "react";
import InfrastructureItem from "./InfrastructureItem.jsx";
import BusinessClient from "./BusinessClient.jsx";
import ContactInfrastructure from "./ContactInfrastructure.jsx"

function Infrastructure() {
    return (

        <div className="bg-fourth">
            <div className="infrastructure-conteiner container p-16">
                <h4 className="py-10 text-xs font-bold uppercase from-white">Входит в инфраструктуру ARTSTUDIO Nevsky</h4>
                <InfrastructureItem />

            </div>
            <BusinessClient />
            <ContactInfrastructure />
        </div>

    );
};
export default Infrastructure;