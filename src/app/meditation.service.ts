import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root',
})
export class MeditationService {
  baseUrlMeditations: string = 'https://www.googleapis.com/youtube/v3/search';
  key: string = 'AIzaSyBAU64ophkz8C4KY1z15G-YjFav_DqnRp8';

  constructor(private http: HttpClient) {}

  getData = (keyword: string): any => {
    return this.http.get(this.baseUrlMeditations, {
      params: {
        api_key: this.key,
        title: keyword,
      },
    });
  };
}
