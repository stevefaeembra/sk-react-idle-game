import React, { Component } from 'react';
import '../App.css';

class FactoryView extends Component {

  render() {
    return (
      <div className="factoryview">
        <div className="factoryview-count">{this.props.factory.count}</div>
        <div className="factoryview-name">{this.props.factory.name}</div>
        <div className="factoryview-buyone">£{this.props.factory.costOne}</div>
        <div className="factoryview-cps">{this.props.factory.cps * this.props.factory.count} cps</div>
        <hr></hr>
      </div>
    );
  }
}

export default FactoryView;
