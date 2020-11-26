import React from "react";
import { ReactComponent as LinkIcon } from "./img/icon_link.svg";
import { Link } from "react-router-dom";


function BusinessClient() {
    return (
        <div className="business-client bg-no-repeat bg-cover my-20 ml-12">
            <div className="text-white w-1/2 p-16">
                <h1 className="text-5xl mb-2">Бизнес-клиентам</h1>
                <div className="text-lg">Приезжаете в Петербург по работе? Мы позаботимся о том, чтобы ваше проживание было максимально комфортным. Все бытовые вопросы мы возьмем на себя, обеспечив вас необходимыми сервисами: высокоскоростной проводной и беспроводной Wi Fi, мини-офис, трансфер, услуги личного помощника. Мы также можем организовать для вас рабочее место в коворкинге или арендовать переговорную комнату. Мы расположены в непосредственной близости от большинства офисных центров, а также офисов Администрации Петербурга.</div>
                <div className="text-left mt-8 hover:text-brown">
                    <Link to="/to-clients">
                        <span className="text-lg text-left">
                            <LinkIcon className="btn-linicon mr-3 mb-1" />
                        Предложение для бизнес-клиентов
                </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default BusinessClient;