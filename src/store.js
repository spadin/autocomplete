import {applyMiddleware, createStore} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {epics, reducers} from './ducks';

const epicMiddleware = createEpicMiddleware(epics);

export const store = () =>
  createStore(reducers, applyMiddleware(epicMiddleware));
