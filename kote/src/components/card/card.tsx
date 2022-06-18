import React, { useEffect } from "react";
import { CardType } from "../../types/card.types";

import CardFooter from "../cardFooter/cardFooter";
import CardPreview from "../cardPreview/cardPreview";

function Card({ data }: { data: CardType }) {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div>
      <CardPreview />
      <CardFooter />
    </div>
  );
}

export default Card;
