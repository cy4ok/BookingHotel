import React from "react";
import ContactMap from "./ContactMap.jsx";
import ContactItem from "./ContactItem.jsx";



const Contact = () => {
    return (
        <div className="offer-section">
            <div className="pt-20 flex flex-row">
                <div className="w-1/2 bg-primary text-white">
                    <ContactItem />
                </div>
                <div className="w-1/2">
                    <ContactMap />
                </div>
            </div>
        </div>

    )
};

export default Contact; 