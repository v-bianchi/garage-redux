import React from 'react';
import GarageInfo from '../containers/garage_info';
import CarsNewForm from '../containers/cars_new_form';

const CarsNew = (props) => {
  return (
    <div className="row">
      <GarageInfo action="new"/>
      <CarsNewForm history={props.history}/>
    </div>
  );
};

export default CarsNew;
