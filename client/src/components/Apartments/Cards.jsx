import React, { Component } from "react";
import Items from "../ArtStudio/Cards/Items";
import Card from "../ArtStudio/Card/Card";

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
        <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:flex sm:flex-wrap gap-y-16 pt-8">
          {cards.map((item) => (
            <Card className="mb-8"
              item={item}
              handleClick={this.props.handleClick}
              visibility={this.state.visible}
              key={item.id}
              displayTitle={false}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Cards;
