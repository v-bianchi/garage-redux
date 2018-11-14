import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

// Internal modules
import CarsIndex from './components/cars_index';

// State and reducers
import '../assets/stylesheets/application.scss';

const initialState = {
  // garageName: prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`,
  garageName: 'Kiv Super Repair',
  cars: [
    { id: 1, brand: 'Subaru', model: 'Legacy L', owner: 'Kiv', plate: 'WOB-ED-42' },
    { id: 2, brand: 'Audi', model: 'A4', owner: 'Big', plate: 'AAA-12-BC' },
    { id: 3, brand: 'Aston Martin', model: 'DB9', owner: 'James', plate: '418-ED-94' },
    { id: 4, brand: 'Subaru', model: 'Forester', owner: 'Jimmy', plate: '422-XS-98' },
    { id: 5, brand: 'BMW', model: 'M3', owner: 'Nigel', plate: '1234-XD-75' }
  ]
}
import carsReducer from './reducers/cars_reducer';

const reducers = combineReducers({
  garageName: (state = null, action) => state,
  cars: carsReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={CarsIndex} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
