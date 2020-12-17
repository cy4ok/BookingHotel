import React, { Component } from "react";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      overflow: "hidden",
    };
  }
  render() {
    const breakfast = this.props.breakfast;
    return (
      <>
        {this.props.visibility ? (
          <div onClick={this.props.handleClick}>
            <div className="pt-4">
              <ul className="pl-3 border-gold border-l-2">
                <li className="mb-3">В стоимость проживания включено:</li>
                <li className="mb-3"> - Номер выбранной категории</li>
                {breakfast && <li className="mb-3">- {breakfast}</li>}
                <li className="mb-3">
                  - Высокоскоростной проводной и беспроводной Wi Fi
                </li>
                <li className="mb-3">Время заезда - 14:00</li>
                <li className="mb-3">Время выезда - 12:00</li>
              </ul>
            </div>
            <div
              className="cursor-pointer text-sm text-gold font-bold"
              onClick={this.props.handleClick}
            >
              <span className="border-gold border-b border-dashed hover:text-goldHover">
                Свернуть
              </span>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Details;
