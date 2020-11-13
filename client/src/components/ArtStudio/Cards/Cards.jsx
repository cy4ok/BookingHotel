import React, { Component } from "react";
import "./Cards.css";
//import item from "./Items";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{
          card: "",
      }],
    };
  }

  render() {
    return (
      <div class="grid grid--cards">
        
      </div>
    );
  }
}

export default Cards;
