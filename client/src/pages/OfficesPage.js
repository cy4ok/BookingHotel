import React from 'react';
import HeaderBrownTitle from '../components/HeaderBrownTitle';
import HeaderBrown from '../components/HeaderBrown';
import Footer from "../components/Footer"
import Offices from '../components/Offices/Offices';

const OfficesPage = () => {
    return (
        <div id="OfficesPage">
            <HeaderBrown />
            <HeaderBrownTitle title="Офисы в аренду" />
            <Offices /> 
            <Footer />
        </div>
    )
}

export default OfficesPage;