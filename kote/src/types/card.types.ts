export type CardType = CardPreviewType & CardFooterType & { id: string };

export type CardPreviewType = {
  taste: string;
  servingsAmount: number;

  isSelected?: boolean;
  isDisabled?: boolean;
};

export type CardFooterType = {
  selectedMsg: string;
};
