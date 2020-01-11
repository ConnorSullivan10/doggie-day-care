import React from 'react';
// import PropTypes from 'prop-types';
import employeesData from '../../helpers/data/employeesData';
import dogsData from '../../helpers/data/dogsData';
import walkShape from '../../helpers/props/walkShape';
import './Walk.scss';

class Walk extends React.Component {
  static propTypes = {
    walk: walkShape.walkShape,
  }

  state = {
    firstName: '',
    lastName: '',
    dogName: '',
  }

  singleDoggo = () => {
    const { walk } = this.props;
    dogsData.getSingleDog(walk.dogId)
      .then((response) => {
        this.setState({ dogName: response.data.name });
      })
      .catch((errFromSingleDoggo) => console.error(errFromSingleDoggo));
  }

  singleMinion = () => {
    const { walk } = this.props;
    employeesData.getSingleEmployee(walk.employeeId)
      .then((response) => {
        this.setState({ firstName: response.data.firstName, lastName: response.data.lastName });
      })
      .catch((errFromSingleMinion) => console.error(errFromSingleMinion));
  }

  componentDidMount() {
    this.singleDoggo();
    this.singleMinion();
  }

  render() {
    const { walk } = this.props;
    const { firstName, lastName, dogName } = this.state;
    return (
       <div className="walks col-4">
           <div className="card" id={walk.id}>
              <div className="card-body">
                 <div className="card-header d-flex flex-row">
                    <p className="card-title">Walker: {firstName} {lastName}</p>
                    <p className="card-title">Dog: {dogName}</p>
                    <p className="card-title">Date: {walk.date}</p>
                 </div>
              </div>
            </div>
        </div>
    );
  }
}

export default Walk;
