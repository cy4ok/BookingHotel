import React, { forwardRef } from "react";
import { useWatch } from "react-hook-form";

const AdultsChildren = forwardRef(({ control, onClick }, ref) => {
  const { adults, children } = useWatch({
    control,
    name: ["adults", "children"],
  });

  const adultsPresentation = {
    one: "взрослый",
    few: "взрослых",
    many: "взрослых",
  };

  const childrenPresentation = {
    one: "ребенок",
    few: "детей",
    many: "детей",
  };

  const adultsPluralRule = new Intl.PluralRules("ru-RU").select(adults);
  const childrenPluralRule = new Intl.PluralRules("ru-RU").select(children);

  const defaultLabel = "Гости";
  const label = [
    adults && `${adults} ${adultsPresentation[adultsPluralRule]}`,
    children && `${children} ${childrenPresentation[childrenPluralRule]}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span onClick={onClick} ref={ref}>
      {label || defaultLabel}
    </span>
  );
});

AdultsChildren.displayName = "AdultsChildren";

export default AdultsChildren;
