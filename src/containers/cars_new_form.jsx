import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';

const required = value => value ? undefined : 'Required';
const plate_format = value => value.match(/(\W|[a-z])/)
                                ? 'Must contain only uppercase letters and numbers'
                                : undefined;


class CarsNewForm extends Component {

  onSubmit = (values) => {
    this.props.createCar(this.props.garageSlug, values, (car) => {
      console.log("garageSlug", this.props.garageSlug);
      console.log("values", values);
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  };

  renderField({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input
          {...input}
          className="form-control"
          type={type}
        />
        {touched && ((error && <span>{error}</span>)||(warning && <span>{warning}</span>))}
      </div>
    );
  };

  render() {
    console.log(this.props)
    return (
      <div className="right-side-container col-xs-12 col-sm-9">
        <div className="flex-center">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              label="Brand"
              name="brand"
              type="text"
              component={this.renderField}
              validate={required}
            />
            <Field
              label="Model"
              name="model"
              type="text"
              component={this.renderField}
              validate={required}
            />
            <Field
              label="Owner"
              name="owner"
              type="text"
              component={this.renderField}
              validate={required}
            />
            <Field
              label="Plate"
              name="plate"
              type="text"
              component={this.renderField}
              validate={[required, plate_format]}
            />
            <button
              className="btn btn-primary" type="submit"
              disabled={ this.props.pristine || this.props.submitting || this.props.invalid }
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


export default  reduxForm({
                  form: 'newCarsForm'
                })
                (connect(mapStateToProps, { createCar })(CarsNewForm));
