import React, { Component } from "react";
import { Link } from 'react-router-dom';
import HideButton from "../HideButton/HideButton";
import ListItem from "../ListItem/ListItem";
import "./Modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      overflow: "hidden",
    };
  }

  render() {
    return (
      <>
        {this.props.visibility ? (
          <div
            className="container relative modal w-full h-screen m-0 p-0"
            onClick={this.props.handleClick}
          >
            <HideButton handleClick={this.props.handleClick} />
            <div className="wrp absolute right-0 top-0 h-screen z-50 overflow-y-auto">
              <div className="card group relative box-border z-10">
                <div className="card__photo relative">
                  <img
                    className="card__img w-full"
                    src={this.props.item.mainImg}
                    alt={this.props.item.mainImg}
                  ></img>
                </div>
                <div className="body p-8 h-full box-border">
                  <div className="card__title text-gray-800 group-hover:text-yellow-700 text-left text-2xl">
                    {`${this.props.item.typeOfApartment} ${this.props.item.area} `}
                    <span className="inline">
                      м<sup>2</sup>
                    </span>
                  </div>
                  <div className="card__info text-gray-700 mt-5 mb-12">
                    <ul className="flex infoList infoList--xs">
                      <li className="flex-1 grid__item">
                        <div className="text-lg">Гостей</div>
                        <div className="text-black">
                          {this.props.item.guest}
                        </div>
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
                  <div className="modal-line w-full mt-0 border-solid border-gray-300"></div>
                  <div className="mt-5">
                    <h3 className="uppercase font-bold text-xs leading-6">
                      {this.props.item.type}
                    </h3>
                    <ul className="modal-desc mt-5 list-inside">
                      <ListItem item={this.props.item.desc} />
                    </ul>
                  </div>
                  <div className="mt-10">
                    <h3 className="uppercase font-bold text-xs leading-6">
                      Услуги и удобства
                    </h3>
                    <ul className="modal-services mt-5 list-inside">
                      <ListItem item={this.props.item.services} />
                    </ul>
                  </div>
                  <div className="flex mt-5">
                    <div className="flex-1 uppercase leading-10">
                      <h3 className="uppercase font-bold text-xs leading-6">
                        Курение
                      </h3>
                      <p className="uppercase text-base">
                        {this.props.item.smoking}
                      </p>
                    </div>
                    <div className="flex-1 uppercase leading-10">
                      <h3 className="uppercase font-bold text-xs leading-6">
                        Парковка
                      </h3>
                      <p className="uppercase text-base">
                        {this.props.item.parking}
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-16"></div>
                  <div className="btn modal-btn bg-btnGold h-12 text-white text-center font-bold z-20 fixed right-0 bottom-0 shadow-sm">
                    <Link
                      to="/booking"
                      className="flex justify-center items-center w-full h-full block box-border"
                    >
                      <span>Бронировать</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  };
};

export default Modal;