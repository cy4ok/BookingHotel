import React from "react";
import { Link } from "react-router-dom";
import IconMan from "../../../images/icons/IconMan";
import IconTv from "../img/IconTv";
import IconInternet from "../img/IconInternet";
import IconPhone from "../img/IconPhone";
import IconLock from "../img/IconLock";
import IconKitchen from "../img/IconKitchen";
import IconLamp from "../img/IconLamp";
import IconMicrowave from "../img/IconMicrowave";
import IconMirror from "../img/IconMirror";
import IconRefrigerator from "../img/IconRefrigerator";
import IconSecurity from "../img/IconSecurity";
import IconSingle from "../img/IconSingle";
import IconSink from "../img/IconSink";
import IconSlippers from "../img/IconSlippers";
import IconToilet from "../img/IconToilet";
import IconTowel from "../img/IconTowel";
import IconTwin from "../img/IconTwin";
import IconView from "../img/IconView";
import IconAlarm from "../img/IconAlarm";
import IconArmchair from "../img/IconArmchair";
import IconBathrobe from "../img/IconBathrobe";
import IconBathroom from "../img/IconBathroom";
import IconCosmetics from "../img/IconCosmetics";
import IconHairdryer from "../img/IconHairdryer";
import IconIron from "../img/IconIron";
import IconTable from "../img/IconTable";
import IconNightstand from "../img/IconNightstand";
import IconNewspaper from "../img/IconNewspaper";
import IconPoof from "../img/IconPoof";
import IconSafe from "../img/IconSafe";
import IconService from "../img/IconService";
import IconSofa from "../img/IconSofa";
import IconTea from "../img/IconTea";
import IconWasher from "../img/IconWasher";
import IconBedside from "../img/IconBedside";
import IconBottledWater from "../img/IconBottledWater";
import IconChair from "../img/IconChair";
import IconCookware from "../img/IconCookware";
import IconCupboard from "../img/IconCupboard";
import IconDesk from "../img/IconDesk";
import IconDishwasher from "../img/IconDishwasher";
import IconHanger from "../img/IconHanger";
import IconIroning from "../img/IconIroning";
import IconKitchenStove from "../img/IconKitchenStove";
import IconKettle from "../img/IconKettle";
import IconArow from "../img/IconArow";
import "./swiper.css";
/* import FotoGallery from "./FotoGallery"; */
import SuperiorItem from "./SuperiorItem.jsx";
/* import GallerySwiper from './GallerySwiper.jsx'; */

function Superior() {
    return (
        <div className="m-20 h-auto">
            <div className="flex flex-row justify-between">
                <div className="p-2 w-1/2 h-1/3">
                   {/*  <React.StrictMode>
                        <GallerySwiper />
                    </React.StrictMode>
                    <FotoGallery /> */}
                    <SuperiorItem />
                </div>
                <div className="mx-5">
                    <div className=" ">
                        <h2 className="text-grey text-3xl">Superior</h2>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row font-bold text-base items-center">
                                <IconMan />   Вместимость до 2 мест</div>
                            <div className="flex flex-row justify-between w-1/2">
                                <div className="flex flex-row">от <div className="text-2xl font-bold ml-3"> {/* {items.price} */} 6300
                                 <span class="font-normal text-opacity-60">₽</span></div>
                                </div>
                                <div class="btn bg-btnGold w-32 h-10 text-white text-center font-bold z-20 relative"><a class="flex justify-center items-center w-full h-full block box-border" href="/booking"><span>Выбрать</span></a></div>
                            </div>
                        </div>
                        <p className="font-bold my-3">Площадь 35 кв. м</p>
                        <div className="">Апартамент с одной спальней, кухня, в некоторых номерах есть гардеробная.
                        Кровать King Size или 2 односпальных кровати.</div>
                    </div>
                    <div className="bg-fourth flex flex-row my-5">
                        <div className="w-1/2">
                            <ul className="m-5">
                                <li className="text-base "> <p className="font-bold my-3">Видео/аудио:</p>
                                    <li className="flex flex-row text-grey text-base"><IconTv /> Цифровое тв</li></li>
                                <li className="text-base "> <p className="font-bold my-3">Интернет/телефония:</p>
                                    <li className="flex flex-row text-grey text-base"><IconPhone />IP-телефон</li>
                                    <li className="flex flex-row text-grey text-base"><IconInternet />Интернет</li>
                                    <li className="flex flex-row text-grey text-base"><IconInternet />Wi-Fi</li>
                                </li>
                                <li className="text-base "><p className="font-bold my-3">Электроника:</p>
                                    <li className="flex flex-row text-grey text-base"><IconLock />Электронные замки</li>
                                    <li className="flex flex-row text-grey text-base"><IconAlarm />Будильник</li>
                                    <li className="flex flex-row text-grey text-base"> <IconLamp />Настольные лампы</li>
                                    <li className="flex flex-row text-grey text-base"><IconKitchen />Плита для приготовления пищи</li>
                                    <li className="flex flex-row text-grey text-base"><IconSecurity /> Система безопасности</li>
                                    <li className="flex flex-row text-grey text-base"><IconIron />Утюг</li>
                                    <li className="flex flex-row text-grey text-base"><IconHairdryer />Фен</li>
                                    <li className="flex flex-row text-grey text-base"><IconMicrowave />Микроволновая печь</li>
                                    <li className="flex flex-row text-grey text-base"><IconRefrigerator />Холодильник</li>
                                </li>
                                <li className="text-base "> <p className="font-bold my-3">Ванная комната:</p>
                                    <li className="flex flex-row text-grey text-base"><IconTowel />Банные полотенца</li>
                                    <li className="flex flex-row text-grey text-base"><IconBathroom />Ванна</li>
                                    <li className="flex flex-row text-grey text-base"><IconCosmetics />Гигиенические средства</li>
                                    <li className="flex flex-row text-grey text-base"><IconCosmetics />Косметические средства</li>
                                    <li className="flex flex-row text-grey text-base"><IconSink />Раковина</li>
                                    <li className="flex flex-row text-grey text-base"><IconTv />Гостиничная парфюмерия</li>
                                    <li className="flex flex-row text-grey text-base"><IconSlippers />Тапочки</li>
                                    <li className="flex flex-row text-grey text-base"><IconBathrobe />Халаты</li>
                                    <li className="flex flex-row text-grey text-base"><IconToilet />Раздельный санузел</li>
                                </li>
                                <li className="text-base "><p className="font-bold my-3">Внешняя территория и вид из окон:</p>
                                    <li className="flex flex-row text-grey text-base"><IconView />Вид на город</li>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2 pr-5">
                            <ul ul className="m-5">
                                <li className="text-base "><p className="font-bold my-3">Кровати:</p>
                                    <li className="flex flex-row text-grey text-base"><IconTwin />Две односпальные или большая двуспальная кровать</li>
                                    <li className="flex flex-row text-grey text-base"><IconSingle />Ортопедический матрас</li>
                                </li>
                                <li className="text-base "><p className="font-bold my-3">Мебель:</p>
                                    <li className="flex flex-row text-grey text-base"><IconMirror />Зеркало</li>
                                    <li className="flex flex-row text-grey text-base"><IconArmchair />Кресло</li>
                                    <li className="flex flex-row text-grey text-base"><IconTable />Обеденный стол</li>
                                    <li className="flex flex-row text-grey text-base"><IconPoof />Пуфики</li>
                                    <li className="flex flex-row text-grey text-base"><IconNightstand />Тумба</li>
                                    <li className="flex flex-row text-grey text-base"><IconBedside />Комод</li>
                                    <li className="flex flex-row text-grey text-base"><IconDesk />Письменный стол</li>
                                    <li className="flex flex-row text-grey text-base"><IconChair />Стулья</li>
                                    <li className="flex flex-row text-grey text-base"><IconTv />Раскладной диван</li>
                                    <li className="flex flex-row text-grey text-base"><IconHanger />Вешалки</li>
                                    <li className="flex flex-row text-grey text-base"><IconCupboard />Шкаф для одежды</li>
                                </li>
                                <li className="text-base "><p className="font-bold my-3">Прочее:</p>
                                    <li className="flex flex-row text-grey text-base"><IconNewspaper />Информационная карта, меню</li>
                                    <li className="flex flex-row text-grey text-base"><IconCookware />Набор посуды</li>
                                    <li className="flex flex-row text-grey text-base"><IconService />Обслуживание номеров</li>
                                    <li className="flex flex-row text-grey text-base"><IconDishwasher />Посудомоечная машина</li>
                                    <li className="flex flex-row text-grey text-base"><IconTea />Чайный набор</li>
                                    <li className="flex flex-row text-grey text-base"><IconIroning />Гладильная доска</li>
                                    <li className="flex flex-row text-grey text-base"><IconKitchenStove />Кухня</li>
                                    <li className="flex flex-row text-grey text-base"><IconBottledWater />Питьевая вода</li>
                                    <li className="flex flex-row text-grey text-base"><IconTv />Столовые приборы</li>
                                    <li className="flex flex-row text-grey text-base"><IconSofa />Гостиная зона</li>
                                    <li className="flex flex-row text-grey text-base"><IconCookware />Кухонная посуда</li>
                                    <li className="flex flex-row text-grey text-base"><IconSafe />Сейф</li>
                                    <li className="flex flex-row text-grey text-base"><IconWasher />Стиральная машина</li>
                                    <li className="flex flex-row text-grey text-base"><IconKettle />Чайник</li>
                                </li>
                                <li className="flex flex-row text-grey text-base"></li></ul>
                        </div>

                    </div>
                    <Link><p className="flex flex-row font-bold text-brown text-lg align-center">Свернуть описание <IconArow /> </p></Link>
                </div>
            </div>
        </div>
    );
};
export default Superior;