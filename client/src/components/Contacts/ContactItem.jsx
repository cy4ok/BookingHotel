import React from "react";

const ContactItem = () => {
    return (
        <div className="mx-12 my-20">
            <h1 className="pb-6 uppercase text-2xl">rbi pm</h1>
            <div className="flex flex-row box-border mb-20 justify-between">
                <div className=" flex-row box-border">
                    <div className=" flex-row box-border">
                        <div className="mr-6 flex flex-col">
                            <div className="mb-2 text-sm offer-text">Телефон</div>
                            <span className="text-lg">+7 (812) 561 57 25</span>
                        </div>
                        <div className="mr-6 my-6 flex flex-col ">
                            <div className="mb-2 text-sm offer-text">Факс</div>
                            <span className="text-lg">+7 (812) 561 57 25</span>
                        </div>
                    </div>
                </div>
                <div className=" flex-row box-border">
                    <div className=" flex-row box-border">
                        <div className="mr-8 mb-6 flex flex-col">
                            <div className="mb-2 text-sm offer-text">Электронная почта</div>
                            <span className="text-lg">welcome@bookapart.ru</span>
                        </div>
                        <div className="mr-8 my-6 flex flex-col ">
                            <div className="mb-2 text-sm offer-text">Обратная связь (Пожелания/жалобы)</div>
                            <span className="text-lg">feedback@bookapart.ru</span>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="pb-6 text-2xl"><span className="uppercase">ARTSTUDIO</span> Nevsky</h1>
            <div className="flex flex-row box-border mb-10 justify-between">
                <div className=" flex-row box-border">
                    <div className=" flex-row box-border">
                        <div className="flex flex-col">
                            <div className="mb-2 text-sm offer-text">Адрес</div>
                            <span className="text-lg">ул. 2-ая Советская, 4Б, стр.1</span>
                        </div>
                        <div className="my-6 flex flex-col ">
                            <div className="mb-2 text-sm offer-text">Телефон</div>
                            <span className="text-lg">+7 (812) 561 57 25</span>
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
        </div>
    )
}
export default ContactItem;