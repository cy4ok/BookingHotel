import React from 'react';
import Header from "../components/Header";
import ClientsSection from "../components/Clients/ClientsSection"
import Footer from "../components/Footer"

function ToClients() {
    return (
        <>
            <Header bgHeader="images/bg-3.jpg" mainTitle="Корпоративная аренда квартир" />
            <ClientsSection/>
            <Footer />
        </>
    );
}

export default ToClients;
