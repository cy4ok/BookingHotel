import React, { Component } from "react";

class Details extends Component {
  render() {
    const breakfast = this.props.breakfast;
    return (
      <>
        {this.props.visibility ? (
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
        ) : null}
      </>
    );
  }
}

export default Details;
