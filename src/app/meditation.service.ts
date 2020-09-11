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

  getData = (): any => {
    return this.http.get(this.baseUrlMeditations, {
      params: {
        key: this.key,
        q: 'meditation',
        part: 'snippet',
      },
    });
  };
}

//https://www.youtube.com/watch?v=
