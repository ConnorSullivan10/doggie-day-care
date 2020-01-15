import React from 'react';
import PropTypes from 'prop-types';
import Walk from '../Walk/Walk';
import walkShape from '../../helpers/props/walkShape';
import dogShape from '../../helpers/props/dogShape';
import employeeShape from '../../helpers/props/employeeShape';
import WalkForm from '../WalkForm/WalkForm';
import walksData from '../../helpers/data/walksData';

import './WalkSquad.scss';

class WalkSquad extends React.Component {
    static propTypes = {
      walks: PropTypes.arrayOf(walkShape.walkShape),
      doggos: PropTypes.arrayOf(dogShape.dogShape),
      minions: PropTypes.arrayOf(employeeShape.employeeShape),
      getWalks: PropTypes.func,
      deleteWalk: PropTypes.func,
    }

    state = {
      editMode: false,
      showWalkForm: false,
      walkToEdit: {},
    }

    addWalk = (newWalk) => {
      walksData.saveNewWalk(newWalk)
        .then(() => {
          this.props.getWalks();
          this.setState({ showWalkForm: false });
        })
        .catch((errFromAddWalk) => console.error({ errFromAddWalk }));
    }

    updateWalk = (walkId, updatedWalk) => {
      walksData.updateWalk(walkId, updatedWalk)
        .then(() => {
          this.props.getWalks();
          this.setState({ editMode: false, showWalkForm: false });
        });
    }

    setWalkToEdit = (walk) => {
      this.setState({ walkToEdit: walk });
    }

    setShowWalkForm = () => {
      this.setState({ showWalkForm: true });
    }

    setHideWalkForm = () => {
      this.setState({ showWalkForm: false });
    }

    setEditMode = (editMode) => {
      this.setState({ editMode, showWalkForm: true });
    }

    render() {
      const {
        walks, doggos, minions, deleteWalk,
      } = this.props;
      const { editMode, walkToEdit } = this.state;
      const walkCards = walks.map((walk) => (<Walk key={walk.id} walk={walk} deleteWalk={deleteWalk} setEditMode={this.setEditMode} setWalkToEdit={this.setWalkToEdit}/>));
      return (
      <div className="WalkSquad">
        <div className="walkSquadHeader">
          <h1 className="text-center walkSquadtitle">Walks</h1>
        </div>
        <button className="addWalk" onClick={this.setShowWalkForm}>Create New Walk</button>
        { this.state.showWalkForm && <WalkForm addWalk={this.addWalk} setHideWalkForm={this.setHideWalkForm} doggos={doggos} minions={minions} editMode={editMode} walkToEdit={walkToEdit} updateWalk={this.updateWalk}/> }
        <div className="walk-squad-cards d-flex flex-wrap">
          {walkCards}
        </div>
      </div>
      );
    }
}
export default WalkSquad;
