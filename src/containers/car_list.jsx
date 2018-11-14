/* eslint no-bitwise:off */import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CarList extends Component {
  render() {
    return (
      <div className="cars-container col-xs-12 col-sm-9">
        <ul>
          CAR GOES HERE
        </ul>
        <ul>
          CAR GOES HERE
        </ul>
        <ul>
          CAR GOES HERE
        </ul>
        <ul>
          CAR GOES HERE
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
