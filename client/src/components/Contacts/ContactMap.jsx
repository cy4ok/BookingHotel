import React from 'react';

import { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class ContactMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.933151, 
      lng: 30.365748,
    },
    zoom: 10
  };
 
  render() {
    return (
    
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          /* bootstrapURLKeys={{ key: map }} */
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.933151}
            lng={30.365748}
            text="г. Санкт-Петербург ул. 2-ая Советская, 4Б, стр.1"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 

export default ContactMap;