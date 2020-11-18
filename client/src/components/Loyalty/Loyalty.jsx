import React from 'react';

class Loyalty extends React.Component {

    render() {
        return(
        <div>   
            <div className="container ">
                <h1 className="text-white text-5xl py-12 pb-20">Программа лояльности</h1>
            </div>
            <div className="container bg-fourth">
                <div className="pt-12">
                    <article className="py-20 text-lg">
                        <p className="mt-6 text-grey">Для гостей, приезжающих к нам повторно, мы разработали систему лояльности ARTSTUDIO BONUS, позволяющую воспользоваться целым рядом преимуществ: от позднего выезда до бесплатной уборки. Чем чаще мы встречаемся, тем существеннее наше предложение.</p>
                        <p className="mt-6 text-grey">За подробностями акции обращайтесь к вашему менеджеру.</p>
                    </article>
                </div>
            </div>
        </div>
        );
    }
}

export default Loyalty;