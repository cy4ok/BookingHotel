import React from "react";
import { Link } from "react-router-dom";

class MenuItem extends React.Component {
  render() {
    const name = this.props.name;
    const url = this.props.url;
    return (
      <Link
        to={`${url}`}
        className="text-white text-lg leading-6 font-medium hover:text-opacity-50 focus:outline-none transition ease-in-out duration-150"
      >
        {name}
      </Link>
    );
  }
}

export default MenuItem;
