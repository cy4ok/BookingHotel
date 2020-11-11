import React from "react";
/* import ContactTitle from "./ContactTitle.jsx"; */
import ContactMap from "./ContactMap.jsx";
import ContactItem from "./ContactItem.jsx";
import ContactItems from "./ContactItems.jsx";
import "./style.css";

const Contact = () => {
    return (
        <div className=" offer-section">
            <div className="pt-20 wrap">
                <div className="map bg-primary text-white">
                    {/* <h3 className="uppercase text-xs font-bold">RBI PM</h3>
                    <h3 className="uppercase text-xs font-bold">ARTSTUDIO Nevsky</h3> */}
                    <div className="map">
                        {ContactItems.map(({ title, text }) => {
                            return <ContactItem title={title} text={text} />;
                        })}
                    </div>
                    </div>
                    <div className="map">
                    <ContactMap />
                    </div>
                
            </div>
        </div>

    )
};

export default Contact;