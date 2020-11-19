import React from 'react'

import { FontAwesomeIcon } from 'react-fontawesome'
import { faCoffee } from 'fontawesome-free-solid'
import {faTwitter, faLinkedin, faGithub} from 'fontawesome-free-brands';
 
var AwesomeIcon = React.createClass({
  render: function() {
    return (
        <div className="App">
        <h1>
          <FontAwesomeIcon icon={faTwitter} />
        </h1>
      </div>
    )
  },
})

export default AwesomeIcon;
