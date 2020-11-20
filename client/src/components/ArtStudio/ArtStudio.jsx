import React, { Component } from "react";
import IconGPS from "../../images/icons/IconGPS";
import "./ArtStudio.css";
import Slider from "./Slider/Slider";
import Cards from "./Cards/Cards";
// import Card from "./Card/Card";
// import Modal from "./Modal/Modal";

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
  //   this.toggleModal = this.toggleModal.bind(this);
  // }

  // toggleModal(e) {
  //   e.preventDefault();
  //   this.setState({
  //     visible: !this.state.visible,
  //   });
  }

  render() {
    return (
      <div className="section atrstudio-section">
        <div className="container">
          <div className="flex bg-white text-black ">
            <div className="flex-initial title-h1">{this.state.title}</div>
            <div className="flex-initial text">
              {this.state.text}
              <a href="/contacts" className="btn btn-iconText">
                {this.state.linkicon}
                <span> {this.state.link}</span>
              </a>
            </div>
          </div>
          <div>
            <Slider />
          </div>
          <Cards />
        </div>
      </div>
    );
  }
}

export default ArtStudio;
