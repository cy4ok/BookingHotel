import React from 'react';

class Footer extends React.Component {

    render() {
        return(  //ссылки сделать
        <div className="container bg-primary flex">
            <div className="flex flex-col">
                <a href="/">+7 (812) 561 57 20</a>  
                <a href="/">welcome@bookapart.ru</a>
                <div className="px-5 sm:p-3">
                    <button className="btn--primary py-2 px-5 focus:outline-none">
                    Заказать звонок
                    </button>
                </div>
                <div>sociality</div>
                <span>2020 &copy; ARTSTUDIO</span>
            </div>

            <div className="flex flex-col">
                <h4>ОБ ОТЕЛЯХ</h4>
                <a href="#">Апарт-отели</a>  
                <a href="#">Купить апартаменты</a> 
                <a href="#">Программа лояльности</a> 
                <span>Группа RBI</span>
            </div>

            <div className="flex flex-col">
                <h4>О КОМПАНИИ</h4>
                <a href="#">Апарт-отели</a>  
                <a href="#">Купить апартаменты</a> 
                <a href="#">Программа лояльности</a> 
                <span>Разработка сайта Func.</span>
            </div>
        
        </div>
        );
    }
}

export default Footer;