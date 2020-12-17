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
        <img src={this.props.img} width="100%" height="500px" alt={ this.props.img}/>
      </div>
    );
  }
}

export default SuperiorImage;