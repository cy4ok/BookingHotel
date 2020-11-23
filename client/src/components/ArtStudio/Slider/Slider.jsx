import React, { Component } from "react";
import Slider from "react-slick";
import SlideItem from "./SlideItem";
import Items from "./Items";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

class SimpleSlider extends Component {
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
      arrows: true,
      key: true,
    };

    return (
      <div>
        <Slider {...settings}>
          {Items.map((item, index ) => (
            <SlideItem img={item} key={index} />
          ))}
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;