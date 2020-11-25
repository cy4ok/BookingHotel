import React from 'react';
import RestaurantHero from "../components/Restaurant/RestaurantHero";
import RestaurantSection from "../components/Restaurant/RestaurantSection"
import HeaderAll from "../components/Restaurant/HeaderAll.jsx"

function Restaurant() {
    return (
        <div className="page_wrap relative">
            <HeaderAll/>
            <RestaurantHero/>
            <RestaurantSection/>
        </div>
    );
}

export default Restaurant;