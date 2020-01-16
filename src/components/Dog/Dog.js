import React from 'react';
import PropTypes from 'prop-types';
import dogShape from '../../helpers/props/dogShape';
import './Dog.scss';

class Dog extends React.Component {
  static propTypes = {
    doggos: PropTypes.arrayOf(dogShape.dogShape),
  }

  render() {
    const { dog } = this.props;
    return (
      <div className="dogs col-4">
        <div className="card dogCard" id={dog.id}>
          <div className="card-body dog-container">
            <img className="image dogImg" src={dog.imageUrl} alt="doggie"/>
            <div className="card-text">
              <p className="dogName">{dog.name}</p>
              <p>Owner: {dog.owner}</p>
              <p>{dog.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;
