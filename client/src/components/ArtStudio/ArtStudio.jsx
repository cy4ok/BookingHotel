import React, { Component } from "react";
import { Link } from "react-router-dom";
import IconGPS from "../../images/icons/IconGPS";
import "./ArtStudio.css";
import Slider from "./Slider/Slider";
import Cards from "./Cards/Cards";

class ArtStudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      title: "ARTSTUDIO Nevsky",
      text:
        "Комфортные апартаменты в центре города для любителей романтики, творческих личностей и бизнес-туристов.",
      link: "Санкт-Петербург, 2-я Советская улица, 4",
      linkicon: <IconGPS />,
    };
  }

  render() {
    return (
      <div className="section atrstudio-section box-border">
        <div className="container">
          <div className="flex bg-white text-black ">
            <div className="flex-initial title-h1">{this.state.title}</div>
            <div className="flex-initial text">
              {this.state.text}
              <Link to="/contacts" className="btn btn-iconText">
                {this.state.linkicon}
                <span> {this.state.link}</span>
              </Link>
            </div>
          </div>
          <div>
            <Slider />
          </div>
          <Cards title="ARTSTUDIO Nevsky, " />
        </div>
      </div>
    );
  }
}

export default ArtStudio;
