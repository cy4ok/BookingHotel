import React from "react";
import { useWatch } from "react-hook-form";

const AdultsChildren = ({ control }) => {
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
    children && `${children} ${childrenPresentation[childrenPluralRule]}`
  ].filter(Boolean).join(' ');

  return <span>{label || defaultLabel}</span>;
};

export default AdultsChildren;
