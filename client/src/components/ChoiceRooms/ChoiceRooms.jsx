import React from "react";
import Items from "../ArtStudio/Cards/Items";
import Card from "./Card/Card";

class ChoiceRooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: Items,
    };
  }
  render() {
    const cards = this.state.cards;
    return (
      <div className="w-full bg-fourth">
        <div className="container pb-12">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 pt-8">
            {cards.map((item) => (
              <Card
                item={item}
                handleClick={this.props.handleClick}
                visibility={this.state.visible}
                key={item.id}
                guests={this.props.guests}
                days={this.props.guests}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ChoiceRooms;
