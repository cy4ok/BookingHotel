import React from 'react'
import Discounts from '../components/Discounts'
import HeaderBrownTitle from '../components/HeaderBrownTitle';
import HeaderBrown from '../components/HeaderBrown';
import Footer from "../components/Footer"

const DiscountsPage = () => {
    return (
        <>
        <HeaderBrown />
        <HeaderBrownTitle title="Акции" />
        <Discounts />
        <Footer />
        </>
    )
}

export default DiscountsPage
