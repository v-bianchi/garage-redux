import React from 'react';

const Car = (props) => {
  return (
    <div className="car">
      <p>{props.car.brand} {props.car.model}</p>
      <p>Owner: {props.car.owner}</p>
    </div>
  );
};

export default Car;
