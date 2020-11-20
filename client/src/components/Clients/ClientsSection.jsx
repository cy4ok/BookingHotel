import React from "react";
import "./customstyles/clientsstyle.css";
import { ClientListData } from "./ClientListData";
import ClientListItem from "./ClientsListItem";
function ClientsSection(props) {
  return (
    <div className="container ">
      <p className="text-xl mt-20 mb-10 leading-6">
        Сеть апарт-отелей ARTSTUDIO – это апарт-отели, созданные специально для
        корпоративных клиентов и бизнес-туристов. Мы продумали все, чтобы ваши
        сотрудники чувствовали себя как дома и были свободны от бытовых
        вопросов. Мы создали новую территорию безупречного Сервиса и
        Гостеприимства.
      </p>
      <p className="text-xl font-normal">
        Корпоративным клиентам мы предлагаем:
      </p>
      {ClientListData.map((d, i) => (
        <ClientListItem text={d} key={i} />
      ))}
      <p className="text-xl font-normal mb-6">
        С каждым клиентом работает персональный менеджер, поэтому вы всегда
        сможете оперативно решить любые вопросы по проживанию сотрудников.{" "}
      </p>
      <p className="text-xl font-normal mb-6">
        Первый апарт-отель сети ARTSTUDIO Nevsky находится в самом центре
        Санкт-Петербурга, где расположено большинство офисов крупных компаний,
        достопримечательностей, ресторанов и торговых центров. Мы обеспечиваем
        максимальный комфорт и тем, кто приезжает в короткие командировки, и
        тем, кто планирует жить у нас не один год.
      </p>
      <div className="mb-20">
        <a
          className="client_section_link  text-brown text-xl font-normal"
          href="http://storage.bookapart.ru/source/ArtStudio%20Nevsky-2.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Скачать презентацию ARTSTUDIO Nevsky (PDF)
        </a>
      </div>
    </div>
  );
}

export default ClientsSection;
