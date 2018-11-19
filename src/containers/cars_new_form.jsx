import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';

class CarsNewForm extends Component {
  onSubmit = (values) => {
    this.props.createCar(this.props.garageSlug, values, (car) => {
      console.log("garageSlug", this.props.garageSlug);
      console.log("values", values);
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="right-side-container col-xs-12 col-sm-9">
        <div className="flex-center">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              label="Brand"
              name="brand"
              type="text"
              component={this.renderField}
            />
            <Field
              label="Model"
              name="model"
              type="text"
              component={this.renderField}
            />
            <Field
              label="Owner"
              name="owner"
              type="text"
              component={this.renderField}
            />
            <Field
              label="Plate"
              name="plate"
              type="text"
              component={this.renderField}
            />
            <button
              className="btn btn-primary" type="submit"
              disabled={this.props.pristine || this.props.submitting}
            >
            Add car
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garageSlug: state.garageName.toLowerCase().replace(/\s/g, '-')
  };
}


export default reduxForm({ form: 'newCarsForm' })(
  connect(mapStateToProps, { createCar })(CarsNewForm)
);
