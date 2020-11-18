import React from "react";

class HeaderBrownTitle extends React.Component {
  render() {
    const title = this.props.title;
    return (
      <h1 className="text-white text-5xl ">
        {title}
      </h1>
    );
  }
}

export default HeaderBrownTitle;
