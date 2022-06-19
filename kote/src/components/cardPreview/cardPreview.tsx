import React from "react";
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

  const transfromServingsMsg = (amount: number) => {
    if (
      (amount >= 11 && amount <= 19) ||
      getLastDigit(amount) === 0 ||
      (getLastDigit(amount) >= 5 && getLastDigit(amount) <= 9)
    ) {
      return `${amount} порций`;
    }
    if (getLastDigit(amount) === 1) {
      return `${amount} порция`;
    }
    if (getLastDigit(amount) >= 2 && getLastDigit(amount) <= 4) {
      return `${amount} порции`;
    }
  };

  const totalWeight = (WEIGHT_PER_SERVING * data.servingsAmount) / 1000;

  return (
    <div className={classes.preview}>
      <div className={classes.preview__description}>
        <p>Сказочное заморское явство</p>
        <h2>Нямушка</h2>
        <h3>{data.taste}</h3>
        <p>{transfromServingsMsg(data.servingsAmount)}</p>
      </div>
      <div>{totalWeight}</div>
    </div>
  );
}

export default CardPreview;
