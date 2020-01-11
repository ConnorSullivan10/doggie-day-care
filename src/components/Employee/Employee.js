import React from 'react';
import PropTypes from 'prop-types';
import employeeShape from '../../helpers/props/employeeShape';

class Employee extends React.Component {
  static propTypes = {
    minions: PropTypes.arrayOf(employeeShape.employeeShape),
  }

  render() {
    const { employee } = this.props;
    return (
      <div className="employees col-4">
        <div className="card" id={employee.id}>
          <div className="card-body employee-container">
            <h3>{employee.firstName} {employee.lastName}</h3>
            <h4>{employee.phoneNumber}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
