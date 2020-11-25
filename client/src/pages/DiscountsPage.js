import React from 'react'
import Discounts from '../components/Discounts'
import Header from '../components/Header';
import Footer from "../components/Footer"

const DiscountsPage = () => {
    return (
        <>
        <Header title="Акции" />
        <Discounts />
        <Footer />
        </>
    )
}

export default DiscountsPage
