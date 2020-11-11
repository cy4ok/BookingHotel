import React from "react";
import ContactItems from "./ContactItems.jsx";

const ContactItem = ({ title, text })=> {
    return ( <div>
        <div className = "offer-text mt-1 text-left" > { title } </div>   
        <div className = "text-l text-left" > { text } </div> 
        </div>
    );
};

export default ContactItem; 