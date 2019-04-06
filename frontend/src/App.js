import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import Home from './containers/Home';

/* eslint-disable react/prefer-stateless-function */
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}
