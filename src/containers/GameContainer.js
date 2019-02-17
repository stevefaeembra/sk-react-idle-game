import React, { Component } from 'react';
import '../App.css';
import CoinCounter from '../components/CoinCounter.js';
import FactoriesContainer from './FactoriesContainer.js';

class GameContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coins: 1,
      coinsPerSecond: 1,
      factories: [
        {
          baseCost: 0,
          name: "Autoclick",
          cps: 1,
          count: 1,
        },
        {
          baseCost: 10,
          name: "Peasant",
          cps: 2,
          count: 0,
        },
        {
          baseCost: 500,
          name: "Farmer",
          cps: 8,
          count: 0,
        },
        {
          baseCost: 10000,
          name: "Yeoman",
          cps: 32,
          count: 0
        },
        {
          baseCost: 100000,
          name: "IronSmith",
          cps: 128,
          count: 0
        }
      ]
    }
  }

  render() {
    return (
      <div className="gamecontainer">
        <CoinCounter count={this.state.coins} />
        <FactoriesContainer factories={this.state.factories} />
      </div>
    );
  }
}

export default GameContainer;
