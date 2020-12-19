import React, { Component } from "react";
import HideButton from "../HideButton/HideButton";
import SlideItem from "../SlideItem";
import "./SlideMenu.css";

class SlideMenu extends Component {
  render() {
    var visibility = "hide";
    if (this.props.visibility) {
      visibility = "show";
    }
    return (
      <div id="slide-menu" className={visibility}>
        <HideButton handleClick={this.props.handleClick} />
        <div className="relative text-white grid gap-8 p-8">
          <div className="flex flex-col px-5 text-lg">
            <SlideItem name="Апарт-отели" url="/apartments" />
            <SlideItem name="Бронировать апартаменты" url="/booking" />
            <SlideItem name="Корпоративным клиентам" url="/to-clients" />
            <SlideItem name="Программа лояльности" url="/loyalty" />
            <SlideItem name="Офисы в аренду" url="/offices" />
            <SlideItem name="Ресторан ATLAS BISTRO" url="/restaurant" />
            <SlideItem name="Акции" url="/discounts" />
            <SlideItem name="О RBI PM" url="/about" />
            <SlideItem name="Контакты" url="/contacts" />
          </div>
          <div className="flex flex-col px-5 text-2xl">
            <SlideItem name="+7 (812) 561 57 20" />
            <SlideItem name="welcome@bookapart.ru" />
          </div>
          <div className="px-5">
            <button className="btn--primary py-2 px-5 focus:outline-none">
              Заказать звонок
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SlideMenu;
