import React from "react";
import Items from "../ArtStudio/Cards/Items";
import Card from "../ArtStudio/Card/Card";

class Apartments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: Items,
    };
  }

  render() {
    const cards = this.state.cards;

    return (
      <div className="container bg-white">
        <h4 className="ml-3 pt-12 text-grey text-xs font-bold tracking-wider uppercase">
          Апартаменты и планировки
        </h4>
        <div className="pb-12">
          <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:flex sm:flex-wrap gap-y-16 pt-8">
            {cards.map((item) => (
              <Card
                item={item}
                handleClick={this.props.handleClick}
                visibility={this.state.visible}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Apartments;
