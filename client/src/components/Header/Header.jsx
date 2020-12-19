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
    const bgHeader = this.props.bgHeader;
    const title = this.props.title;
    const smallTitle = this.props.smallTitle;
    const mainTitle = this.props.mainTitle;
    const address = this.props.address;
    return (
      <div
        className={`relative w-full flex items-end bg-${bgHeader} bg-no-repeat bg-cover bg-center`}
        style={bgHeader ? { height: "620px" } : { height: "270px" }}
      >
        <header
          className="z-100 absolute top-0 left-0 w-full py-8 bg-secondary"
          style={
            bgHeader
              ? {
                  backgroundColor: "transparent",
                  backgroundImage:
                    "linear-gradient( 0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%)",
                }
              : {}
          } >
            <div className="flex justify-between items-center">
              <Logo />
              <Menu />
              <ShowButton handleClick={this.toggleMenu} />
              <SlideMenu
                handleClick={this.toggleMenu}
                visibility={this.state.visible}
              />
            </div>
          <div className={`w-full ${title ? "bg-secondary" : "bg-transparent"}`}>
            <div className="container">
              <div className="py-16">
                {title && <h4 className="text-white text-5xl">{title}</h4>}
              </div>
            </div>
          </div>
        </header>
        {bgHeader &&
          <div className="container flex flex-col text-white pb-20">
            <h4 className="mb-8 text-xs font-bold leading-5 tracking-wide">
              {smallTitle}
            </h4>
            <h1 className="max-w-4xl text-6xl leading-none">{mainTitle}</h1>
            <h4 className="text-lg leading-normal mt-4 mb-16">{address}</h4>
          </div>
        }
      </div>
    );
  }
}

export default Header;
