import React from "react";
import { ArowLeft } from "../../Restaurant/img/ArowLeft";
import { ArrowRight } from "../../Restaurant/img/ArrowRight";
import { ZoomIcon } from "../../Restaurant/img/ZoomIcon";
import { PlayIcon } from "../../Restaurant/img/PlayIcon";
import { ThumbsIcon } from "../../Restaurant/img/ThumbsIcon";
import { CloseIcon } from "../../Restaurant/img/CloseIcon";

function FotoSlider({ data, close, open, initial, tumbsOpen }) {
  const [index, setIndex] = React.useState();
  const [scale, setScale] = React.useState(false);

  React.useEffect(() => {
    setIndex(initial);
  }, [initial]);

  const prevSlide = () => {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const nextSlide = () => {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  if (!open) return null;
  return (
    <div className="modal_window bg-black absolute top-0  left-0 right-0 bottom-0 bg-opacity-75 pb-4">
      <div className="modal_header w-full flex px-3 justify-end py-1">
        <ZoomIcon onClick={() => setScale(!scale)} />
        <PlayIcon />
        <ThumbsIcon onClick={tumbsOpen} />
        <CloseIcon onClick={close} />
      </div>

      <div className="slider_inner w-full  flex justify-center aling-center">
        <ArowLeft onClick={prevSlide} />
        <img
          className={
            (open
              ? "slide_img  w-4/5  object-scale-down"
              : " w-4/5 object-scale-down",
            scale
              ? "   slide_scale w-4/5 object-scale-down"
              : " slide_img w-4/5 object-scale-down")
          }
          src={data[index]}
          alt="slide"
        />
        <ArrowRight onClick={nextSlide} />
      </div>
    </div>
  );
}

export default FotoSlider;
