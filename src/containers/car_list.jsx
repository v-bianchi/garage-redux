/* eslint no-bitwise:off */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions/index'
import Car from '../components/car'

class CarList extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garageName);
  }

  render() {
    return (
      <div className="cars-container col-xs-12 col-sm-9">
        <ul className="list-unstyled">
          {
            this.props.cars.map ((car) => {
              return (
                <Link to='/' key={car.id}>
                  <Car key={car.id} car={car} />
                </Link>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garageName: state.garageName.toLowerCase().replace(/\s/g, '-')
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
