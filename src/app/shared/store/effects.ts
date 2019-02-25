import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import * as actions from './actions';
import { switchMap, map } from 'rxjs/operators';
import { BookService } from '../services/book.service';

@Injectable()
export class BookCollectionEffects {
  @Effect()
  loadBooks$: Observable<Action> = this.actions$.pipe(
    ofType<actions.LoadBooksStartAction>(actions.ActionTypes.loadBooksStart),
    switchMap(() => {
      return this.bookService.getBooks()
        .pipe(map(books => new actions.LoadBooksSuccessAction(books)));
    })
  );

  constructor (
    private actions$: Actions,
    private bookService: BookService
    ) {}
}
