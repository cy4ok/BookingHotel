import React, { Component } from "react";
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
        <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:flex sm:flex-wrap gap-y-16 pt-20">
          {cards.map((item) => ( 
            item.page &&
            <Card
              title="ARTSTUDIO Nevsky, "
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
