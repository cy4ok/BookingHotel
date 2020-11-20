import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import ShowButton from "./ShowButton";
import SlideMenu from "./SlideMenu";

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
    const title = this.props.title;
    const smalltitle = this.props.smalltitle;
    const maintitle = this.props.maintitle;
    const city = this.props.city;
    return (
      <div className="relative w-full flex items-end bg-no-repeat bg-cover bg-center SectionBg">
        <header className="z-10 absolute top-0 left-0 w-full py-8 bg-secondary">
          <div className="container">
            <div className="flex justify-between items-center">
              <Logo />
              <Menu />
              <ShowButton handleClick={this.toggleMenu} />
              <SlideMenu
                handleClick={this.toggleMenu}
                visibility={this.state.visible}
              />
            </div>
          </div>
          <div className={`w-full ${title ? "bg-secondary" : "bg-transparent"}`}>
            <div className="container">
              <div className="py-16">
                {title && <h4 className="text-white text-5xl">{title}</h4>}
              </div>
            </div>
          </div>
        </header>

        <div className="container flex flex-col text-white pb-20">
          <h4 className="mb-6 text-xs uppercase font-bold leading-5 tracking-wide smalltitle">
            {smalltitle}
          </h4>
          <h1 className="maintitle">{maintitle}</h1>
          <h1 className="city mb-20">{city}</h1>
        </div>
      </div>
    );
  }
}

export default Header;
