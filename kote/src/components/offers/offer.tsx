import React from "react";
import styles from "./offers.style";

export type OfferComponentPropsType = {
  amount: number;
  wordForms: { [num: number]: string };
  specialStyles: any;
};

// this is a base offer structure: 'offer amount' 'offer word'
class Offer extends React.Component<OfferComponentPropsType> {
  amount: number;
  wordForms: { [num: number]: string };
  specialStyles: any;
  constructor(props: OfferComponentPropsType) {
    super(props);

    this.amount = props.amount;
    this.wordForms = props.wordForms;
    this.specialStyles = props.specialStyles;
  }

  getLastDigit(num: number) {
    return Number(num.toString().slice(-1));
  }
  getTwoLastDigit(num: number) {
    return Number(num.toString().slice(-2));
  }

  chooseWordForm() {
    // when amount number ends with 11 - 19 or 0 or 5 - 9 word form is the same. The key is 0
    // when amount number ends with 1 the key is 1
    // when amount number ends with 2 - 4 the key is 2
    // So the wordFroms obj has three keys: 0, 1, 2
    if (
      (this.getTwoLastDigit(this.amount) >= 11 &&
        this.getTwoLastDigit(this.amount) <= 19) ||
      this.getLastDigit(this.amount) === 0 ||
      (this.getLastDigit(this.amount) >= 5 &&
        this.getLastDigit(this.amount) <= 9)
    ) {
      return this.wordForms["0"];
    }
    if (this.getLastDigit(this.amount) === 1) {
      return this.wordForms["1"];
    }
    if (
      this.getLastDigit(this.amount) >= 2 &&
      this.getLastDigit(this.amount) <= 4
    ) {
      return this.wordForms["2"];
    }
  }

  concatStyles() {
    return { ...this.specialStyles, ...styles };
  }

  render() {
    return (
      <p style={this.concatStyles()}>
        <b>{this.amount > 1 && this.amount}</b> {this.chooseWordForm()}
      </p>
    );
  }
}

export default Offer;
