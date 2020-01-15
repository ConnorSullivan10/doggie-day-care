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
       <div className="walks col-4">
          <div className="card" id={walk.id}>
            <div className="card-body">
              <div className="card-header d-flex flex-row">
                <button className="btn btn-warning edit-walk" onClick={this.setEditWalkEvent}>Edit</button>
                <button className="btn btn-danger delete-walk" onClick={this.deleteWalkEvent}>X</button>
              </div>
              <p className="card-title">Walker: {firstName} {lastName}</p>
              <p className="card-title">Dog: {dogName}</p>
              <p className="card-title">Date: {walk.date}</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Walk;
