import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadBooksStartAction } from '../store/actions';
import { loadBooksSelector } from '../store/index';
import { filter, first } from 'rxjs/operators';
import { State } from '../../store/reducers/index';

@Injectable()
export class BooksResolver implements Resolve<boolean> {
  constructor(private store$: Store<State>) {}

  resolve(): Observable<boolean> {
    this.store$.dispatch(new LoadBooksStartAction());

    return this.store$.pipe(select(loadBooksSelector),
      filter(loaded => loaded), first());
  }
}
