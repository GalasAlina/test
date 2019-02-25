import { Action } from '@ngrx/store';
import { Book } from '../../home/models/book';

export enum ActionTypes {
  loadBooksStart = '[book] loading start',
  loadBooksSuccess = '[book] loading succeed'
}

export class LoadBooksStartAction implements Action {
  readonly type = ActionTypes.loadBooksStart;
}

export class LoadBooksSuccessAction implements Action {
  readonly type = ActionTypes.loadBooksSuccess;
  constructor(public payload: Book[]) {}
}

export type Actions = LoadBooksStartAction | LoadBooksSuccessAction;
