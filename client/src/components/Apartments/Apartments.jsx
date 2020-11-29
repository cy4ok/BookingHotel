import React from "react";
import Cards from "./Cards";

class Apartments extends React.Component {
  render() {
    return (
      <div className="container">
        <h4 className="ml-3 pt-12 text-grey text-xs font-bold tracking-wider uppercase">
          Апартаменты и планировки
        </h4>
        <div className="pb-16">
          <Cards />
        </div>
      </div>
    );
  }
}

export default Apartments;
