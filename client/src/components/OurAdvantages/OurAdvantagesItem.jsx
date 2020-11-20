import React from "react";


function OurAdvantagesItem = ({ icon, title, subtitel }) => {
  return (
    <div className="advantages-item relative pl-16 mb-12">
      <div className="advantages-icon absolute top-2 left-0">{icon}</div>
      <div className="advantages-titel text-left text-2xl leading-7">
        {title}
      </div>
      <div className="advantages-subtitel text-left offer-text mt-1">
        {text}
      </div>
    </div>
  );
}


export default OurAdvantagesItem;