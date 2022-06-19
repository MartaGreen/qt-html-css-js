import React, { useState } from "react";
import styles from "./card.style";
import { CardPreviewType, CardType } from "../../types/card.types";

import CardFooter from "../cardFooter/cardFooter";
import CardPreview from "../cardPreview/cardPreview";

function Card({ data }: { data: CardType }) {
  const [isDisabled, setIsDisabled] = useState(data.isDisabled || false);
  const [isSelected, setIsSelected] = useState(data.isSelected || false);

  const classes = styles();

  const previewData: CardPreviewType = {
    ...data,
    isSelected: isSelected,
    isDisabled: isDisabled,
  };

  return (
    <div className={classes.card}>
      <CardPreview data={previewData} changeSelection={setIsSelected} />
      <CardFooter
        isDisabled={isDisabled}
        isSelected={isSelected}
        selectedMsg={data.selectedMsg}
        taste={data.taste}
      />
    </div>
  );
}

export default Card;
