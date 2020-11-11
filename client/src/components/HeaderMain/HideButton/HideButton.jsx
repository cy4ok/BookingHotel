import React, {Component} from 'react';
import './HideButton.css';

class HideButton extends Component {
    render() {
        return (
            <button id="hide-button" onClick={this.props.handleClick}>
                <div class="btn--close"></div>
            </button>
        );
    }
}

export default HideButton;