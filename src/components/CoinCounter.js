import React, { Component } from 'react';
import '../App.css';

class CoinCounter extends Component {

  render() {
    return (
      <div className="coincounter">
        {this.props.count} coins
      </div>
    );
  }
}

export default CoinCounter;
