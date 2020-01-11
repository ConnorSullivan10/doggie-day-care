import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Home.scss';
import dogsData from '../../helpers/data/dogsData';
import employeesData from '../../helpers/data/employeesData';
import walksData from '../../helpers/data/walksData';
import WalkSquad from '../WalkSquad/WalkSquad';
import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';


class Home extends React.Component {
  state = {
    doggos: [],
    minions: [],
    walks: [],
  }

  componentDidMount() {
    this.getDogs();
    this.getEmployees();
    this.getWalks();
  }

  getDogs = () => {
    dogsData.getAllDogs()
      .then((doggos) => {
        this.setState({ doggos });
      })
      .catch((errFromHome) => console.error({ errFromHome }));
  }

  getEmployees = () => {
    employeesData.getAllEmployees()
      .then((minions) => {
        this.setState({ minions });
      })
      .catch((errFromHome) => console.error({ errFromHome }));
  }

  getWalks = () => {
    walksData.getAllWalks()
      .then((walks) => {
        this.setState({ walks });
      })
      .catch((errFromHome) => console.error({ errFromHome }));
  }

  render() {
    return (
      <div className="Home">
        <WalkSquad className="parent-component WalkSquad" walks={this.state.walks}/>
        <DogPen className="parent-component DogPen" doggos={this.state.doggos}/>
        <StaffRoom className="parent-component StaffRoom" minions={this.state.minions}/>
      </div>
    );
  }
}

export default Home;
