import {combineEpics} from 'redux-observable';
import {combineReducers} from 'redux';
import {reducer as words, wordEpic} from './words';

export const reducers = combineReducers({
  words,
});

export const epics = combineEpics(wordEpic);
