import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          img: "1.jpg",
        },
        {
          img: "2.jpg",
        },
        {
          img: "3.jpg",
        },
        {
          img: "4.jpg",
        },
        {
          img: "5.jpg",
        },
        {
          img: "6.jpg",
        },
        {
          img: "7.jpg",
        },
        {
          img: "8.jpg",
        },
        {
          img: "9.jpg",
        },
        {
          img: "10.jpg",
        },
        {
          img: "11.jpg",
        },
      ],
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
    };
    return (
      <div>
        <Slider {...settings}>
          {this.state.images.map(({img}) => 
            <img src={`/img/slider/${img}`} width="100%" />
          )}
        </Slider>
      </div>
    );
  }
}
