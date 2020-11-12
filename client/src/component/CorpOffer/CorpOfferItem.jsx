import React from "react";

function CorpOfferItem({ icon, titel, subtitel }) {
  return (
    <div className="corpoffer-item relative pl-16 mb-12">
      <div className="corpoffer-icon absolute top-2 left-0">{icon}</div>
      <div className="corpoffer-titel text-left text-2xl leading-7">
        {titel}
      </div>
      <div className="corpoffer-subtitel text-left text-lg mt-1">
        {subtitel}
      </div>
    </div>
  );
}

export default CorpOfferItem;
