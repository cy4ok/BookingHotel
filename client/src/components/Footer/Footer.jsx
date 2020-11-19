import React from 'react';
import SlideItem from '../Header/SlideItem';
//import AwesomeIcon from './AwesomeIcon';

class Footer extends React.Component {

    render() {
        return(  
        <div className="container bg-primary">
            <div className="flex justify-between pt-12 pb-8">

                <div className="flex flex-col justify-between">
                    <div className="flex flex-col text-2xl">
                        <SlideItem name="+7 (812) 561 57 20" />
                        <SlideItem name="welcome@bookapart.ru" />
                    </div>
                    <div className="px-2">
                        <button className="btn--primary py-2 px-5 focus:outline-none">
                        Заказать звонок
                        </button>
                    </div>           
                    <div className="p-2 btn--social text-smoke ">                   
                        social     
                        {/* <AwesomeIcon /> */}

                    </div>
                    <span className="text-smoke text-lg uppercase p-2">2020 &copy; Artstudio</span>
                </div>

                <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                        <h4 className="text-smoke text-xs font-bold tracking-wide uppercase p-2 mb-2">Об отелях</h4> 
                        <div className="flex flex-col text-lg">
                            <SlideItem name="Апарт-отели" url="/apartments" />
                            <SlideItem name="Купить апартаменты" url="/" />
                            <SlideItem name="Программа лояльности" url="/loyalty" />
                        </div>
                    </div>
                    <span className="text-smoke text-lg p-2">Группа RBI</span>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-col justify-between">
                        <h4 className="text-smoke text-xs font-bold tracking-wide uppercase p-2 mb-2">О компании</h4>
                        <div className="flex flex-col text-lg mb-8">
                            <SlideItem name="О RBI PM" url="/about" />
                            <SlideItem name="Контакты" url="/contacts" />
                            <SlideItem name="Политика конфиденциальности" url="/" />
                            <SlideItem name="Пользовательское соглашение" url="/" />
                            <SlideItem name="Публичная оферта" url="/" />
                            <SlideItem name="Оплата" url="/" />
                        </div>
                    </div>
                    <span className="text-smoke text-lg p-2">Разработка сайта Func.</span>
                </div>
            </div>      
        </div>
        );
    }
}

export default Footer;
