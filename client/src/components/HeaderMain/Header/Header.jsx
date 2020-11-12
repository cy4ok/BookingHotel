import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import ShowButton from "../ShowButton/ShowButton";
import SlideMenu from "../SlideMenu";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <div className="relative header-section">
        <header className="z-10 absolute top-0 left-0 w-screen bg-transparent">
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex justify-between items-center py-8 md:justify-start md:space-x-10">
              <Logo />
              <Menu />
              <ShowButton handleClick={this.toggleMenu} />
              <div id="container">
                <SlideMenu
                  handleClick={this.toggleMenu}
                  visibility={this.state.visible}
                />
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
