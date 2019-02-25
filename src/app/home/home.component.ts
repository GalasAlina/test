import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../store/reducers';
import { Book } from './models/book';
import { Observable } from 'rxjs';
import { getCollectionSelector } from '../shared/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(private store$: Store<State>) {
    this.books$ = this.store$.pipe(select(getCollectionSelector));
  }

  ngOnInit() {
  }

}
