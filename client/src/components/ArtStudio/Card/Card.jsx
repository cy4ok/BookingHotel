import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      title: this.props.title,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <div className="flex-1 text-left px-2 py-1 m-1" key={this.props.item.id}>
        <div className="card group relative box-border z-10">
          <div
            className="card__photo relative cursor-pointer"
            onClick={() => {
              this.toggleModal();
            }}
          >
            <img
              className="card__img w-full"
              src={`${this.state.item.mainImg}`}
              alt="Deluxe"
            ></img>
          </div>
          <div
            className="body pt-5 pb-5"
            onClick={() => {
              this.toggleModal();
            }}
          >
            <div className="card__title text-gray-800 group-hover:text-yellow-700 text-left text-2xl">
              {this.props.title}
              <span className="block w-full">
                {this.props.item.typeOfApartment}
              </span>
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
          <div className="btn bg-btnGold w-48 h-12  mt-12 text-white text-center font-bold z-20 relative">
            <Link
              to="/booking"
              className="flex justify-center items-center w-full h-full box-border"
            >
              <span>Бронировать</span>
            </Link>
          </div>
        </div>
        <Modal
          handleClick={this.toggleModal}
          visibility={this.state.visible}
          item={this.state.item}
        />
      </div>
    );
  }
}

export default Card;
