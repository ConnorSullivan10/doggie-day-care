import React from 'react';
import PropTypes from 'prop-types';
import employeesData from '../../helpers/data/employeesData';
import dogsData from '../../helpers/data/dogsData';
import walkShape from '../../helpers/props/walkShape';
import employeeShape from '../../helpers/props/employeeShape';
import dogShape from '../../helpers/props/dogShape';
import './Walk.scss';

class Walk extends React.Component {
  static propTypes = {
    walk: walkShape.walkShape,
    minions: PropTypes.arrayOf(employeeShape.employeeShape),
    doggos: PropTypes.arrayOf(dogShape.dogShape),
    deleteWalk: PropTypes.func,
    setEditMode: PropTypes.func,
    setWalkToEdit: PropTypes.func,
  }

  state = {
    firstName: '',
    lastName: '',
    dogName: '',
  }

  singleDoggoName = () => {
    const { walk } = this.props;
    dogsData.getSingleDog(walk.dogId)
      .then((response) => {
        this.setState({ dogName: response.data.name });
      })
      .catch((errFromSingleDoggo) => console.error(errFromSingleDoggo));
  }

  singleMinionName = () => {
    const { walk } = this.props;
    employeesData.getSingleEmployee(walk.employeeId)
      .then((response) => {
        this.setState({ firstName: response.data.firstName, lastName: response.data.lastName });
      })
      .catch((errFromSingleMinion) => console.error(errFromSingleMinion));
  }

  deleteWalkEvent = (e) => {
    e.preventDefault();
    const { deleteWalk, walk } = this.props;
    deleteWalk(walk.id);
  }

  setEditWalkEvent = (e) => {
    const { setEditMode, setWalkToEdit, walk } = this.props;
    e.preventDefault();
    setEditMode(true);
    setWalkToEdit(walk);
  }

  componentDidMount() {
    this.singleDoggoName();
    this.singleMinionName();
  }

  render() {
    const { walk } = this.props;
    const { firstName, lastName, dogName } = this.state;
    return (
       <div className="walks col-4 d-flex">
          <div className="card walkCard" id={walk.id}>
            <div className="card-body walkBody">
              <button className="btn btn-success edit-walk" onClick={this.setEditWalkEvent}>Edit</button>
              <button className="btn btn-danger delete-walk" onClick={this.deleteWalkEvent}>X</button>
              <p className="card-text">Walker: {firstName} {lastName}</p>
              <p className="card-text">Dog: {dogName}</p>
              <p className="card-text">Date: {walk.date}</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Walk;
