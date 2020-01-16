import React from 'react';
import PropTypes from 'prop-types';
import employeeShape from '../../helpers/props/employeeShape';
import './Employee.scss';

class Employee extends React.Component {
  static propTypes = {
    minions: PropTypes.arrayOf(employeeShape.employeeShape),
  }

  render() {
    const { employee } = this.props;
    return (
      <div className="employees col-4">
        <div className="card empCard" id={employee.id}>
          <div className="card-body employee-container">
            <p className="card-text empText">{employee.firstName} {employee.lastName}</p>
            <p className="card-text empText"><span role="img" aria-label="phone">☎️</span> {employee.phoneNumber}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
