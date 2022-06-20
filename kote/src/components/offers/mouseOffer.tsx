import Offer from "./offer";

class MouseOffer extends Offer {
  render() {
    return (
      <p style={this.concatStyles()}>
        <b>{this.amount > 1 && this.amount}</b> {this.chooseWordForm()} в
        подарок
      </p>
    );
  }
}

export default MouseOffer;
