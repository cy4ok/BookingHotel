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
            {/* <ul className="my-6">
                <li className="clients_sections_list relative pl-6 mt-4">Круглосуточный доступ в офис;</li>
                <li className="clients_sections_list relative pl-6 mt-4">24/7 служба ресепшн;</li>
                <li className="clients_sections_list relative pl-6 mt-4">“Переложить” бытовые вопросы на администратора ARTSTUDIO Nevsky;</li>
                <li className="clients_sections_list relative pl-6 mt-4">Подземный паркинг с доступом на этаж;</li>
                <li className="clients_sections_list relative pl-6 mt-4">Собственная служба безопасности и видеонаблюдение</li>
            </ul> */}
            {OfficesListData.map((d, i) => (
                <OfficesListItem text={d} key={i} />
            ))}
            <p className="text-xl font-normal mt-12 mb-12">Чтобы узнать подробности, звоните: +7(911)750-78-06</p>
        </div>
    );
};

export default Offices;