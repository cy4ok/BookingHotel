import React from "react";
import InfrastructureItem from "./InfrastructureItem.jsx";
import BusinessClient from "./BusinessClient.jsx";

function Infrastructure() {
    return (
        <div className="bg-fourth">
            <div className="infrastructure-conteiner container p-20">
                <h4 className="p-10 text-xs font-bold uppercase from-white">Входит в инфраструктуру ARTSTUDIO Nevsky</h4>
                <InfrastructureItem />

            </div>
            <BusinessClient />
        </div>

    );
};
export default Infrastructure;