import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions/actions';

export interface State {
  isLoading: boolean;
}

const initialState: State = {
  isLoading: false,
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case ActionTypes.LoadingStart:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.LoadingEnd:
      return {
        ...state,
        isLoading: false
      };
    default:
      return {
        ...state
      };
  }
}
