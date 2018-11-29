/* eslint no-bitwise:off */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchCar } from '../actions/index'

class CarDetail extends Component {
  componentWillMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.idFromParams);
    }
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }

    return (
      <div className="right-side-container col-xs-12 col-sm-9">
        <div className="car-detail">
          <div className="car-detail__image">
          </div>
          <div className="car-detail__content">
            <p><strong>{this.props.car.brand} {this.props.car.model}</strong></p>
            <p><strong>Owner</strong>: {this.props.car.owner}</p>
            <h3>{this.props.car.plate}</h3>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.idFromParams, 10) // From URL
  const car = state.cars.find(c => c.id === id)

  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarDetail);
