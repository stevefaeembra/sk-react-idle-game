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
      cps: 1,
      factories: [
        {
          baseCost: 0,
          name: "Autoclick",
          cps: 1,
          count: 1,
        },
        {
          baseCost: 3,
          name: "Peasant",
          cps: 10,
          count: 45
        },
        {
          baseCost: 500,
          name: "Farmer",
          cps: 100,
          count: 12,
        },
        {
          baseCost: 10000,
          name: "Yeoman",
          cps: 1000,
          count: 3
        },
        {
          baseCost: 100000,
          name: "IronSmith",
          cps: 10000,
          count: 1
        },
        {
          baseCost: 500000,
          name: "SilverSmith",
          cps: 100000,
          count: 0
        },
        {
          baseCost: 2000000,
          name: "Knight",
          cps: 1000000,
          count: 0
        },
        {
          baseCost: 8000000,
          name: "Lord",
          cps: 10000000,
          count: 0
        }
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
      cps : parseInt(cps*this.fps),
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
      coins: this.state.coins,
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
        <FactoriesContainer coins={this.state.coins} factories={this.state.factories} />
      </div>
    );
  }
}

export default GameContainer;
