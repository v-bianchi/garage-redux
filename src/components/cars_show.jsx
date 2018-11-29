import React from 'react';
import GarageInfo from '../containers/garage_info';
import CarDetail from '../containers/car_detail';

const CarsShow = (props) => {
  return (
    <div className="row">
      <GarageInfo action="show"/>
      <CarDetail idFromParams={props.match.params.id}/>
    </div>
  );
};

export default CarsShow;
