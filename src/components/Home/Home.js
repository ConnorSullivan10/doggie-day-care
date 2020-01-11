import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Home.scss';
import dogsData from '../../helpers/data/dogsData';
import employeesData from '../../helpers/data/employeesData';
import walksData from '../../helpers/data/walksData';
import WalkSquad from '../WalkSquad/WalkSquad';
import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import WalkForm from '../WalkForm/WalkForm';


class Home extends React.Component {
  state = {
    doggos: [],
    minions: [],
    walks: [],
    showWalkForm: false,
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

  addWalk = (newWalk) => {
    walksData.saveNewWalk(newWalk)
      .then(() => {
        this.getWalks();
        this.setState({ showWalkForm: false });
      })
      .catch((errFromAddWalk) => console.error({ errFromAddWalk }));
  }

  setShowWalkForm = () => {
    this.setState({ showWalkForm: true });
  }

  setHideWalkForm = () => {
    this.setState({ showWalkForm: false });
  }

  render() {
    const { walks, doggos, minions } = this.state;
    return (
      <div className="Home">
        <button className="addWalk" onClick={this.setShowWalkForm}>Create New Walk</button>
          { this.state.showWalkForm && <WalkForm addWalk={this.addWalk} setHideWalkForm={this.setHideWalkForm} doggos={doggos} minions={minions}/> }
        <WalkSquad className="parent-component WalkSquad" walks={walks} getWalks={this.getWalks}/>
        <DogPen className="parent-component DogPen" doggos={doggos}/>
        <StaffRoom className="parent-component StaffRoom" minions={minions}/>
      </div>
    );
  }
}

export default Home;
