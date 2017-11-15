import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
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
  books : any;
  szukaj: string;

  constructor(private http: HttpClient){}
  
  getBooks() {
    this.books = this.http.get(this.ROOT_URL + '/booksApi/v1/search?query=historia')
    } 
  search() {
    // https://gwo.pl/booksApi/v1/search?query=j%C4%99zyk%20polski
    this.books = this.http.get(this.ROOT_URL + '/booksApi/v1/search', 
    {params: {
      query: this.szukaj
    }}  )
  }
}
