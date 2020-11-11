import React from 'react'; 

class SlideItem extends React.Component {

    render() {
        const name = this.props.name
        return(
            <p class="space-y-1 leading-6 font-medium p-2 space-x-4 transition ease-in-out duration-150">
                <a href="#" class="slide-menu-link ">
                    {name}
                </a>
            </p>
        );
    }
}

export default SlideItem;