import React from "react";

export default class MilesOptionsButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      miles: this.props.miles,
      price: this.props.price,
      key: this.props.dataKey,
    };

    this.setPrices = this.setPrices.bind(this);

  }

  setPrices() {
    this.props.updateState(this.state);
  }

  render() {
    let className = `btn--milesOptionsButton btn ${this.props.active === this.state.key ? 'btn--milesOptionsButton--active' : ''}`;

    return (
      <li className="col-4">
        <button onClick={() => this.setPrices()} className={className}>
        Buy {this.props.miles} miles<br/><strong>${this.props.price}</strong>
        </button>
      </li>

    );
  };
};
