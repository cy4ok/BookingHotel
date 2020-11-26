import React from "react";
import { ReactComponent as LinkIcon } from "./img/icon_marker_link.svg";
import { Link } from "react-router-dom";




function Info() {
    return (
        <div className="container p-20 flex flex-row justify-between">
            <div className="w1/2">
                <div className="w1/2 pb-6">
                    <div className="text-5xl">5 минут</div>
                    <div className="text-xl text-grey textOpacity ">до Невского проспекта</div>
                </div>
                <div className="w1/2 pb-6">
                    <div className="text-5xl ">24/7</div>
                    <div className="text-xl text-grey textOpacity ">гостиничный сервис</div>
                </div>
                <div className="w1/2 pb-6">
                    <div className="text-5xl">8 минут</div>
                    <div className="text-xl text-grey textOpacity">до Московского вокзала</div>
                </div>
            </div>

            <div className="w-1/2 pt-2">
                <div className="text-2xl mb-4">ARTSTUDIO Nevsky — апарт-отель 4* в самом сердце Санкт-Петербурга.</div>
                <div className="text-lg text-grey textOpacity mb-8">В пешей доступности Невский проспект, основные достопримечательности города, рестораны, торговые центры, Московский вокзал. Классическая петербургская архитектура, уютный внутренний дворик, изысканные холлы, великолепные виды на исторический центр — все для наших гостей. В комплексе 5 категорий апартаментов: от студий с эркерами до номеров с двумя спальнями.</div>
                <Link to="/contacts">
                    <span className="text-lg text-left text-brown hover:text-black">
                        <LinkIcon className="btn-linicon text-brown hover:text-black mr-3 mb-1" />
    Санкт-Петербург, 2-я Советская улица, 4
</span>
                </Link>
            </div>

        </div>

    );
};
export default Info;