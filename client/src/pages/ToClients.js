import React from 'react';
import ClientsSection from "../components/Clients/ClientsSection"
import ClientsHero from "../components/Clients/ClientsHero"
function ToClients() {
    return (
        <div>
            <ClientsHero/>
            <ClientsSection/>
        </div>
    );
}

export default ToClients;