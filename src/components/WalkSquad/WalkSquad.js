import React from 'react';
import PropTypes from 'prop-types';
import Walk from '../Walk/Walk';
import walkShape from '../../helpers/props/walkShape';
import employeeShape from '../../helpers/props/employeeShape';
import dogShape from '../../helpers/props/dogShape';

import './WalkSquad.scss';

class WalkSquad extends React.Component {
    static propTypes = {
      walks: PropTypes.arrayOf(walkShape.walkShape),
      doggos: PropTypes.arrayOf(dogShape.dogShape),
      minions: PropTypes.arrayOf(employeeShape.employeeShape),
    }


    render() {
      const { walks } = this.props;
      const walkCards = walks.map((walk) => (<Walk key={walk.id} walk={walk} />));
      return (
      <div className="WalkSquad">
        <div className="walkSquadHeader">
          <h1 className="text-center walkSquadtitle">Walks</h1>
        </div>
        <div className="walk-squad-cards d-flex flex-wrap">
          {walkCards}
        </div>
      </div>
      );
    }
}
export default WalkSquad;
