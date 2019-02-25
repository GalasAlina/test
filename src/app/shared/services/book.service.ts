import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../../home/models/book';

@Injectable()
export class BookService {
  private readonly API_PATH = 'https://fakerestapi.azurewebsites.net/api';
  constructor(private http: HttpClient) {

  }
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.API_PATH}/books`);
  }
}

