import React from 'react';
import dogShape from '../../helpers/props/dogShape';

class Dog extends React.Component {
  static propTypes = {
    doggos: dogShape.dogShape,
  }

  render() {
    const { dog } = this.props;
    return (
      <div className="dogs col-4">
        <div className="card" id={dog.id}>
          <div className="card-body dog-container">
            <img className="image" src={dog.imageUrl} alt="doggie"/>
            <h3>Dog Name: {dog.name}</h3>
            <h4>Dog Owner: {dog.owner}</h4>
            <p>Description: {dog.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;
