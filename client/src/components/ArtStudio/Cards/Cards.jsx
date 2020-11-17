import React, { Component } from "react";
import "./Cards.css";
import Items from "./Items";
import Card from "../Card/Card";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: Items,
    };
  }

  render() {
    const cards = this.state.cards;
  
    return (
      <>
        <div className="flex p-6">
          {cards.map((item) => (
            <Card
              item={item}
              handleClick={this.props.handleClick}
              visibility={this.state.visible}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Cards;
