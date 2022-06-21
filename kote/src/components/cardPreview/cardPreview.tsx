import React, { useEffect, useRef, useState } from "react";
import styles from "./cardPreview.style";

import { WEIGHT_PER_SERVING } from "../../constants/card.constants";
import { CardPreviewType } from "../../types/card.types";

import Offer from "../offers/offer";
import MouseOffer from "../offers/mouseOffer";

function CardPreview({
  data,
  changeSelection,
}: {
  data: CardPreviewType;
  changeSelection: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isMouseOverCard, setIsMouseOverCard] = useState(false);

  const classes = styles();

  const servingsOfferData = (amount: number) => {
    const wordForms = { 0: "порций", 1: "порция", 2: "порции" };
    return {
      amount,
      wordForms,
      specialStyles: { letterSpacing: 0.4 },
    };
  };

  const mouseOfferData = (servingsAmount: number) => {
    const amount = Math.ceil(servingsAmount / 20);
    const wordForms = { 0: "мышей", 1: "мышь", 2: "мыши" };

    return {
      amount,
      wordForms,
      specialStyles: { letterSpacing: 0.1 },
    };
  };

  const totalWeight = ((WEIGHT_PER_SERVING * data.servingsAmount) / 1000)
    .toString()
    .split(".")
    .join(",");

  const previewContainer = useRef(null);

  const handleCardSelection = () => {
    changeSelection((selection) => !selection);
  };

  useEffect(() => {
    const element: HTMLDivElement | null = previewContainer.current;
    if (!element) return;
    const divElement: HTMLDivElement = element as HTMLDivElement;

    const handleMouseLeaving = () => {
      console.log("leave");
      divElement.classList.remove(classes.selected_hover);
      divElement.removeEventListener("mouseleave", handleMouseLeaving);
    };

    if (data.isSelected && isMouseOverCard) {
      divElement.classList.add(classes.selected_hover);
      divElement.addEventListener("mouseleave", handleMouseLeaving);
    }
    if (data.isSelected && !isMouseOverCard)
      divElement.classList.remove(classes.selected_hover);

    return () =>
      divElement.removeEventListener("mouseleave", handleMouseLeaving);
  }, [data.isSelected]);

  return (
    <div
      className={`${classes.border} ${
        (data.isSelected && classes.selected) ||
        (data.isDisabled && classes.disabled)
      }`}
      onMouseLeave={() => setIsMouseOverCard(false)}
      onMouseEnter={() => setIsMouseOverCard(true)}
      onClick={handleCardSelection}
      ref={previewContainer}
    >
      <div className={classes.preview}>
        <div className={classes.preview__description}>
          <h2 className={classes.description__title}>Нямушка</h2>
          <h3 className={classes.description__taste}>{data.taste}</h3>
          <Offer {...servingsOfferData(data.servingsAmount)} />
          <MouseOffer {...mouseOfferData(data.servingsAmount)} />
        </div>
        <div className={classes.description__weight}>
          <p style={{ fontSize: 42, lineHeight: "38px" }}>{totalWeight}</p>
          <p style={{ fontSize: 21 }}>кг</p>
        </div>
      </div>
    </div>
  );
}

export default CardPreview;
