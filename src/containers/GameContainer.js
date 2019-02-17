import React, { Component } from 'react';
import '../App.css';
import CoinCounter from '../components/CoinCounter.js';
import FactoriesContainer from './FactoriesContainer.js';

class GameContainer extends Component {

  constructor(props) {
    super(props);
    this.fps = 20; // frames per second
    this.state = {
      coins: 1,
      coinsPerSecond: 1,
      factories: [
        {
          baseCost: 0,
          name: "Autoclick",
          cps: 1,
          count: 1000,
        },
        {
          baseCost: 3,
          name: "Peasant",
          cps: 10,
          count: 160,
        },
        {
          baseCost: 500,
          name: "Farmer",
          cps: 100,
          count: 24,
        },
        {
          baseCost: 10000,
          name: "Yeoman",
          cps: 1000,
          count: 70
        },
        {
          baseCost: 100000,
          name: "IronSmith",
          cps: 10000,
          count: 10
        },
        {
          baseCost: 500000,
          name: "SilverSmith",
          cps: 100000,
          count: 3
        },
      ]
    }

    this.everyGameTick = this.everyGameTick.bind(this);
  }

  everyGameTick() {
    let cps = 0;
    // increment coins according to owned factories
    this.state.factories.forEach((factory) => {
      cps += parseInt((factory.cps * factory.count)/this.fps);
    })
    this.setState({
      cps : cps,
      coins : this.state.coins + cps
    });

    // update factory costs using exponential formulae

    let newfactories = []
    this.state.factories.forEach((factory) => {
      let costOne = factory.baseCost * (1.15 ** factory.count);
      let newfactory = factory;
      newfactory.costOne = costOne;
      newfactories.push(newfactory);
    });
    this.setState({
      factories: newfactories
    })
  }

  componentDidMount() {
    console.log("ComponentDidMount()");
    setInterval(this.everyGameTick, 1000/this.fps);
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
