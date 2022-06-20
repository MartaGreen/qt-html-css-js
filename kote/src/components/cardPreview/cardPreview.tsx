import React, { useRef } from "react";
import styles from "./cardPreview.style";

import { WEIGHT_PER_SERVING } from "../../constants/card.constants";
import { CardPreviewType } from "../../types/card.types";

function CardPreview({
  data,
  changeSelection,
}: {
  data: CardPreviewType;
  changeSelection: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const classes = styles();

  const getLastDigit = (num: number) => {
    return Number(num.toString().slice(-1));
  };
  const getTwoLastDigit = (num: number) => {
    return Number(num.toString().slice(-2));
  };

  const createJSXWithRightWordForm = (
    wordForms: { [num: number]: string },
    amount: number,
    jsxGeneratorFunc: Function
  ) => {
    // when amount number ends with 11 - 19 or 0 or 5 - 9 word form is the same. The key is 0
    // when amount number ends with 1 the key is 1
    // when amount number ends with 2 - 4 the key is 2
    // So the wordFroms obj has three keys: 0, 1, 2
    if (
      (getTwoLastDigit(amount) >= 11 && getTwoLastDigit(amount) <= 19) ||
      getLastDigit(amount) === 0 ||
      (getLastDigit(amount) >= 5 && getLastDigit(amount) <= 9)
    ) {
      return jsxGeneratorFunc(amount, wordForms["0"]);
    }
    if (getLastDigit(amount) === 1) {
      return jsxGeneratorFunc(amount, wordForms["1"]);
    }
    if (getLastDigit(amount) >= 2 && getLastDigit(amount) <= 4) {
      return jsxGeneratorFunc(amount, wordForms["2"]);
    }
  };

  const servingsOfferJSX = (amount: number) => {
    const offerJSX = (servingAmount: number, servingWord: string) => {
      return (
        <p
          className={classes.description__offer}
          style={{ letterSpacing: 0.4 }}
        >
          <b>{servingAmount}</b> {servingWord}
        </p>
      );
    };

    const wordForms = { 0: "порций", 1: "порция", 2: "порции" };
    return createJSXWithRightWordForm(wordForms, amount, offerJSX);
  };

  const mouseGiftOfferJSX = (servingsAmount: number) => {
    const mouseAmount = Math.ceil(servingsAmount / 20);
    const offerJSX = (mouseAmount: number, mouseWord: string) => (
      <p className={classes.description__offer} style={{ letterSpacing: 0.1 }}>
        {" "}
        <b>{mouseAmount === 1 ? "" : mouseAmount}</b> {mouseWord} в подарок{" "}
      </p>
    );

    const wordForms = { 0: "мышей", 1: "мышь", 2: "мыши" };
    return createJSXWithRightWordForm(wordForms, mouseAmount, offerJSX);
  };

  const totalWeight = ((WEIGHT_PER_SERVING * data.servingsAmount) / 1000)
    .toString()
    .split(".")
    .join(",");

  const previewContainer = useRef(null);

  const handleCardSelection = () => {
    const divElement: HTMLDivElement | null = previewContainer.current;
    if (!divElement) return;
    (divElement as HTMLDivElement).classList.toggle(classes.selected);

    changeSelection((selection) => !selection);
  };

  return (
    <div
      className={`${classes.border} ${data.isSelected && classes.selected}`}
      onClick={handleCardSelection}
      ref={previewContainer}
    >
      <div className={classes.preview}>
        <div className={classes.preview__description}>
          <p className={classes.description__dish}>Сказочное заморское яство</p>
          <h2 className={classes.description__title}>Нямушка</h2>
          <h3 className={classes.description__taste}>{data.taste}</h3>
          {servingsOfferJSX(data.servingsAmount)}
          {mouseGiftOfferJSX(data.servingsAmount)}
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
