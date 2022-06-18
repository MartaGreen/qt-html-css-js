import React from "react";

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
  const msg: JSX.Element = (isDisabled && (
    <div>Печалька, {taste} закончился</div>
  )) ||
    (isSelected && <div>{selectedMsg}</div>) || (
      <div>
        Чего сидишь? Порадуй котэ, <div>купи</div>
      </div>
    );

  return msg;
}

export default CardFooter;
