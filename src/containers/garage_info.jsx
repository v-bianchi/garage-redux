/* eslint no-bitwise:off */import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class GarageInfo extends Component {
  render() {
    let button = null;

    switch (this.props.action) {
      case 'index': {
        button = <Link to='/cars/new' className="btn btn-default">Add new car</Link>;
        break;
      }
      case 'new': {
        button = <Link to='/' className="btn btn-default">Back to index</Link>;
        break;
      }
    }

    return (
      <div className="garage-info col-xs-12 col-sm-3">
        <h3>{this.props.garageName}</h3>
        {button}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garageName: state.garageName
  };
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps, mapDispatchToProps)(GarageInfo);
