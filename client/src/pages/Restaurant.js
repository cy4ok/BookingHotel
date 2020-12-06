import React from 'react';
import RestaurantSection from "../components/Restaurant/RestaurantSection"
import Header from "../components/Header";

function Restaurant() {
    return (
        <div className="page_wrap ">
            <Header title="Ресторан ATLAS BISTRO"/>
            <RestaurantSection/>
        </div>
    );
}

export default Restaurant;