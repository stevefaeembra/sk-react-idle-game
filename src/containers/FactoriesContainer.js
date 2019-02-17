import React, { Component } from 'react';
import '../App.css';
import FactoryView from '../components/FactoryView.js';

class FactoriesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      factories: props.factories
    }
  }

  render() {
    return (
      <div className="factoriescontainer">
        <FactoryView factory={this.state.factories[0]}/>
        <FactoryView factory={this.state.factories[1]}/>
        <FactoryView factory={this.state.factories[2]}/>
        <FactoryView factory={this.state.factories[3]}/>
        <FactoryView factory={this.state.factories[4]}/>
      </div>
    );
  }
}

export default FactoriesContainer;