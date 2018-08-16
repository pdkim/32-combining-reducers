import React, {Component, Fragment} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Dashboard from '../dashboard/dashboard.js';
import {createStore} from 'redux';
import reducer from '../../reducer/category.js';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={Dashboard} />
        </BrowserRouter>
      </Provider>
    );
  }
}