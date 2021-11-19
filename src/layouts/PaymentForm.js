import React from "react";
import OrderSummary from "../components/OrderSummary";

export default class PaymentForm extends React.Component {
  render() {
    return (
      <form className="paymentForm">
        <div className="container">
          <div className="paymentForm__inputsContainer">
            <fieldset className="paymentForm__paymentDetails">
              <h2>Payment details</h2>
              <p>We accept all major credit cards. Please ensure that you enter you details exactly as they appear on your credit card statement. All fields are required unless is indicated.</p>

              <div className="paymentForm__inputRow">
                <label htmlFor="cardholder-name">Cardholder name</label>
                <input name="cardholder-name" type="text"/>
              </div>
              <div className="paymentForm__inputRow">
                <label htmlFor="card-number">Card number</label>
                <input name="card-number" type="number"/>
              </div>
              <div className="paymentForm__inputRow">
                <label htmlFor="expiration-date">Expiration date</label>
                <input name="expiration-date" maxLength="4" type="number" placeholder="MMYY"/>
              </div>
              <div className="paymentForm__inputRow">
                <label htmlFor="cvv">CVV</label>
                <input name="cvv" maxLength="3" type="number"/>
              </div>
            </fieldset>
            <fieldset className="paymentForm__BillingAddress">
              <h2>Billing address</h2>

              <div className="paymentForm__inputRow">
                <label htmlFor="address-street">Street Address</label>
                <input name="address-street" type="text"/>
              </div>
              <div className="paymentForm__inputRow">
                <label htmlFor="address-number">Apt, Suite, Unit Number (Optional)</label>
                <input name="address-number" type="number"/>
              </div>
              <div className="paymentForm__inputRow">
                <label htmlFor="address-cityTown">City / Town</label>
                <input name="address-cityTown" type="text"/>
              </div>
              <div className="paymentForm__inputRow">
                <label htmlFor="country">Country</label>
                <div className="select-wrapper">
                  <select name="country">
                    <option selected="true" disabled="disabled">Select a Country</option>
                    <option value="Canada">Canada</option>
                    <option value="United States of America">United States of America</option>
                  </select>
                </div>
              </div>
              <div className="paymentForm__inputRow">
                <label htmlFor="country">State/Province</label>
                <div className="select-wrapper">
                  <select name="country">
                    <option selected="true" disabled="disabled">Select a state or province</option>
                    <option value="Canada">Canada</option>
                    <option value="United States of America">United States of America</option>
                  </select>
                </div>
              </div>
              <div className="paymentForm__inputRow">
                <label htmlFor="zip">Zip / Postal code</label>
                <input name="zip" type="text"/>
              </div>
              <div className="paymentForm__inputRow">
                <label htmlFor="phone-number">Phone number</label>
                <input name="phone-number" type="tel"/>
              </div>
              <div className="paymentForm__inputRow">
                <label htmlFor="email">Email receipt to</label>
                <input name="email" type="email"/>
              </div>
            </fieldset>
          </div>
          <div className="paymentForm__orderSummaryContainer">
            <OrderSummary selectedMiles={this.props.selectedMiles} selectedPrice={this.props.selectedPrice}/>
          </div>
        </div>
        <div className="container">
          <div className="paymentForm__submitContainer">
            <div className="paymentForm__inputRow">
              <input type="checkbox" name="terms-conditions"/>
              <label htmlFor="terms-conditions"><span>I agree to the <a href="#">terms & conditions</a></span></label>
            </div>
            <div className="paymentForm__inputRow">
              <input className="btn" type="submit" value="Buy Miles"/>
            </div>
          </div>
        </div>
      </form>
    );
  };
};
