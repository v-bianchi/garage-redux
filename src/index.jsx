import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

// Internal modules
import CarsIndex from './components/cars_index';
import CarsNew from './components/cars_new';
import CarsShow from './components/cars_show';

// State and reducers
import '../assets/stylesheets/application.scss';

const initialState = {
  // garageName: prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`,
  garageName: 'Kiv Super Repair',
  cars: []
}
import carsReducer from './reducers/cars_reducer';

const reducers = combineReducers({
  garageName: (state = null, action) => state,
  cars: carsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={CarsIndex} />
        <Route path="/cars/new" exact component={CarsNew} />
        <Route path="/cars/:id" exact component={CarsShow} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
