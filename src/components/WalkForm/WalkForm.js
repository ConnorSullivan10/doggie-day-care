import React from 'react';
import PropTypes from 'prop-types';
import walkShape from '../../helpers/props/walkShape';
import employeeShape from '../../helpers/props/employeeShape';
import dogShape from '../../helpers/props/dogShape';
import './WalkForm.scss';

class WalkForm extends React.Component {
  static propTypes = {
    minions: PropTypes.arrayOf(employeeShape.employeeShape),
    doggos: PropTypes.arrayOf(dogShape.dogShape),
    addWalk: PropTypes.func,
    setHideWalkForm: PropTypes.func,
    editMode: PropTypes.bool,
    walkToEdit: walkShape.walkShape,
    updateWalk: PropTypes.func,
  }

  state = {
    employeeName: '',
    dogName: '',
    date: '',
  }

  componentDidMount() {
    const { walkToEdit, editMode } = this.props;
    if (editMode) {
      this.setState({ employeeName: walkToEdit.employeeId, dogName: walkToEdit.dogId, date: walkToEdit.date });
    }
  }

  saveWalkEvent = (e) => {
    const { addWalk } = this.props;
    e.preventDefault();
    const newWalk = {
      employeeId: this.state.employeeName,
      dogId: this.state.dogName,
      date: this.state.date,
    };
    addWalk(newWalk);
    this.setState({ employeeName: '', dogName: '', date: '' });
  }

  employeeChange = (e) => {
    e.preventDefault();
    this.setState({ employeeName: e.target.value });
  }

  dogChange = (e) => {
    e.preventDefault();
    this.setState({ dogName: e.target.value });
  }

  dateChange = (e) => {
    e.preventDefault();
    this.setState({ date: e.target.value });
  }

  updateWalkEvent = (e) => {
    e.preventDefault();
    const { updateWalk, walkToEdit } = this.props;
    const updatedWalk = {
      employeeId: this.state.employeeName,
      dogId: this.state.dogName,
      date: this.state.date,
    };
    updateWalk(walkToEdit.id, updatedWalk);
  }

  render() {
    const { employeeName, dogName, date } = this.state;
    const { doggos, minions, editMode } = this.props;

    return (<form className="col-6 offset-3 WalkForm">
      <button className="btn btn-danger hide-form card-text" onClick={this.props.setHideWalkForm}>X</button>
      <div className="input-group mb-3">
      <label htmlFor="dogName">Dog Name: </label>
      <select className="form-control" value={dogName} id="dogName" onChange={this.dogChange}>
      <option>Choose One...</option>
       {
         doggos.map((dog) => (
           (<option key={dog.id} value={dog.id}>{dog.name}</option>)))
       }
      </select>
      </div>
      <div className="input-group mb-3">
            <label htmlFor="employeeName">Walkers: </label>
            <select
              className="form-control"
              id="employeeName"
              value={ employeeName }
              onChange={this.employeeChange}>
              <option defaultValue>Choose One...</option>
              {
              minions.map((employee) => (
                (<option key={employee.id} value={employee.id}>{employee.firstName} {employee.lastName}</option>)))
              }
            </select>
          </div>
    <div className="input-group date">
    <label htmlFor="date">Choose Walk Date: </label>
    <input type="date" id="date" value={date} onChange={this.dateChange}/>
    </div>
    {
      (editMode) ? (<button onClick={this.updateWalkEvent} className="btn btn-secondary">Update Walk</button>)
        : (<button onClick={this.saveWalkEvent} className="btn btn-secondary">Save Walk</button>)
    }
    </form>
    );
  }
}

export default WalkForm;
