import React from "react";

export default class OrderSummary extends React.Component {
  render() {
    return (

      <section className="paymentForm__orderSummary">
        <h2>Order summary</h2>
        <ul>
          <li>
            <span>Total miles</span>
            <span>{this.props.selectedMiles}</span>
          </li>

          <li className="paymentForm__orderSummaryItem">
            <span>GST/HST</span>
            <span>${(Math.round((this.props.selectedPrice * .113) * 100) / 100).toFixed(2)}</span>
          </li>
        </ul>
        <div className="paymentForm__orderSummaryTotal">
          <span>Total cost</span>
          <span>${(Math.round((this.props.selectedPrice * 1.113) * 100) / 100).toFixed(2)}</span>
        </div>
      </section>

    );
  };
};
