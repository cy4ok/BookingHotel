import React, { Component } from "react";
import "./ShowButton.css";

class ShowButton extends Component {
  render() {
    return (
      <div className="flex justify-end flex-1 px-13">
        <button
          id="show-button"
          onClick={this.props.handleClick}
          className="btn--menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    );
  }
}

export default ShowButton;
