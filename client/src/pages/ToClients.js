import React from 'react';
import ClientsSection from "../components/Clients/ClientsSection"
import ClientsHero from "../components/Clients/ClientsHero"
import HeaderAll from "../components/Restaurant/HeaderAll.jsx"
function ToClients() {
    return (
        <div className="page_wrap relative">
            <HeaderAll/>
            <ClientsHero/>
            <ClientsSection/>
        </div>
    );
}

export default ToClients;