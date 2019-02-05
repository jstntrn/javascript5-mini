import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
      console.log(res)
      this.setState({
        cars: res.data
      })
    })
  }

  render() {

    const carList = this.state.cars.map( car => {
      const {id, make, model, year, color, price} = car;
      return(
        <div key={id}>
          <p>{year + ' ' + make + ' ' + model + ' ' + color + ' $' + price}</p>
        </div>
      )
    })

    return (
      <div className="App">
        <button onClick={() => this.getCars()}>Get cars</button>
        {carList}
      </div>
    );
  }
}

export default App;
