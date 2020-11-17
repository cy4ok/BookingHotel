import React, { Component } from "react";
import Cards from "../Cards/Items";
import HideButton from "../HideButton/HideButton";
import "./Modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  render() {
    const card = Cards;

    console.log(this.props.visibility);

    return (
      <div className={this.props.visibility ? "show" : "hide"}>
        <div className="container modal w-full h-screen m-0 p-0">
          <HideButton handleClick={this.props.handleClick} />
          <div className="wrp absolute right-0 top-0 w-2/6 h-screen z-50">
          </div>
        </div>
      </div>
    );
  };
};

export default Modal;