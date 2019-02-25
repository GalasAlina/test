import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../home/models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {
  @Input() bookItem: Book = {} as Book;
}
