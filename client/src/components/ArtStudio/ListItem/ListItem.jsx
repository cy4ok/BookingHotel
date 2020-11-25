import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const item = this.props.item;
    return item.map((item, index) => (
      <li className="pl-0 text-black text-base text-orange-400 leading-8" key={index}>
        <span className="text-black">{item}</span>
      </li>
    ));
  }
}

export default ListItem;