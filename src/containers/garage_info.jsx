/* eslint no-bitwise:off */import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class GarageInfo extends Component {
  render() {
    return (
      <div className="garage-info col-xs-12 col-sm-3">
        GARAGE INFO GOES HERE
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

export default connect(mapStateToProps, mapDispatchToProps)(GarageInfo);
