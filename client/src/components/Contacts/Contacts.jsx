import React from "react";
import ContactMap from "./ContactMap.jsx";
import ContactItem from "./ContactItem.jsx";

const Contacts = () => {
  return (
    <div className="w-full pb-20 pt-12 bg-fourth">
      <div className="mt-20 flex flex-row bg-primary">
        <div className="w-1/2 bg-primary text-white py-20">
          <ContactItem />
        </div>
        <div className="contacts-map">
          <ContactMap />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
