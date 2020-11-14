import React, { Component } from "react";
import "./Cards.css";
// import item from "./Items";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          title: "ARTSTUDIO Nevsky, Superior",
          guest: "1-3",
          priceDay: 3000,
          priceMounth: 50000,
        },
        {
          title: "ARTSTUDIO Nevsky, Deluxe",
          guest: "1-3",
          priceDay: 3100,
          priceMounth: 60000,
        },
        {
          title: "ARTSTUDIO Nevsky, Suite",
          guest: "1-5",
          priceDay: 4000,
          priceMounth: 77419,
        },
      ],
    };
  }

  render() {
    const cards = this.state.cards;
    return (
      <div class="grid grid-cards">
        {cards.map((item) => (
          <div class="grid__item columnDesktop--4 columnTablet--6 columnMobile--12">
            <div class="card card-room">
              <a href="#" class="card__link"></a>
              <div class="card__photo">
                <img
                  src="https://bookapart.ru/image/EBbw9nUmaGSXGuBdz7oFpYdayHpx7GP2.jpg/350x275"
                  alt="Deluxe"
                ></img>
              </div>
              <div class="card__body">
                <div class="card__title title--sm">{item.title}</div>
                <div class="card__info">
                  <ul class="grid infoList infoList--xs">
                    <li class="grid__item columnDesktop--4 infoList__item">
                      <div class="infoList__title colorGray">Гостей</div>
                      <div class="infoList__subtitle  ">{item.guest}</div>
                    </li>
                    <li class="grid__item columnDesktop--4 infoList__item">
                      <div class="infoList__title colorGray">За сутки</div>
                      <div class="infoList__subtitle  ">{`от ${item.priceDay.toLocaleString()} руб.`}</div>
                    </li>
                    <li class="grid__item columnDesktop--4 infoList__item">
                      <div class="infoList__title colorGray">За месяц</div>
                      <div class="infoList__subtitle   fontBold">{`от ${item.priceMounth.toLocaleString()} руб.`}</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card__bottom">
                <a href="/booking?apartment=DLX&amp;hotel-id=1" class="btn btn-primary">
                  <span>Бронировать</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Cards;
