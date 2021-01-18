import React, { Component } from 'react';
import './App.css';
import Cars from './Cars';
import CarsContextAPI from './ContextAPI';


class App extends Component {
  constructor() {
    super();

    this.state ={
      cars: {
        redCar: false,
        blueCar: false,
        yellowCar: false,
      },
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    console.log('MoveCar:', car, side);
    this.setState((prevState) => ({ ...prevState, cars: { ...prevState.cars, [car]: side } }), 
    () => console.log('State After chandge:', this.state));
  };
  
  render() {
    const contextValue = {
      cars: this.state.cars,
      moveCar: this.moveCar,
    };
    return (
      <CarsContextAPI.Provider value={contextValue}>
        <Cars />
      </CarsContextAPI.Provider>
    );
  }
}

export default App;
