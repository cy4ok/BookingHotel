import React from "react";

const About = () => {
    return(
        <div className="container">
            <div className = "block w-1/2 mx-auto px-12 pt-6 pb-12">
                <p className="text-lg font-normal mt-16 mb-6">
                    Управляющая компания RBI PM – это профессиональный отельный оператор. 
                    Задачей компании является создание максимально комфортных условий для размещения бизнес-туристов и внедрение новых стандартов на рынок размещения персонала
                </p>
                <p className="text-lg font-normal mt-12 mb-6"> 
                RBI PM является частью Группы RBI. RBI реализует проекты жилой и коммерческой недвижимости, 
                являясь признанным лидером в сегменте элитного жилья и жилья бизнес-класса в Санкт-Петербурге. С 2018 года компания развивает собственную сеть апарт-отелей
                </p>
                <blockquote>
                    <p className="text-lg font-normal mt-12 mb-6">
                        Для нас во главе бизнеса всегда стоит клиент и его потребности. Ведь мы создаем «дом вдали от дома», то есть даем возможность всем нашим гостям забыть 
                        о неудобствах временного жилья. Большое количество нестандартных планировок позволяет каждому выбрать апартамент на свой вкус: с эркерами, высокими потолками 
                        или эргономичный и компактный. Все сервисы: от завтрака или организации экскурсии можно заказать одним нажатием кнопки на телефоне. Все наши сотрудники имеют 
                        многолетний опыт работы в ведущих гостиничных сетях и знают, что такое персональный сервис для каждого гостя. Ключевое слово для нас – Эмпатия, 
                        именно она позволяет нам предвосхищать ваши ожидания.
                    </p>
                    <p className="text-lg font-normal mt-12 mb-6">
                        Карина Шальнова
                        <span className="text-sm block">Директор RBI PM</span>
                    </p>
                </blockquote>
                <h2 className="text-3xl font-medium mt-12 mb-6">Контакты</h2>
                <span className="block text-lg font-normal">
                    Фактический адрес: 191036, г. Санкт-Петербург, 2 Советская 4Б строение 1
                </span>
                <span className="block text-lg font-normal">
                    Электронная почта: welcome@bookapart.ru
                </span>
                <span className="block text-lg font-normal">
                    Телефоны: +7 (812) 561 57 20
                </span>
                <h2 className="text-3xl font-medium mt-12 mb-6">Реквизиты</h2>
                <span className="block text-xl font-normal">
                    ООО «Эр-Би-Ай Проперти Менеджмент»
                </span>
                <span className="block text-lg font-normal">
                    ИНН 7801359891 / ОГРН 1187847197471
                </span>
                <span className="block text-lg font-normal">
                    Юридический адрес: 199004, г. Санкт-Петербург, Малый пр., В.О., дом 22, литера А, пом. 1-Н
                </span>
                <span className="block text-lg font-normal">
                    Тел.: +7 (812) 561 57 20
                </span>   
            </div>    
        </div>
    );
};

export default About;
