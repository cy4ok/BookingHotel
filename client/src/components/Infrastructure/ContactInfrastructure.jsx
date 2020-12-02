import React from "react";
import ContactMap from "../Contacts/ContactMap.jsx"

function ContactInfrastructure() {
    return (
        <div className="offer-section">
            <div className="pb-20 flex flex-row">
                <div className="w-1/2 bg-primary text-white">
                    <div className="mx-12 my-16">
                        <div className="pb-8 uppercase font-bold text-xs">контактная информация</div>
                        <div className="flex flex-row box-border mb-20 justify-between">
                            <div className=" flex-row box-border">
                                <div className="flex-row box-border">
                                    <div className=" flex flex-col">
                                        <div className="mb-2 text-sm offer-text">Адрес</div>
                                        <span className="text-lg">ул. 2-ая Советская, 4Б, стр.1</span>
                                    </div>
                                    <div className=" my-6 flex flex-col ">
                                        <div className="mb-2 text-sm offer-text">Телефон</div>
                                        <span className="text-lg">+7 (812) 561 57 19</span>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex-row box-border">
                                <div className=" flex-row box-border">
                                    <div className="mr-20 mb-6 flex flex-col">
                                        <div className="mb-2 text-sm offer-text">Отдел продаж</div>
                                        <span className="text-lg">welcome@bookapart.ru</span>
                                    </div>
                                    <div className="mr-20 my-6 flex flex-col ">
                                        <div className="mb-2 text-sm offer-text">Viber и WhatsApp</div>
                                        <span className="text-lg">+7 (931) 255 68 35</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pb-8 text-xs font-bold uppercase">что расположено рядом</div>
                        <div className="flex flex-row box-border mb-10 justify-between">
                            <div className=" flex-row box-border">
                                <div className=" flex-row box-border">
                                    <div className="flex flex-col">
                                        
                                        <span className="text-lg">Московский вокзал</span>
                                    </div>
                                    <div className="my-6 flex flex-col ">
                                       
                                        <span className="text-lg">Невский проспект</span>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex-row box-border">
                                <div className=" flex-row box-border">
                                    <div className="mr-20 mb-6 flex flex-col">
                                       
                                        <span className="text-lg">м. Маяковская</span>
                                    </div>
                                    <div className="mr-20 my-6 flex flex-col ">
                                      
                                        <span className="text-lg">м. Площадь Восстания</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <ContactMap />
                </div>
            </div>
        </div>
      
    );
};
export default ContactInfrastructure;