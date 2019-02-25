import { Book } from '../../home/models/book';
import * as actions from './actions';


export interface State {
  loadedBooks: boolean;
  collection: Book[];
}

const initialState: State = {
  loadedBooks: false,
  collection: []
};

export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.ActionTypes.loadBooksStart :
      return {
        ...state,
        loadedBooks: false
      };
    case actions.ActionTypes.loadBooksSuccess :
      return {
        ...state,
        collection: action.payload,
        loadedBooks: true
      };
    default:
      return {
        ...state
      };
  }
}
export const getLoadBooks = state => state.loadedBooks;
export const getCollection = state => state.collection;
