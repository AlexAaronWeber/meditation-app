import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root',
})
export class MeditationService {
  baseUrlMeditations: string = 'https://www.googleapis.com/youtube/v3/search';
  videoBaseUrl: string = 'https://www.googleapis.com/youtube/v3/videos/list';
  brandonKey: string = 'AIzaSyBAU64ophkz8C4KY1z15G-YjFav_DqnRp8';
  troyKey: string = 'AIzaSyCariktb8hHfDYmmGcFoBsGec3mx9YsThM';
  alexKey: string = 'AIzaSyBJxMoabGco8PZBpHBt1UyMrTMJ3nK-vOk';
  keyword: string;

  constructor(private http: HttpClient) {}

  getMeditations = (subject: string): any => {
    return this.http.get(this.baseUrlMeditations, {
      params: {
        key: this.troyKey,
        q: subject,
        part: 'snippet',
        maxResults: '15',
      },
    });
  };
}

//https://www.youtube.com/watch?v=
