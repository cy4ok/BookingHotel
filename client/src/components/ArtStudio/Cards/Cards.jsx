import React, { Component } from "react";
import "./Cards.css";
import item from "./Items";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{
          card: "",
      }],
    };
  }

  render() {
    return (
      <div class="grid grid--cards">
        {/* <div class="grid__item columnDesktop--4 columnTablet--6 columnMobile--12">
    <div class="card card--room">
        <a href="#" class="card__link" data-src="#modalRoomId-6" data-fancybox=""></a>
                    <div class="card__photo">
                <picture>
                    <source srcset="https://bookapart.ru/image/EBbw9nUmaGSXGuBdz7oFpYdayHpx7GP2.jpg/490x385,
					https://bookapart.ru/image/EBbw9nUmaGSXGuBdz7oFpYdayHpx7GP2.jpg/980x770 2x" media="(min-width: 1200px)">
                    <source srcset="https://bookapart.ru/image/EBbw9nUmaGSXGuBdz7oFpYdayHpx7GP2.jpg/350x275,
					https://bookapart.ru/image/EBbw9nUmaGSXGuBdz7oFpYdayHpx7GP2.jpg/700x550 2x" media="(min-width: 767px)">
                    <source srcset="https://bookapart.ru/image/EBbw9nUmaGSXGuBdz7oFpYdayHpx7GP2.jpg/490x385,
					https://bookapart.ru/image/EBbw9nUmaGSXGuBdz7oFpYdayHpx7GP2.jpg/980x770 2x" media="(min-width: 0px)">

                    <img src="https://bookapart.ru/image/EBbw9nUmaGSXGuBdz7oFpYdayHpx7GP2.jpg/350x275" alt="Deluxe" data-pagespeed-url-hash="1042796521" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
            </picture></div>
                <div class="card__body">
            <div class="card__title title--sm"> ARTSTUDIO Nevsky,<br> Deluxe</div>
            <div class="card__info">
                <ul class="grid infoList infoList--xs">
                    <li class="grid__item columnDesktop--4 infoList__item">
                        <div class="infoList__title colorGray">Гостей</div>
                        <div class="infoList__subtitle  ">1-3</div>
                    </li>
                    <li class="grid__item columnDesktop--4 infoList__item">
                        <div class="infoList__title colorGray">За сутки</div>
                        <div class="infoList__subtitle  ">от 3 100 руб.</div>
                    </li>
                    <li class="grid__item columnDesktop--4 infoList__item">
                        <div class="infoList__title colorGray">За месяц</div>
                        <div class="infoList__subtitle   fontBold">от 60 000 руб.</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card__bottom">
            <a href="/booking?apartment=DLX&amp;hotel-id=1" class="btn btn--primary">
                <span>Бронировать</span>
            </a>
        </div>
        <div class="modal modal--room" id="modalRoomId-6">
            <div class="modal__inner">
                <a href="#" class="btn btn--close modal__close" data-fancybox-close="">
                    <svg class="icon icon-close">
                        <use xlink:href="/img/sprite.svg#icon-close"></use>
                    </svg>
                </a>
                <div class="card card--roomInfo">
                                            <div class="card__slider">
                            <div class="sliderBox">
                                <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
                                    <div class="swiper-wrapper" style="transition-duration: 0ms;">
                                                                                    <div class="swiper-slide">
                                                <img srcset="https://bookapart.ru/image/ydCx_kUjxmWnisfGpyhWIbl5xgxYuXp9.jpg/600x413 1x, https://bookapart.ru/image/ydCx_kUjxmWnisfGpyhWIbl5xgxYuXp9.jpg/1200x825 2x" src="https://bookapart.ru/image/ydCx_kUjxmWnisfGpyhWIbl5xgxYuXp9.jpg/600x413" alt="ARTSTUDIO Nevsky  Deluxe" data-pagespeed-url-hash="3874963120" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                            </div>
                                                                                    <div class="swiper-slide">
                                                <img srcset="https://bookapart.ru/image/poP6RfOUuXBgyhmlbpS7TP7lyiJNy9Bl.jpg/600x413 1x, https://bookapart.ru/image/poP6RfOUuXBgyhmlbpS7TP7lyiJNy9Bl.jpg/1200x825 2x" src="https://bookapart.ru/image/poP6RfOUuXBgyhmlbpS7TP7lyiJNy9Bl.jpg/600x413" alt="ARTSTUDIO Nevsky  Deluxe" data-pagespeed-url-hash="2578545504" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                            </div>
                                                                                    <div class="swiper-slide">
                                                <img srcset="https://bookapart.ru/image/1p4bsPZq7T43pU5rJz_w2gQYzyg_B7N8.jpg/600x413 1x, https://bookapart.ru/image/1p4bsPZq7T43pU5rJz_w2gQYzyg_B7N8.jpg/1200x825 2x" src="https://bookapart.ru/image/1p4bsPZq7T43pU5rJz_w2gQYzyg_B7N8.jpg/600x413" alt="ARTSTUDIO Nevsky  Deluxe" data-pagespeed-url-hash="3015926752" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                            </div>
                                                                                    <div class="swiper-slide">
                                                <img srcset="https://bookapart.ru/image/6z_qBbkFrvA4fw-wnAkoaOYGQYBRyXlo.jpg/600x413 1x, https://bookapart.ru/image/6z_qBbkFrvA4fw-wnAkoaOYGQYBRyXlo.jpg/1200x825 2x" src="https://bookapart.ru/image/6z_qBbkFrvA4fw-wnAkoaOYGQYBRyXlo.jpg/600x413" alt="ARTSTUDIO Nevsky  Deluxe" data-pagespeed-url-hash="760700598" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                            </div>
                                                                                    <div class="swiper-slide">
                                                <img srcset="https://bookapart.ru/image/aVm_UDJEqE0KeoxLuKh2Xc6FwlqVO-9S.jpg/600x413 1x, https://bookapart.ru/image/aVm_UDJEqE0KeoxLuKh2Xc6FwlqVO-9S.jpg/1200x825 2x" src="https://bookapart.ru/image/aVm_UDJEqE0KeoxLuKh2Xc6FwlqVO-9S.jpg/600x413" alt="ARTSTUDIO Nevsky  Deluxe" data-pagespeed-url-hash="289166677" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                            </div>
                                                                                    <div class="swiper-slide">
                                                <img srcset="https://bookapart.ru/image/BnxQtw4cRv3gVaHCfTGsqV0bNQjUjRn9.jpg/600x413 1x, https://bookapart.ru/image/BnxQtw4cRv3gVaHCfTGsqV0bNQjUjRn9.jpg/1200x825 2x" src="https://bookapart.ru/image/BnxQtw4cRv3gVaHCfTGsqV0bNQjUjRn9.jpg/600x413" alt="ARTSTUDIO Nevsky  Deluxe" data-pagespeed-url-hash="218042821" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                            </div>
                                                                                    <div class="swiper-slide">
                                                <img srcset="https://bookapart.ru/image/B4Cehhd1Tm4xxp3wlO6Ux8ZtLshTOYag.jpg/600x413 1x, https://bookapart.ru/image/B4Cehhd1Tm4xxp3wlO6Ux8ZtLshTOYag.jpg/1200x825 2x" src="https://bookapart.ru/image/B4Cehhd1Tm4xxp3wlO6Ux8ZtLshTOYag.jpg/600x413" alt="ARTSTUDIO Nevsky  Deluxe" data-pagespeed-url-hash="3213120547" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                            </div>
                                                                                    <div class="swiper-slide">
                                                <img srcset="https://bookapart.ru/image/N9cdIbDcp9MjvepX2cvnM_yfQPoiOyBI.jpg/600x413 1x, https://bookapart.ru/image/N9cdIbDcp9MjvepX2cvnM_yfQPoiOyBI.jpg/1200x825 2x" src="https://bookapart.ru/image/N9cdIbDcp9MjvepX2cvnM_yfQPoiOyBI.jpg/600x413" alt="ARTSTUDIO Nevsky  Deluxe" data-pagespeed-url-hash="1297056629" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                            </div>
                                                                                    <div class="swiper-slide">
                                                <img srcset="https://bookapart.ru/image/k1A7xCxOSpkzvVBhSC6q0JQE5eucW4pE.jpg/600x413 1x, https://bookapart.ru/image/k1A7xCxOSpkzvVBhSC6q0JQE5eucW4pE.jpg/1200x825 2x" src="https://bookapart.ru/image/k1A7xCxOSpkzvVBhSC6q0JQE5eucW4pE.jpg/600x413" alt="ARTSTUDIO Nevsky  Deluxe" data-pagespeed-url-hash="2719118503" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                            </div>
                                                                                    <div class="swiper-slide">
                                                <img srcset="https://bookapart.ru/image/d-vL7M6ntYlKh5sk5lNvuZH7sMhVqXXn.jpg/600x413 1x, https://bookapart.ru/image/d-vL7M6ntYlKh5sk5lNvuZH7sMhVqXXn.jpg/1200x825 2x" src="https://bookapart.ru/image/d-vL7M6ntYlKh5sk5lNvuZH7sMhVqXXn.jpg/600x413" alt="ARTSTUDIO Nevsky  Deluxe" data-pagespeed-url-hash="1372447240" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                            </div>
                                                                                    <div class="swiper-slide">
                                                <img srcset="https://bookapart.ru/image/g73jPcYKGNcaaGLS8J9nKOsADOJnNODH.jpg/600x413 1x, https://bookapart.ru/image/g73jPcYKGNcaaGLS8J9nKOsADOJnNODH.jpg/1200x825 2x" src="https://bookapart.ru/image/g73jPcYKGNcaaGLS8J9nKOsADOJnNODH.jpg/600x413" alt="ARTSTUDIO Nevsky  Deluxe" data-pagespeed-url-hash="3109453121" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                            </div>
                                                                                    <div class="swiper-slide">
                                                <img srcset="https://bookapart.ru/image/SzYhzgerW1U6dYJppFg01CvCLY7sNIlP.jpg/600x413 1x, https://bookapart.ru/image/SzYhzgerW1U6dYJppFg01CvCLY7sNIlP.jpg/1200x825 2x" src="https://bookapart.ru/image/SzYhzgerW1U6dYJppFg01CvCLY7sNIlP.jpg/600x413" alt="ARTSTUDIO Nevsky  Deluxe" data-pagespeed-url-hash="382058918" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                            </div>
                                                                                    <div class="swiper-slide">
                                                <img srcset="https://bookapart.ru/image/BgiwgrXrJR03WWJFEPxStBhNjT2wZRxf.jpg/600x413 1x, https://bookapart.ru/image/BgiwgrXrJR03WWJFEPxStBhNjT2wZRxf.jpg/1200x825 2x" src="https://bookapart.ru/image/BgiwgrXrJR03WWJFEPxStBhNjT2wZRxf.jpg/600x413" alt="ARTSTUDIO Nevsky  Deluxe" data-pagespeed-url-hash="4036042744" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                            </div>
                                                                            </div>
                                    <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div>
                                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                            </div>
                        </div>
                                        <div class="card__body">
                        <div class="card__title title--sm"> Deluxe&nbsp;43 м2</div>
                        <div class="card__info">
                            <ul class="grid infoList infoList--xs">
                                <li class="grid__item columnDesktop--4 infoList__item">
                                    <div class="infoList__title colorGray">Гостей</div>
                                    <div class="infoList__subtitle  ">1-3</div>
                                </li>
                                <li class="grid__item columnDesktop--4 infoList__item">
                                    <div class="infoList__title colorGray">За сутки</div>
                                    <div class="infoList__subtitle  ">от 3 100 руб.</div>
                                </li>
                                <li class="grid__item columnDesktop--4 infoList__item">
                                    <div class="infoList__title colorGray">За месяц</div>
                                    <div class="infoList__subtitle   fontBold">от 60 000 руб.</div>
                                </li>
                            </ul>
                        </div>
                        <div class="hr hr--xs"></div>
                        <div class="card__infoBox">
                                                                                            <div class="card__infoBoxItem">
                                    <div class="title--xs textUppercase">Двухкомнатные апартаменты</div>
                                                                        <ul class="ulDefault">
                                                                                    <li>Кровать King size/Twin</li>
                                                                                    <li>Гардеробная/ система хранения</li>
                                                                                    <li>Полностью оборудованная кухня </li>
                                                                                    <li>Современная бытовая техника</li>
                                                                                    <li>Посуда/столовые приборы</li>
                                                                                    <li>Комфортабельная рабочая зона</li>
                                                                                    <li>Многоканальное Цифровое ТВ</li>
                                                                                    <li>Сейф</li>
                                                                                    <li>Банные халаты</li>
                                                                                    <li>Мягкие тапочки</li>
                                                                                    <li>Французская косметика</li>
                                                                                    <li>Фен</li>
                                                                            </ul>
                                                                    </div>
                                                                <div class="card__infoBoxItem">
                                    <div class="title--xs textUppercase">Услуги и удобства </div>
                                                                        <ul class="ulDefault">
                                                                                    <li>Wi-Fi и выделенный проводной интернет</li>
                                                                                    <li>Обслуживание 24/7</li>
                                                                                    <li>Трансфер</li>
                                                                                    <li>Визовая поддержка</li>
                                                                                    <li>Экскурсии</li>
                                                                                    <li>Дополнительные гостиничные услуги</li>
                                                                            </ul>
                                                                    </div>
                                                                                                                        <div class="card__infoBoxItem">
                                    <ul class="grid infoList infoList--sm">
                                                                                    <li class="grid__item columnDesktop--6 columnMobile--12 infoList__item">
                                                <div class="infoList__title title--xs">Курение</div>                                                <div class="infoList__subtitle  ">Запрещено</div>                                            </li>
                                                                                    <li class="grid__item columnDesktop--6 columnMobile--12 infoList__item">
                                                <div class="infoList__title title--xs">Парковка</div>                                                <div class="infoList__subtitle  ">Подземная</div>                                            </li>
                                                                            </ul>
                                </div>
                                                    </div>
                        <div class="card__bottom">
                            <a href="/booking?apartment=DLX&amp;hotel-id=1" class="btn btn--primary compensate-for-scrollbar">
                                <span>Бронировать</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> */}
      </div>
    );
  }
}

export default Cards;
