import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromApp from './app.reducer';
import * as fromBooks from '../../shared/store';

export interface State {
 app: fromApp.State;
 content: fromBooks.State;
}

export const reducers: ActionReducerMap<State> = {
  app: fromApp.reducer,
  content: fromBooks.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
