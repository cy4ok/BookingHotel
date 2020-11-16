import React from 'react'
import Discounts from '../components/Discounts'
import HeaderBrownTitle from '../components/HeaderBrownTitle';
import HeaderBrown from '../components/HeaderBrown'

const DiscountsPage = () => {
    return (
        <>
        <HeaderBrown />
        <HeaderBrownTitle title="Акции" />
        <Discounts />
        </>
    )
}

export default DiscountsPage
