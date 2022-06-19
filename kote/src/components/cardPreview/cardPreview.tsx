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

  const mouseGift = (servingsAmount: number) => {
    const mouseAmount = Math.ceil(servingsAmount / 20);
    const mouseOfferStr = (mouseAmount: number, mouseWord: string) =>
      `${mouseAmount === 1 ? "" : mouseAmount} ${mouseWord} в подарок`;

    if (getLastDigit(mouseAmount) === 1)
      return mouseOfferStr(mouseAmount, "мышь");
    if (
      (getLastDigit(mouseAmount) >= 11 && getLastDigit(mouseAmount) <= 19) ||
      (getLastDigit(mouseAmount) >= 5 && getLastDigit(mouseAmount) <= 9)
    )
      return mouseOfferStr(mouseAmount, "мышей");
    if (getLastDigit(mouseAmount) >= 2 && getLastDigit(mouseAmount) <= 4)
      return mouseOfferStr(mouseAmount, "мыши");
  };

  const totalWeight = (WEIGHT_PER_SERVING * data.servingsAmount) / 1000;

  return (
    <div className={classes.border}>
      <div className={classes.preview}>
        <div className={classes.preview__description}>
          <p>Сказочное заморское явство</p>
          <h2>Нямушка</h2>
          <h3>{data.taste}</h3>
          <p>
            {transfromServingsMsg(data.servingsAmount)} <br />
            {mouseGift(data.servingsAmount)}
          </p>
        </div>
        <div>{totalWeight}</div>
      </div>
    </div>
  );
}

export default CardPreview;
