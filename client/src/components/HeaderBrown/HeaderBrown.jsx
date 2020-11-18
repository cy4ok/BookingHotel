import React from 'react';
import Logo from '../Header/Logo';
import Menu from '../Header/Menu';
import ShowButton from '../Header/ShowButton/ShowButton';
import SlideMenu from '../Header/SlideMenu';
import HeaderBrownTitle from '../HeaderBrownTitle';

class HeaderBrown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return(
        <div className="container headerBrown-section bg-secondary">
            <header className="">
                <div className="flex justify-between items-center py-8">
                    <Logo/>
                    <Menu/>
                    <ShowButton handleClick={this.toggleMenu} />
                    <SlideMenu handleClick={this.toggleMenu} visibility={this.state.visible} />
                </div>
            </header>
            <div className="py-8">
                <HeaderBrownTitle title="Программа лояльности" />
            </div>           
        </div>
        );
    }
}

export default HeaderBrown;
