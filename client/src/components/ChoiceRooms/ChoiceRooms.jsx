import React from "react";
import differenceInDays from "date-fns/differenceInDays";
import Items from "../ArtStudio/Cards/Items";
import Card from "./Card/Card";
import Tariffs from "../Tariffs/Tariffs";

class ChoiceRooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: Items,
      nights: differenceInDays(
        new Date(2020, 12, 25, 12, 0),
        new Date(2020, 12, 21, 14, 0)
      ),
    };
  }
  render() {
    const cards = this.state.cards;
    return (
      <div className="w-full bg-fourth">
        <div className="container pb-12 book-room">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 py-8">
            {cards.map((item) => (
              <Card
                item={item}
                key={item.id}
                adult={this.props.adult}
                child={this.props.child}
                nights={this.state.nights}
              />
            ))}
          </div>
          <Tariffs
            adult={this.props.adult}
            child={this.props.child}
            nights={this.state.nights}
            visibility={this.state.visible}
            priceday={this.state.cards.priceDay}
          />
        </div>
      </div>
    );
  }
}

export default ChoiceRooms;
