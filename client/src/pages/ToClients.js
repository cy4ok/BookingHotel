import React from 'react';
import Header from "../components/Header";
import ClientsSection from "../components/Clients/ClientsSection"
import ClientsHero from "../components/Clients/ClientsHero"
import Footer from "../components/Footer"

function ToClients() {
    return (
        <div id="ToClientsPage">
            <Header maintitle="Корпоративная аренда квартир" />
            <ClientsHero/>
            <ClientsSection/>
            <Footer />
        </div>
    );
}

export default ToClients;
