import React, { Component } from 'react';
import '../App.css';
import CoinCounter from '../components/CoinCounter.js';
import FactoriesContainer from './FactoriesContainer.js';
import _ from 'lodash';

class GameContainer extends Component {

  constructor(props) {
    super(props);
    this.fps = 20; // frames per second
    this.state = {
      coins: 1,
      cps: 1,
      factories: [
        {
          baseCost: 1,
          name: "Autoclick",
          cps: 1,
          count: 20,
        },
        {
          baseCost: 3,
          name: "Peasant",
          cps: 10,
          count: 0
        },
        {
          baseCost: 500,
          name: "Farmer",
          cps: 100,
          count: 0
        },
        {
          baseCost: 10000,
          name: "Yeoman",
          cps: 1000,
          count: 0
        },
        {
          baseCost: 100000,
          name: "IronSmith",
          cps: 10000,
          count: 0
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
    this.autoBuy = this.autoBuy.bind(this);
  }

  buyOne(factoryName) {
    // buy one of named factory
    console.log(`bought a ${factoryName}`);
    let newfactories = [];
    let purchaseCost = 0;
    this.state.factories.forEach((factory) => {
      if (factory.name !== factoryName) {
        newfactories.push(factory);
      }
      else {
        factory.count += 1;
        purchaseCost = factory.costOne;
        newfactories.push(factory);
      }
    });
    this.setState({
      factories: newfactories,
      coins: this.state.coins - purchaseCost
    })
  }

  autoBuy() {
    // buy an affordable factory at random
    let affordable = this.state.factories.filter((factory) => {
      return factory.costOne <= this.state.coins;
    });
    let buythis = _.sample(affordable);
    console.log(`Gonna buy a ${buythis}`);
    this.buyOne(buythis.name);
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
    });

    // auto-buy?
    if (Math.random() > .99) {
      this.autoBuy();
    }
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
