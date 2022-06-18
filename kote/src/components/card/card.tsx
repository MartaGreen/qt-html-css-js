import React, { useEffect, useState } from "react";
import { CardType } from "../../types/card.types";

import CardFooter from "../cardFooter/cardFooter";
import CardPreview from "../cardPreview/cardPreview";

function Card({ data }: { data: CardType }) {
  const [isDisabled, setIsDisabled] = useState(data.isDisabled || false);
  const [isSelected, setIsSelected] = useState(data.isSelected || false);

  return (
    <div>
      <CardPreview />
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
