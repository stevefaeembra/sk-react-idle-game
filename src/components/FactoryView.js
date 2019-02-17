import React, { Component } from 'react';
import '../App.css';

class FactoryView extends Component {

  render() {
    let coins = this.props.coins;
    let costOne = parseInt(this.props.factory.costOne);
    let canBuyOne = (coins >= costOne) ? "canBuyOne" : "";
    return (
      <div className={`factoryview ${canBuyOne}`}>
        <div className="factoryview-count">{this.props.factory.count}</div>
        <div className="factoryview-name">{this.props.factory.name}</div>
        <div className="factoryview-buyone">£{costOne}</div>
        <div className="factoryview-cps">{this.props.factory.cps * this.props.factory.count} cps</div>
        <hr></hr>
      </div>
    );
  }
}

export default FactoryView;
