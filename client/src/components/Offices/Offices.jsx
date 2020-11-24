import React from "react";
import { OfficesListData } from "./OfficesListData";
import OfficesListItem from "./OfficesListItem";

const Offices = () => {
    return(
        <div className="container">
            <p className="text-xl font-normal mt-16 mb-6">
                ARTSTUDIO Nevsky – это апарт-отель, созданный не только для жизни и отдыха, но и для комфортной работы.
            </p>
            <p className="text-xl font-normal mb-6">
                ARTSTUDIO Nevsky находится в самом центре Санкт-Петербурга, всего в пяти минутах ходьбы от Невского проспекта и станции метро Площадь Восстания.
                Развитая инфраструктура, удобная транспортная доступность.
            </p>
            <p className="text-xl font-bold mb-6">Арендаторам мы предлагаем:</p>
            {OfficesListData.map((d, i) => (
                <OfficesListItem text={d} key={i} />
            ))}
            <p className="text-xl font-normal mt-12 mb-12">Чтобы узнать подробности, звоните: +7(911)750-78-06</p>
        </div>
    );
};

export default Offices;
