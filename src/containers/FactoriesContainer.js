import React, { Component } from 'react';
import '../App.css';
import FactoryView from '../components/FactoryView.js';

class FactoriesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      factories: props.factories,
      coins : props.coins
    }
  }

  render() {
    return (
      <div className="factoriescontainer">
        <FactoryView coins={this.props.coins} factory={this.state.factories[0]}/>
        <FactoryView coins={this.props.coins} factory={this.state.factories[1]}/>
        <FactoryView coins={this.props.coins} factory={this.state.factories[2]}/>
        <FactoryView coins={this.props.coins} factory={this.state.factories[3]}/>
        <FactoryView coins={this.props.coins} factory={this.state.factories[4]}/>
        <FactoryView coins={this.props.coins} factory={this.state.factories[5]}/>
      </div>
    );
  }
}

export default FactoriesContainer;
