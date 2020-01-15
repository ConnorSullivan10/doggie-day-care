import React from 'react';
import PropTypes from 'prop-types';
import Dog from '../Dog/Dog';
import dogShape from '../../helpers/props/dogShape';

class DogPen extends React.Component {
  static propTypes = {
    doggos: PropTypes.arrayOf(dogShape.dogShape),
  }

  render() {
    const myDogs = this.props.doggos;
    const dogCards = myDogs.map((dog) => <Dog key={dog.id} dog={dog}/>);
    return (
      <div className="dogPen">
        <div className="dogPenHeader">
          <h1 className="text-center dogPenTitle">Dog Pen</h1>
        </div>
        <div className="dogPen-section d-flex flex-wrap">
          {dogCards}
        </div>
      </div>
    );
  }
}

export default DogPen;
