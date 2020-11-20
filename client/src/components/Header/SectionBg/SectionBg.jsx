import React, { Component } from "react";
import "./SectionBg.css";

class SectionBg extends Component {
  render() {
    const smalltitle = this.props.smalltitle;
    const maintitle = this.props.maintitle;
    const city = this.props.city;
    return (
      <div className="w-full flex items-end bg-no-repeat bg-cover bg-center SectionBg">
        <div className="container flex flex-col text-white pb-20">
          <h4 className="mb-6 text-xs uppercase font-bold leading-5 tracking-wide smalltitle">
            {smalltitle}
          </h4>
          <h1>{maintitle}</h1>
          <h1 className="city">{city}</h1>
        </div>
      </div>
    );
  }
}

export default SectionBg;
