import React from "react";
import TariffsItem from "./TariffsItem";

class Tariffs extends React.Component {
  render() {
    return (
      <>
        {this.props.visibility ? (
          <div className="pt-4">
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
                adult={this.props.adult}
                child={this.props.child}
                nights={this.props.nights}
                priceday={this.props.priceday}
              />
              <TariffsItem
                title="Уникальное предложение от ARTSTUDIO c завтраком"
                breakfast="Завтраки"
                adult={this.props.adult}
                child={this.props.child}
                nights={this.props.nights}
                priceday={this.props.priceday}
              />
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Tariffs;
