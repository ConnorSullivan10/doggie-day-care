import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Home.scss';
import dogsData from '../../helpers/data/dogsData';
import employeesData from '../../helpers/data/employeesData';
import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';

class App extends React.Component {
  state = {
    doggos: [],
    minions: [],
  }

  componentDidMount() {
    const doggos = dogsData.getAllDogs();
    const minions = employeesData.getAllEmployees();
    this.setState({ doggos, minions });
  }

  render() {
    return (
      <div className="App">
        <div className="app-container">
          <div className="Home">
            <DogPen className="parent-component DogPen" doggos={this.state.doggos}/>
            <StaffRoom className="parent-component StaffRoom" minions={this.state.minions}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
