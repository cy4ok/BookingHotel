import React, { Component } from "react";

class Card extends Component {
  state = { 
    item: this.props.item,
   }
  render() {
    console.log(this.props.handleClick);
    return (
      <div className="flex-1 text-left px-2 py-1 m-1">
        <div className="card group relative box-border z-10">
          <div className="card__photo relative">
            <img
              className="card__img w-full"
              src="https://bookapart.ru/image/EBbw9nUmaGSXGuBdz7oFpYdayHpx7GP2.jpg/350x275"
              alt="Deluxe"
            ></img>
          </div>
          <div
            className="body pt-5 pb-5"
            onClick={(e) => {
              this.props.handleClick(e);
            }}
          >
            <div className="card__title text-gray-800 group-hover:text-yellow-700 text-left text-2xl">
              {this.props.item.title}
            </div>
            <div className="card__info text-gray-700 mt-5">
              <ul className="flex infoList infoList--xs">
                <li className="flex-1 grid__item">
                  <div className="text-lg">Гостей</div>
                  <div className="text-black">{this.props.item.guest}</div>
                </li>
                <li className="flex-1">
                  <div className="text-lg">За сутки</div>
                  <div className="text-black">{`от ${this.props.item.priceDay.toLocaleString()} руб.`}</div>
                </li>
                <li className="flex-1">
                  <div className="text-lg">За месяц</div>
                  <div className="text-black font-bold">{`от ${this.props.item.priceMounth.toLocaleString()} руб.`}</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="btn bg-bgBtn hover:bg-orange-500 w-48 h-12 text-white text-center font-bold z-20 absolute bottom-2 left-0">
            <a
              href="/booking?apartment=DLX&amp;hotel-id=1"
              className="flex justify-center items-center w-full h-full block box-border"
            >
              <span>Бронировать</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;