import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../store/reducers';
import { getCollectionSelector } from '../shared/store';
import { Observable } from 'rxjs';
import { Book } from '../home/models/book';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  books$: Observable<Book[]>;

  constructor(private store$: Store<State>) {
    this.books$ = this.store$.pipe(select(getCollectionSelector));
  }
}
