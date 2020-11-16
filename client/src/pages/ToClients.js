import React from 'react';
import Header from "../components/Header";
import ClientsSection from "../components/Clients/ClientsSection"
import ClientsHero from "../components/Clients/ClientsHero"
function ToClients() {
    return (
        <div id="ToClientsPage">
            <Header/>
            <ClientsHero/>
            <ClientsSection/>
        </div>
    );
}

export default ToClients;