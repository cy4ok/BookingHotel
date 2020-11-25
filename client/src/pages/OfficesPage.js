import React from 'react';
import Header from '../components/Header';
import Footer from "../components/Footer"
import Offices from '../components/Offices/Offices';

const OfficesPage = () => {
    return (
        <div id="OfficesPage">
            <Header title="Офисы в аренду" />
            <Offices /> 
            <Footer />
        </div>
    )
}

export default OfficesPage;
