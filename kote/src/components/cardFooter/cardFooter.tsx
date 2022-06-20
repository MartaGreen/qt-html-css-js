import React from "react";
import styles from "./cardFooter.style";

function CardFooter({
  isDisabled,
  isSelected,
  selectedMsg,
  taste,
  changeSelection,
}: {
  isDisabled: boolean;
  isSelected: boolean;
  selectedMsg: string;
  taste: string;
  changeSelection: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const classes = styles();

  const handleSelection = () => {
    changeSelection((selection) => !selection);
  };

  const msg: JSX.Element = (isDisabled && (
    <div className={classes.cardFooter} style={{ color: "#FFFF66" }}>
      Печалька, {taste} закончился.
    </div>
  )) ||
    (isSelected && <div className={classes.cardFooter}>{selectedMsg}</div>) || (
      <div className={classes.cardFooter}>
        Чего сидишь? Порадуй котэ,&nbsp;
        <a
          href="#"
          className={classes.cardFooter__buy}
          onClick={handleSelection}
        >
          купи.
        </a>
      </div>
    );

  return msg;
}

export default CardFooter;
