import React from "react";
import HeaderAll from "../Restaurant/HeaderAll";

function TermsOfUseHero(props) {
  return (
    <div className="relative w-full bg-secondary">
      <HeaderAll />
      <div className="container hero-inner pb-16 pt-48">
        <h1 className="text-white text-6xl text-left">
          Пользовательское соглашение
        </h1>
      </div>
    </div>
  );
}

export default TermsOfUseHero;
