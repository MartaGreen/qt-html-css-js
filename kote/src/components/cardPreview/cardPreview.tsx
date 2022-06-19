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
    const servingStr = (servingAmount: number, servingWord: string) => {
      return (
        <p
          className={classes.description__offer}
          style={{ letterSpacing: 0.4 }}
        >
          <b>{servingAmount}</b> {servingWord}
        </p>
      );
    };

    if (
      (amount >= 11 && amount <= 19) ||
      getLastDigit(amount) === 0 ||
      (getLastDigit(amount) >= 5 && getLastDigit(amount) <= 9)
    ) {
      return servingStr(amount, "порций");
    }
    if (getLastDigit(amount) === 1) {
      return servingStr(amount, "порция");
    }
    if (getLastDigit(amount) >= 2 && getLastDigit(amount) <= 4) {
      return servingStr(amount, "порции");
    }
  };

  const mouseGift = (servingsAmount: number) => {
    const mouseAmount = Math.ceil(servingsAmount / 20);
    const mouseOfferStr = (mouseAmount: number, mouseWord: string) => (
      <p className={classes.description__offer} style={{ letterSpacing: 0.1 }}>
        {" "}
        <b>{mouseAmount === 1 ? "" : mouseAmount}</b> {mouseWord} в подарок{" "}
      </p>
    );

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

  const totalWeight = ((WEIGHT_PER_SERVING * data.servingsAmount) / 1000)
    .toString()
    .split(".")
    .join(",");

  return (
    <div className={classes.border}>
      <div className={classes.preview}>
        <div className={classes.preview__description}>
          <p className={classes.description__dish}>Сказочное заморское яство</p>
          <h2 className={classes.description__title}>Нямушка</h2>
          <h3 className={classes.description__taste}>{data.taste}</h3>
          {transfromServingsMsg(data.servingsAmount)}
          {mouseGift(data.servingsAmount)}
        </div>
        <div className={classes.description__weight}>
          <p style={{ fontSize: 42, lineHeight: "38px" }}>{totalWeight}</p>
          <p style={{ fontSize: 20 }}>кг</p>
        </div>
      </div>
    </div>
  );
}

export default CardPreview;
