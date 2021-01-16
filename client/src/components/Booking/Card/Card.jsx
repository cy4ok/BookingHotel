import React, { Component } from "react";
import Group from "../../Tariffs/Icons/Group";
import Area from "../../Tariffs/Icons/Area";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      toggleTariffs: true,
      priceDay: this.props.item.priceDay,
    };
  }
  enumerate(num, dec) {
    if (num > 100) num = num % 100;
    if (num <= 20 && num >= 10) return dec[2];
    if (num > 20) num = num % 10;
    return num === 1 ? dec[0] : num > 1 && num < 5 ? dec[1] : dec[2];
  }
  render() {
    const adult = this.props.adult;
    const child = this.props.child;
    const nights = this.props.nights;
    return (
      <div
        className="flex-1 max-w-sm m-1 cursor-pointer bg-white group shadow hover:shadow-xl"
        key={this.props.item.id}
      >
        <div className="card-item box-border min-w-64 text-carbonic">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="card-photo bg-center bg-cover h-48 transition duration-700 ease-in-out transform"
                style={{ backgroundImage: `url(${this.state.item.mainImg})` }}
              >
                <div className="card-info hidden p-6 text-white">
                  <ul className="flex items-start flex-col text-sm">
                    <li className="tag mt-5 leading-3">Wi-Fi</li>
                    <li className="tag mt-2 leading-3">Сейф</li>
                    <li className="tag mt-2 leading-3 text-white">
                      IP-телефон
                    </li>
                  </ul>
                  <p className="font-bold mt-6">Подробнее</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5">
            <div className="text-left text-xl font-bold">
              {this.props.item.typeOfApartment}
            </div>
            <div className="card__info mt-2">
              <div className="grid grid-cols-2 text-sm">
                <div className="flex items-center">
                  <div className="mr-2">
                    <Group />
                  </div>
                  <span className="mt-1">{`до ${this.props.item.guestsMax} мест`}</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2">
                    <Area />
                  </div>
                  <span className="mt-1">{`${this.props.item.area} кв. м`}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <div>
                <div className="text-black font-bold text-lg">
                  <span className="text-xs">от </span>
                  {(this.props.item.priceDay * nights).toLocaleString()}
                  <span className="text-carbonic opacity-75"> ₽</span>
                </div>
                <div className="text-xs">
                  {` 
                    ${nights + " " + this.enumerate(nights, ["ночь", "ночи", "ночей"])} / 
                    ${+adult + +child} ${this.enumerate(+adult + +child, ["гость", "гостя", "гостей"])} 
                  `}
                </div>
              </div>
              <div className="btn-choice bg-btnGold w-24 h-8 text-white">
                <div
                  className="flex justify-center items-center w-full h-full box-border"
                  onClick={() => { 
                    this.props.updateData(this.state.toggleTariffs); 
                    this.props.passPriceClick(this.state.priceDay);
                  }}
                >
                  <span className="font-bold text-xs uppercase">Выбрать</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
