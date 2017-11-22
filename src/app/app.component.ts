import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http/src/params';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'GWO';
  readonly ROOT_URL = 'https://gwo.pl';
  books: any;
  szukaj: any;
  loading = false;
  p: number = 1; 

  constructor(private http: HttpClient) {
    // this.getBooks();
  }

  getBooks() {
    // this.books = this.http.get(this.ROOT_URL + '/booksApi/v1/search?query=historia')
    this.szukaj = 'historia';
    this.search();
  }
  search() {
    this.loading = true;
    this.http.get(this.ROOT_URL + '/booksApi/v1/search',
      {
        params: {
          query: this.szukaj
        }
      }).subscribe(books => {
        this.books = books;
        this.loading = false;
      })
  }

}
