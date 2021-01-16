import { setupWorker, rest } from "msw";
import Studio from "../components/ArtStudio/Card/img/studio.jpg";
import Superior from "../components/ArtStudio/Card/img/superior.jpg";
import Deluxe from "../components/ArtStudio/Card/img/deluxe.jpg";
import JuniorSuite from "../components/ArtStudio/Card/img/juniorSuite.jpg";
import Suite from "../components/ArtStudio/Card/img/suite.jpg";

const worker = setupWorker(
  rest.get(`/booking`, (req, res, ctx) => {
    const adults = req.url.searchParams.get("adults");
    const children = req.url.searchParams.get("children");
    const guests = Number(adults) + Number(children);

    if (guests <= 3) {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 1,
            typeOfApartment: "Studio",
            area: 29,
            mainImg: Studio,
            images: ["studio.jpg"],
            guest: "1-2",
            guestsMax: 2,
            priceDay: 2900,
            priceMounth: 40000,
            type: "Комплектация апартамента",
            desc: [
              "Кровать King size/Twin",
              "Гардеробная/ система хранения",
              "Полностью оборудованная кухня",
              "Современная бытовая техника",
              "Посуда/столовые приборы",
              "Комфортабельная рабочая зона",
              "Многоканальное Цифровое ТВ",
              "Сейф",
              "Банные халаты",
              "Мягкие тапочки",
              "Французская косметика",
              "Фен",
            ],
            services: [
              "Wi-Fi и выделенный проводной интернет",
              "Обслуживание 24/7",
              "Трансфер",
              "Визовая поддержка",
              "Экскурсии",
              "Дополнительные гостиничные услуги",
            ],
            smoking: "Запрещено",
            parking: "Подземная",
          },
          {
            id: 2,
            typeOfApartment: "Superior",
            area: 35,
            mainImg: Superior,
            images: ["superior.jpg"],
            guest: "1-3",
            guestsMax: 3,
            priceDay: 3000,
            priceMounth: 50000,
            type: "Двухкомнатные апартаменты",
            desc: [
              "Кровать King size/Twin",
              "Гардеробная/ система хранения",
              "Полностью оборудованная кухня",
              "Современная бытовая техника",
              "Посуда/столовые приборы",
              "Комфортабельная рабочая зона",
              "Многоканальное Цифровое ТВ",
              "Сейф",
              "Банные халаты",
              "Мягкие тапочки",
              "Французская косметика",
              "Фен",
            ],
            services: [
              "Wi-Fi и выделенный проводной интернет",
              "Обслуживание 24/7",
              "Трансфер",
              "Визовая поддержка",
              "Экскурсии",
              "Дополнительные гостиничные услуги",
            ],
            smoking: "Запрещено",
            parking: "Подземная",
          },
          {
            id: 3,
            typeOfApartment: "Deluxe",
            area: 43,
            mainImg: Deluxe,
            images: ["deluxe.jpg"],
            guest: "1-3",
            guestsMax: 3,
            priceDay: 3100,
            priceMounth: 60000,
            type: "Двухкомнатные апартаменты",
            desc: [
              "Кровать King size/Twin",
              "Гардеробная/ система хранения",
              "Полностью оборудованная кухня",
              "Современная бытовая техника",
              "Посуда/столовые приборы",
              "Комфортабельная рабочая зона",
              "Многоканальное Цифровое ТВ",
              "Сейф",
              "Банные халаты",
              "Мягкие тапочки",
              "Французская косметика",
              "Фен",
            ],
            services: [
              "Wi-Fi и выделенный проводной интернет",
              "Обслуживание 24/7",
              "Трансфер",
              "Визовая поддержка",
              "Экскурсии",
              "Дополнительные гостиничные услуги",
            ],
            smoking: "Запрещено",
            parking: "Подземная",
          },
          {
            id: 4,
            typeOfApartment: "Junior Suite",
            area: 57,
            mainImg: JuniorSuite,
            images: ["juniorSuite.jpg"],
            guest: "1-3",
            guestsMax: 3,
            priceDay: 3500,
            priceMounth: 75000,
            type: "Двухкомнатные апартаменты",
            desc: [
              "Кровать King size/Twin",
              "Гардеробная/ система хранения",
              "Полностью оборудованная кухня",
              "Современная бытовая техника",
              "Посуда/столовые приборы",
              "Комфортабельная рабочая зона",
              "Многоканальное Цифровое ТВ",
              "Сейф",
              "Банные халаты",
              "Мягкие тапочки",
              "Французская косметика",
              "Фен",
            ],
            services: [
              "Wi-Fi и выделенный проводной интернет",
              "Обслуживание 24/7",
              "Трансфер",
              "Визовая поддержка",
              "Экскурсии",
              "Дополнительные гостиничные услуги",
            ],
            smoking: "Запрещено",
            parking: "Подземная",
          },
        ])
      );
    }

    if (guests > 3) {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 5,
            typeOfApartment: "Suite",
            area: 58,
            mainImg: Suite,
            images: ["suite.jpg"],
            guest: "1-5",
            guestsMax: 5,
            priceDay: 4000,
            priceMounth: 77419,
            type: "Трёхкомнатные апартаменты",
            desc: [
              "Кровать King size/Twin",
              "Гардеробная/ система хранения",
              "Полностью оборудованная кухня",
              "Современная бытовая техника",
              "Посуда/столовые приборы",
              "Комфортабельная рабочая зона",
              "Многоканальное Цифровое ТВ",
              "Сейф",
              "Банные халаты",
              "Мягкие тапочки",
              "Французская косметика",
              "Фен",
            ],
            services: [
              "Wi-Fi и выделенный проводной интернет",
              "Обслуживание 24/7",
              "Трансфер",
              "Визовая поддержка",
              "Экскурсии",
              "Дополнительные гостиничные услуги",
            ],
            smoking: "Запрещено",
            parking: "Подземная",
          },
        ])
      );
    }
  })
);

worker.start();
