import React from "react";

class HeaderBrownTitle extends React.Component {
  render() {
    const title = this.props.title;
    return (
      <div className="container bg-secondary">
      <div className="py-12">
          <h1 className="text-white text-5xl pb-12">
            {title}
          </h1>
      </div> 
      </div>
    );
  }
}

export default HeaderBrownTitle;
