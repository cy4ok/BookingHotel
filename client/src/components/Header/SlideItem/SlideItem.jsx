import React from 'react';
import { Link } from 'react-router-dom';

class SlideItem extends React.Component {

    render() {
        const name = this.props.name
        const url = this.props.url
        return(
            <p className="text-white space-y-1 leading-6 font-medium p-2 space-x-4 transition ease-in-out duration-150">
                <Link to={`${url}`} className="slide-menu-link ">
                    {name}
                </Link>
            </p>
        );
    }
}

export default SlideItem;