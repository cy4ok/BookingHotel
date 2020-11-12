import React, {Component} from 'react';
import HideButton from '../HideButton/HideButton';
import SlideItem from '../SlideItem';
import './SlideMenu.css';

class SlideMenu extends Component {
    render() {
        var visibility = 'hide';
        if (this.props.visibility) {
            visibility = 'show';
        }
        return (           
            <div id="slide-menu" className={visibility}> 
                <HideButton handleClick={this.props.handleClick} />
                <div class="relative text-xl text-white grid gap-8 p-8">
                    <div class="flex flex-col px-5">
                        <SlideItem name="Апарт-отели"/>   
                        <SlideItem name="Бронировать апартаменты"/>
                        <SlideItem name="Корпоративным клиентам"/>
                        <SlideItem name="Программа лояльности"/>
                        <SlideItem name="Ресторан ATLAS BISTRO"/>
                        <SlideItem name="Акции"/>
                        <SlideItem name="О RBI PM"/>
                        <SlideItem name="Контакты"/>
                    </div>
                    <div class="flex flex-col px-5">
                        <SlideItem name="+7 (812) 561 57 20"/>
                        <SlideItem name="welcome@bookapart.ru"/>
                    </div>
                    <div class="px-5 sm:p-3">
                        <button class="btn--primary py-2 px-5 focus:outline-none">
                            Заказать звонок
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SlideMenu;