import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  baseUrlMusic: string = 'https://www.googleapis.com/youtube/v3/search';
  key: string = 'AIzaSyBAU64ophkz8C4KY1z15G-YjFav_DqnRp8';

  constructor(private http: HttpClient) {}
}
