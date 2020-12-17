import React, { Component } from "react";
import Superior1 from "react-slick";
import SuperiorImage from "./SuperiorImage";
import Items from "./Items.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

class SimpleSuperior extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      key: true,
    };

    return (
      <div>
        <Superior1 {...settings}>
          {Items.map((item, index ) => (
            <SuperiorImage img={item} key={index} />
          ))}
        </Superior1>
      </div>
    );
  }
}

export default SimpleSuperior;