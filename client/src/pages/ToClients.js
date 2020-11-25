import React from 'react';
import Header from "../components/Header";
import ClientsSection from "../components/Clients/ClientsSection"
import Footer from "../components/Footer"

function ToClients() {
    return (
        <>
            <Header bgHeader="header-bg-3" mainTitle="Корпоративная аренда квартир" />
            <ClientsSection/>
            <Footer />
        </>
    );
}

export default ToClients;
