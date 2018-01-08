import {ajax} from 'rxjs/observable/dom/ajax';
import {mergeMap} from 'rxjs/operators/mergeMap';
import {map} from 'rxjs/operators/map';
import {takeUntil} from 'rxjs/operators/takeUntil';
import {catchError} from 'rxjs/operators/catchError';
import {of} from 'rxjs/observable/of';

const ERROR = 'error';
const SEARCH = 'search';
const SET_WORDS = 'set-words';

const setWords = (words) => ({
  type: SET_WORDS,
  words,
});

const throwError = (error) => ({
  type: ERROR,
  error,
});

export const search = (term) => ({
  type: SEARCH,
  term: term,
});

export const reducer = (store = [], action) => {
  switch (action.type) {
    case ERROR:
      return ['Error: did you start the word server?'];
    case SET_WORDS:
      return action.words;
    default:
      return store;
  }
};

export const wordEpic = (action$) =>
  action$
    .ofType(SEARCH)
    .pipe(
      mergeMap(({term}) =>
        ajax
          .getJSON(`/search/${term}`)
          .pipe(
            map((words) => setWords(words)),
            takeUntil(action$.ofType(SEARCH)),
            catchError((e) => of(throwError(e)))
          )
      )
    );
