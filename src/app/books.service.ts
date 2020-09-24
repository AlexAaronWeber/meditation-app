import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  baseUrlBook: string = 'https://www.googleapis.com/books/v1/volumes';
  key: string = 'AIzaSyBUNV2CLNm3oEPCVWwGfBtF1mU4rWesYxI';

  constructor(private http: HttpClient) {}

  getData = (subject: string): any => {
    return this.http.get(this.baseUrlBook, {
      params: {
        key: this.key,
        q: subject,
        maxResults: '16',
      },
    });
  };
}
