import React, { Component } from 'react';
import '../App.css';

class CoinCounter extends Component {

  render() {
    return (
      <div className="coincounter">
        <h1>{this.props.count} coins</h1>
        <hr></hr>
      </div>
    );
  }
}

export default CoinCounter;
