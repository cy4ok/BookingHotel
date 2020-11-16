import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import ShowButton from './ShowButton/ShowButton';
import SlideMenu from './SlideMenu';
import SectionBg from './SectionBg';

class Header extends React.Component {

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
        <div className="container header-section">
            <header className="z-10 absolute top-0 left-0 w-full py-8">
                <div className="flex justify-between items-center px-10">
                    <Logo/>
                    <Menu/>
                    <ShowButton handleClick={this.toggleMenu} />
                    <div id="container">
                        <SlideMenu handleClick={this.toggleMenu} visibility={this.state.visible} />
                    </div>
                </div>
            </header>
            <SectionBg/>
        </div>
        );
    }
}

export default Header;
