import React, { Component } from 'react';
import './App.css';
import { throws } from 'assert';
import DogList from '../DogList/DogList';
import Axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dogList: []
    }
  }

  componentDidMount() {
    Axios.get('/dogs')
        .then((response) => {
          this.setState({
            dogList : response.data
          })
        })
  }

  onWoofButtonClick = (event) => {
    console.log('Woof', event.target.dataset.id);
    Axios.put('/dogs/' + event.target.dataset.id)
        .then((response) => {
          console.log(response);
        })
  }

  render() {
    return (
      <div>
        <h1>Hello from JSX and React!</h1>
        <DogList dogList={this.state.dogList} woofClick={this.onWoofButtonClick}/>
      </div>
    );
  }
}

export default App;
