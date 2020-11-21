import React from 'react';
import Header from "../components/Header";
import ClientsSection from "../components/Clients/ClientsSection"
import Footer from "../components/Footer"

function ToClients() {
    return (
        <div id="ToClientsPage">
            <Header maintitle="Корпоративная аренда квартир" />
            <ClientsSection/>
            <Footer />
        </div>
    );
}

export default ToClients;
