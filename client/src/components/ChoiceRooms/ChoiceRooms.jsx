import React from "react";
import differenceInDays from "date-fns/differenceInDays";
import Items from "../ArtStudio/Cards/Items";
import Card from "./Card/Card";

class ChoiceRooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: Items,
      nights: differenceInDays(
        new Date("2020-08-13T07:22:03.498Z"),
        new Date("2020-08-09T09:30:20.914Z")
      )
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
                key={item.id}
                adult={this.props.adult}
                child={this.props.child}
                nights={this.state.nights}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ChoiceRooms;
