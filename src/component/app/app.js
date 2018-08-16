import React, {Component, Fragment} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Dashboard from '../dashboard/dashboard.js';
import store from '../../../lib/store.js';

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