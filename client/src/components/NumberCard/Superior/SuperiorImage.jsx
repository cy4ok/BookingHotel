import React, { Component } from 'react';

class SuperiorImage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
     };
  }
  render() {
    
    return (
      <div>
        <img src={this.props.img}  alt={ this.props.img} className="w-2/5 h-1/2 bg-no-repeat bg-cover"/>
      </div>
    );
  }
}

export default SuperiorImage;