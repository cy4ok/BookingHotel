import React from "react";
import FotoSlider from "./FotoSlider.jsx";
import Items from "./Items";
import "../../Restaurant/customstyles/restaurantstyle.css";

function FotoGallery() {
  const [fotoIsOpen, setFotoIsOpen] = React.useState(false);
  const [active, setActive] = React.useState();
  const [tumbs, setTumbs] = React.useState(false);

  const handlerClick = (e) => {
    setFotoIsOpen(true);
    setActive(+e.target.name);
  };
  const closeFoto = () => {
    setFotoIsOpen(false);
    setTumbs(false);
  };
  return (
    <div
      className={
        tumbs ? "flex  flex-row justify-between mt-12" : "flex flex-col mt-12 "
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
          <div className="img_section flex gap-1  ">
            {Items.map((img, i) => (
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
          <FotoSlider
            open={fotoIsOpen}
            initial={active}
            close={closeFoto}
            data={Items}
            tumbsOpen={() => setTumbs(!tumbs)}
          />
        </div>
        {tumbs && (
          <div className=" slider_tumbs w-1/12 h-full flex justify-between flex-wrap gap-1">
            {Items.map((img, i) => (
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
    </div>
  );
}


export default FotoGallery;