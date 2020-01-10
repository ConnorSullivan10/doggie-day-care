import React from 'react';
import PropTypes from 'prop-types';
import Employee from '../Employee/Employee';
import employeeShape from '../../helpers/props/employeeShape';

class StaffRoom extends React.Component {
  static propTypes = {
    minions: PropTypes.arrayOf(employeeShape.employeeShape),
  }

  render() {
    const myEmployees = this.props.minions;
    const employeeCards = myEmployees.map((employee) => <Employee key={employee.id} employee={employee}/>);
    return (
      <div className="StaffRoom">
        <div className="staffRoomHeader">
          <h1 className="text-center staffRoomtitle">Staff Room</h1>
        </div>
        <div className="card staffRoom-section d-flex flex-wrap">
          {employeeCards}
        </div>
      </div>
    );
  }
}

export default StaffRoom;
