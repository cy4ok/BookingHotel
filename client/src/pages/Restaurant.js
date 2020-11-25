import React from 'react';
import RestaurantHero from "../components/Restaurant/RestaurantHero";
import RestaurantSection from "../components/Restaurant/RestaurantSection"
import HeaderAll from "../components/Restaurant/HeaderAll.jsx"
import Footer from "../components/Footer/" 

function Restaurant() {
    return (
        <div className="page_wrap relative">
            <HeaderAll/>
            <RestaurantHero/>
            <RestaurantSection/>
            <Footer/>
        </div>
    );
}

export default Restaurant;