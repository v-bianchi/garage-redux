import React from 'react';
import GarageInfo from '../containers/garage_info';
import CarList from '../containers/car_list';

const CarsIndex = (props) => {
  return (
    <div className="row">
      <GarageInfo />
      <CarList />
    </div>
  );
};

export default CarsIndex;
