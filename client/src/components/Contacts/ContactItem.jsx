import React from "react";
import ContactItems from "./ContactItems.jsx";
import "./style.css";

const ContactItem = ({ title, text }) => {
    return (
        <div>
        <div className = "offer-text mt-1 text-left" > { title } </div>   
        <div className = "text-l text-left" > { text } </div> 
        </div>
/* 
         <div className="container ">
        < div className="flex flex-wrap ustify-between" >
            <span className="text-left w-full block uppercase text-xs font-bold">RBI PM</span>
            <ul className="dignity-product-list fieldset ul box-border">
                <li className="dignity-product-list-item">Lorem</li>
                <li className="dignity-product-list-item">Lorem</li>
            </ul>
            <ul className="dignity-product-list">
                <li className="dignity-product-list-item">Lorem</li>
                <li className="dignity-product-list-item">Lorem</li>
            </ul>

        </div >
        < div className="dignity-product padding-site" >
            <span className="dignity-product-title uppercase text-xs font-bold">RBI PM</span>
            <ul className="dignity-product-list">
                <li className="dignity-product-list-item">Lorem</li>
                <li className="dignity-product-list-item">Lorem</li>
            </ul>
            <ul className="dignity-product-list">
                <li className="dignity-product-list-item">Lorem</li>
                <li className="dignity-product-list-item">Lorem</li>
            </ul>

        </div >
        </div>  */
    );
};

export default ContactItem; 