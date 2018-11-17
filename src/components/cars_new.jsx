import React from 'react';
import GarageInfo from '../containers/garage_info';

const CarsNew = (props) => {
  return (
    <div className="row">
      <GarageInfo action="new"/>
      <p>FORM GOES HERE</p>
    </div>
  );
};

export default CarsNew;
