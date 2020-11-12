import React, {Component} from 'react';
import './ShowButton.css';

class ShowButton extends Component {
    render() {
        return (
            <div class="flex justify-end md:flex-1 lg:w-0">
                <button id="show-button" onClick={this.props.handleClick} class="btn--menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                </button>
            </div>
        );
    }
}

export default ShowButton;