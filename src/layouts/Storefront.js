import React from "react";
import MilesOptionsButton from "../components/MilesOptionsButton";
import PaymentForm from "./PaymentForm";
import {cardData} from "../assets/data/cardData";

export default class Storefront extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      miles: 0 ,
      price: 0,
      activeButton: 0
    };

    if (cardData) {
      this.state.miles = cardData[0].amount;
      this.state.price = cardData[0].cost;
    }

    this.updateState = this.updateState.bind(this);
  }

  updateState(stateObject) {
    this.setState({miles: stateObject.miles, price: stateObject.price, activeButton: stateObject.key});
  }

  render() {
    return (
      <main className="storefront">
        <section className="container">
          <h1 className="storeFront__title">Get your rewards faster. Buy, Gift, or Transfer Miles today!</h1>
        </section>
        <section className="">
          <ul className="storefront__optionsList container-grid">
            {cardData.map((data, i) => <MilesOptionsButton updateState={this.updateState} active={ this.state.activeButton } miles={data.amount} price={data.cost} dataKey={i} key={i}/>)}
          </ul>
        </section>
        <PaymentForm selectedMiles={this.state.miles} selectedPrice={this.state.price}/>
      </main>
    );
  };
};
