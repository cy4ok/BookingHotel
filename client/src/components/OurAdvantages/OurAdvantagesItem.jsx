import React from "react";

function OurAdvantagesItem ({ icon, title, text }) {
  return (
    <div className="advantages-item relative pl-16 mb-12">
      <div className="advantages-icon absolute top-2 left-0">{icon}</div>
      <div className="advantages-title text-left text-2xl leading-7">
        {title}
      </div>
      <div className="advantages-text text-left text-lg offer-text mt-2 leading-6">
        {text}
      </div>
    </div>
  );
}

export default OurAdvantagesItem;
