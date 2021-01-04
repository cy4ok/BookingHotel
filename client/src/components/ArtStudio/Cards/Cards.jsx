import React, { Component } from "react";
import Items from "./Items";
import Card from "../Card/Card";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: Items,
      title: this.props.title,
    };
  }

  render() {
    const cards = this.state.cards;
  
    return (
      <>
        <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:flex sm:flex-wrap gap-y-16 pt-20">
          {cards.map((item) => ( 
            <Card
              title={this.props.title}
              item={item}
              handleClick={this.props.handleClick}
              visibility={this.state.visible}
              key={item.id}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Cards;
