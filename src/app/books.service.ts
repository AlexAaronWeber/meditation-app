import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  BaseUrlBook: String = 'https://www.googleapis.com/books/v1/volumes';
  key: string = 'AIzaSyBUNV2CLNm3oEPCVWwGfBtF1mU4rWesYxI';
  constructor(private http: HttpClient) {}
}
