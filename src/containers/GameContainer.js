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
          count: 100,
        },
        {
          baseCost: 10,
          name: "Peasant",
          cps: 2,
          count: 56,
        },
        {
          baseCost: 500,
          name: "Farmer",
          cps: 8,
          count: 24,
        },
        {
          baseCost: 10000,
          name: "Yeoman",
          cps: 32,
          count: 7
        },
        {
          baseCost: 100000,
          name: "IronSmith",
          cps: 128,
          count: 1
        }
      ]
    }

    this.everyGameTick = this.everyGameTick.bind(this);
  }

  everyGameTick() {
    let cps = 0;
    this.state.factories.forEach((factory) => {
      cps += factory.cps * factory.count;
    })
    this.setState({
      cps : cps,
      coins : this.state.coins + cps
    });
  }

  componentDidMount() {
    console.log("ComponentDidMount()");
    setInterval(this.everyGameTick, 1000);
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
