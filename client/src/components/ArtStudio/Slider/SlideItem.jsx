import React, { Component } from 'react';
import  Items from './Items';

class SlideItem extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
     };
  }
  render() {
    
    return (
      <div>
        <img src={this.props.img} width="100%" alt={ this.props.img}/>
      </div>
    );
  }
}

export default SlideItem;