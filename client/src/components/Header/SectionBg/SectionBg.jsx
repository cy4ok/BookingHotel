import React, { Component } from "react";
import "./SectionBg.css";

class SectionBg extends Component {
  render() {
    return (
      <div className="container text-white flex items-end SectionBg">
        <div className="flex flex-col pb-20">
          <h4>Дом вдали от дома</h4>
          <h1>ARTSTUDIO - апарт-отель в</h1>
          <h1>Санкт-Петербурге</h1>
        </div>
      </div>
    );
  }
}

export default SectionBg;
