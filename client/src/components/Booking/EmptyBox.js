import React from "react";
import IconWatchBig from "./IconWatchBig";

const EmptyBox = () => {
  return (
    <div className="flex flex-col items-center max-w-sm">
      <IconWatchBig />
      <div className="text-center text-grey text-lg">
        Чтобы заполнить заявку, выберите даты прибытия и выезда
      </div>
    </div>
  );
};

export default EmptyBox;
