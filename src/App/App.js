import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.scss';
import dogsData from '../helpers/data/dogsData';
import DogPen from '../components/DogPen/DogPen';

class App extends React.Component {
  state = {
    doggos: [],
  }

  componentDidMount() {
    const doggos = dogsData.getAllDogs();
    this.setState({ doggos });
  }

  render() {
    return (
      <div className="App">
        <div className="app-container">
          <DogPen className="parent-component DogPen" doggos={this.state.doggos}/>
        </div>
      </div>
    );
  }
}

export default App;
