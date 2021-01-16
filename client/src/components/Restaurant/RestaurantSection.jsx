import React from "react";
import ModalSlider from "./ModalSlider";
import { restaurantImgData } from "./restaurantImgData";
import "./customstyles/restaurantstyle.css";

function RestaurantSection() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [active, setActive] = React.useState();
  const [tumbs, setTumbs] = React.useState(false);

  const handlerClick = (e) => {
    setModalIsOpen(true);
    setActive(+e.target.name);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setTumbs(false);
  };
  return (
    <div
      className={
        tumbs ? "flex flex-row justify-between" : "flex flex-col"
      }
    >
      <div
        className={
          !tumbs
            ? "restaurant_section w-full relative bg-gray-200"
            : "restaurant_section relative bg-gray-200 w-auto"
        }
      >
        <div className="container ">
          <article className="inner  py-16 text-lg">
            <p>
              <strong>ATLAS BISTRO</strong>
            </p>
            <p className="mb-6">
              На первом этаже апарт-отеля расположен гастробар на каждый день с
              европейской дружеской атмосферой и понятной едой.
            </p>
            <p className="mb-6">ЗАВТРАК В ПЕТЕРБУРГЕ</p>
            <p className="mb-6">
              Начните утро с фермерских завтраков в атмосфере спокойствия и
              наслаждения. Нежные каши, омлеты, оладьи и сырники готовим из
              свежих локальных продуктов и подаем ежедневно с 7 утра в будние
              дни: с 7 до 10:00 и в выходные дни: с 7:00 до 11:00 . Многие
              рецепты знакомы нам с самого детства и спустя столько времени они
              менялись по-разному. Наша задача была оставить все в первозданном
              виде и передать ту атмосферу, которую несет в себе завтрак, когда
              понятные ингредиенты приготовлены с любовью.
            </p>
            <p className="mb-6">ATLAS BISTRO</p>
            <p className="mb-6">
              Выпить чашечку кофе перед работой? Провести деловую встречу, не
              выходя из дома? Устроить ужин в компании друзей?
            </p>
            <p className="mb-6">
              Всё это вы сможете сделать в ресторане ATLAS BISTRO, который
              находится на первом этаже нашего апарт-отеля. Авторская кухня,
              винная карта на 70 позиций, стильный интерьер. В меню — буратта с
              красной икрой, краб на тосте с зеленью, тартар из говядины
              по-флорентийски и другие вкуснейшие блюда от шефа.
            </p>
            <p className="mb-16">Мы рады приветствовать Вас каждый день!</p>
            <div className="img_section flex gap-1  ">
              {restaurantImgData.map((img, i) => (
                <img
                  onClick={handlerClick}
                  className="w-1/6 img_section_item"
                  name={i}
                  src={img}
                  alt={img}
                  key={i}
                />
              ))}
            </div>
          </article>
        </div>
        <ModalSlider
          open={modalIsOpen}
          initial={active}
          close={closeModal}
          data={restaurantImgData}
          tumbsOpen={() => setTumbs(!tumbs)}
        />
      </div>
      {tumbs && (
        <div className=" slider_tumbs w-1/12 h-full flex justify-between flex-wrap gap-1">
          {restaurantImgData.map((img, i) => (
            <img
              onClick={handlerClick}
              className="  tumbs_section_item w-full h-auto"
              name={i}
              src={img}
              alt={img}
              key={i}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default RestaurantSection;
