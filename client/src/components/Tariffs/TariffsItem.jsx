import React from "react";
import { Link } from "react-router-dom";
import Details from "./Details/Details";
import Food from "./Icons/Food";
import Cancel from "./Icons/Cancel";
import Purse from "./Icons/Purse";
import Adult from "./Icons/Adult";

class TariffsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: this.props.guests,
    };
    this.toggleDetails = this.toggleDetails.bind(this);
  }
  toggleDetails() {
    this.setState({
      visible: !this.state.visible,
    });
  }
  getComponent(){
    switch(this.props.guests){
      case '2': return <span><Adult/><Adult/></span>; 
      case '3': return <span><Adult/><Adult/><Adult/></span>; 
      default: return <Adult/>;
    }
  }
  render() {
    const breakfast = this.props.breakfast;
    const visible = !this.state.visible;
    const guests = this.props.guests;
    const days = this.props.days;
    const priceday = this.props.priceday;
    return (
      <div className="mb-6 grid grid-cols-3 py-4 px-6 bg-white">
        <div className="col-span-2 text-carbonic">
          <h2 className="text-gold">
            <span
              className="cursor-pointer text-3xl font-bold border-gold border-b border-dashed hover:text-goldHover"
              onClick={() => {
                this.toggleDetails();
              }}
            >
              {this.props.title} &nbsp;
              <span className="text-sm">
                {visible === true ? "Подробнее" : "Свернуть"}
              </span>
            </span>
          </h2>
          <Details
            visibility={this.state.visible}
            breakfast={this.props.breakfast}
          />
          <div className="text-sm text-gold font-bold">
            <span 
              className="cursor-pointer border-gold border-b border-dashed hover:text-goldHover"
              onClick={() => {
                this.toggleDetails();
              }}
            >
              {visible === false ? "Свернуть" : ""}
            </span>
          </div>
          <div className="pt-6">
            {breakfast && (
              <div className="mb-2">
                <Food />
                <span className="border-gold border-b border-dotted">
                  Завтрак
                  <span className="font-bold"> ВКЛЮЧЕН</span>
                </span>
              </div>
            )}
            <div className="mb-2">
              <Cancel />
              <span className="border-gold border-b border-dotted">
                <span className="font-bold">БЕСПЛАТНАЯ </span>
                отмена брони
              </span>
            </div>
            <div className="flex">
              <Purse />
              <ul className="list-disc list-inside">
                Оплата:
                <li className="ml-1 font-bold">ПРИ ЗАСЕЛЕНИИ</li>
                <li className="ml-1">банковской картой</li>
                <li className="ml-1">по безналичному расчету</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-5 flex justify-end">
          <div className="mt-8 mr-4 text-2xl">
            {this.getComponent()}
            <span className="text-black font-bold">
              &nbsp;
              {breakfast
                ? (days * priceday + guests * 500).toLocaleString()
                : (days * priceday).toLocaleString()}
            </span>
            <span className="text-carbonic opacity-75">₽</span>
          </div>
          <div>
            <div className="mb-2">
              Стоимость за &nbsp;
              <span className="font-bold">
                {days} {days === 1 ? "ночь" : "ночи"}
              </span>
            </div>
            <div className="btn-choice bg-btnGold px-3 h-8 text-white">
              <Link
                //-!-!-!-настроить переход-!-!-!-!-!-!
                to="/booking"
                className="block flex justify-center items-center w-full h-full box-border"
                guests={this.props.guests}
                days={this.props.guests}
              >
                <span className="font-bold text-xs uppercase">
                  Забронировать
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TariffsItem;
