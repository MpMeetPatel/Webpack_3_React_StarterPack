import '../scss/main.scss';

import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore , combineReducers} from 'redux';
import RouterIndexPage from './router/RouterIndexPage';

// 
ReactDOM.render(<RouterIndexPage />, document.getElementById('root'));
