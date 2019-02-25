import {
  ActionReducer,
  ActionReducerMap, combineReducers, createSelector,
} from '@ngrx/store';
import * as fromBooks from './home.reducer';

export interface State {
  books: fromBooks.State;
}

export const reducers: ActionReducerMap<State> = {
  books: fromBooks.reducer,
};

const combineReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return combineReducer(state, action);
}


export const getHomePage = state => state.content.books;

export const loadBooksSelector = createSelector(getHomePage, fromBooks.getLoadBooks);
export const getCollectionSelector = createSelector(getHomePage, fromBooks.getCollection);

