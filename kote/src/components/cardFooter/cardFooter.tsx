import React from "react";
import styles from "./cardFooter.style";

function CardFooter({
  isDisabled,
  isSelected,
  selectedMsg,
  taste,
}: {
  isDisabled: boolean;
  isSelected: boolean;
  selectedMsg: string;
  taste: string;
}) {
  const classes = styles();

  const msg: JSX.Element = (isDisabled && (
    <div className={classes.cardFooter}>Печалька, {taste} закончился</div>
  )) ||
    (isSelected && <div className={classes.cardFooter}>{selectedMsg}</div>) || (
      <div className={classes.cardFooter}>
        Чего сидишь? Порадуй котэ,&nbsp;
        <a href="#" className={classes.cardFooter__buy}>
          купи.
        </a>
      </div>
    );

  return msg;
}

export default CardFooter;
