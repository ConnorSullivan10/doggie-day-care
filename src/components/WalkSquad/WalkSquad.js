import React from 'react';
import PropTypes from 'prop-types';
import Walk from '../Walk/Walk';
import walkShape from '../../helpers/props/walkShape';

import './WalkSquad.scss';

class WalkSquad extends React.Component {
    static propTypes = {
      walks: PropTypes.arrayOf(walkShape.walkShape),
      deleteWalk: PropTypes.func,
    }

    render() {
      const { walks, deleteWalk } = this.props;
      const walkCards = walks.map((walk) => (<Walk key={walk.id} walk={walk} deleteWalk={deleteWalk}/>));
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
