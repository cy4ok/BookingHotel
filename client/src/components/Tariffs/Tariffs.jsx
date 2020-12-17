import React from "react";
import TariffsItem from "./TariffsItem";

class Tariffs extends React.Component {
  render() {
    return (
      <div className="w-full bg-fourth">
        <div className="container pt-12 book-room">
          <div className="pt-16">
            <div className="border-light border-t-2 border-b-2">
              <h1 className="py-4 text-carbonic text-3xl font-bold text-center">
                Выбор тарифа
              </h1>
            </div>
          </div>
          <div className="bg-gray-300 mb-5">1</div>
          <div className="py-5">
            <TariffsItem
              title="Гибкий тариф без завтрака"
              guests={this.props.guests}
              days={this.props.guests}
              priceday={this.props.priceday}
            />
            <TariffsItem
              title="Уникальное предложение от ARTSTUDIO c завтраком"
              breakfast="Завтраки"
              guests={this.props.guests}
              days={this.props.guests}
              priceday={this.props.priceday}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Tariffs;
