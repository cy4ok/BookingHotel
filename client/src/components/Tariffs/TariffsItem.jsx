import React from "react";
import { Link } from "react-router-dom";
import Details from "./Details/Details";
import Food from "./Icons/Food";
import Cancel from "./Icons/Cancel";
import Purse from "./Icons/Purse";
import Adult from "./Icons/Adult";
import Child from "./Icons/Child";

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
  getComponentAdult(){
    switch(this.props.adult){
      case '2': return <span><Adult/><Adult/></span>; 
      case '3': return <span>3<Adult/></span>; 
      case '4': return <span>4<Adult/></span>; 
      case '5': return <span>5<Adult/></span>; 
      default: return <Adult/>;
    }
  }
  getComponentChild(){
    switch(this.props.child){
      case '1': return <span><Child/></span>; 
      case '2': return <span><Child/><Child/></span>; 
      case '3': return <span> 3<Child/></span>; 
      case '4': return <span> 4<Child/></span>;
      default: return;
    }
  }
  enumerate (num, dec) {
    if (num > 100) num = num % 100;
    if (num <= 20 && num >= 10) return dec[2];
    if (num > 20) num = num % 10;
    return num === 1 ? dec[0] : num > 1 && num < 5 ? dec[1] : dec[2];
  }
  render() {
    const breakfast = this.props.breakfast;
    const visible = !this.state.visible;
    const adult = this.props.adult;
    const child = this.props.child;
    const nights = this.props.nights;
    const priceday = this.props.priceday;
    return (
      <div className="mb-6 grid xl:grid-cols-3 md:grid-cols-2 py-4 px-6 bg-white">
        <div className="xl:col-span-2 text-carbonic">
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
          <div className="mt-8 mr-4 text-2xl text-gold">
            {this.getComponentAdult()}
            {this.getComponentChild()}
            <span className="text-black font-bold">
              &nbsp;
              {breakfast
                ? (nights * priceday + adult * 550 + child * 350).toLocaleString()
                : (nights * priceday).toLocaleString()}
            </span>
            <span className="text-carbonic opacity-75">₽</span>
          </div>
          <div>
            <div className="mb-2">
              Стоимость за &nbsp;
              <span className="font-bold">
                {nights + " " + this.enumerate(nights, ["ночь", "ночи", "ночей"])}
              </span>
            </div>
            <div className="btn-choice bg-btnGold px-3 h-8 text-white">
              <Link
                //-!-!-!-настроить переход-!-!-!-!-!-!
                to="/booking"
                className="block flex justify-center items-center w-full h-full box-border"
                adult={this.props.adult}
                child={this.props.child}
                nights={this.props.nights}
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
