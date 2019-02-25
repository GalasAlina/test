import { Action } from '@ngrx/store';

export enum ActionTypes {
  LoadingStart = '[APP] loading start',
  LoadingEnd = '[APP] loading end'
}

export class LoadingStartAction implements Action {
  readonly type = ActionTypes.LoadingStart;
}

export class LoadingEndAction implements Action {
  readonly type = ActionTypes.LoadingEnd;
}

export type actions = LoadingStartAction |  LoadingEndAction;
