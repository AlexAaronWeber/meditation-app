import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  baseUrlMusic: string = 'https://www.googleapis.com/youtube/v3/search';
  brandonKey: string = 'AIzaSyBAU64ophkz8C4KY1z15G-YjFav_DqnRp8';
  troyKey: string = 'AIzaSyCariktb8hHfDYmmGcFoBsGec3mx9YsThM';
  alexKey: string = 'AIzaSyDuMN9t9H0qix9MKhaKt_woH_BSNQUV7y0';
  newKey: string = 'AIzaSyCBKaKWLOym4eNmN5GwPEjCKkni8k6KwqM';
  auxKey: string = 'AIzaSyCrvNcuOodQMqHWCrQ5AGCXZGerp2yGiLg';

  constructor(private http: HttpClient) {}

  getMusic = (subject: string): any => {
    return this.http.get(this.baseUrlMusic, {
      params: {
        key: this.newKey,
        q: subject,
        part: 'snippet',
        maxResults: '15',
      },
    });
  };
}
