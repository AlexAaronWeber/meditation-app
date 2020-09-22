import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  baseUrlMusic: string = 'https://www.googleapis.com/youtube/v3/search';
  newKey: string = 'AIzaSyCBKaKWLOym4eNmN5GwPEjCKkni8k6KwqM';
  brandonKey: string = 'AIzaSyBAU64ophkz8C4KY1z15G-YjFav_DqnRp8';
  troyKey: string = 'AIzaSyCariktb8hHfDYmmGcFoBsGec3mx9YsThM';
  alexKey: string = 'AIzaSyDuMN9t9H0qix9MKhaKt_woH_BSNQUV7y0';
  auxKey: string = 'AIzaSyDr-qYW7RZj3iVEufzwMD3llhuUJmyLviU';
  aux2Key: string = 'AIzaSyAcKZ6_dO5SENPqHM12czqdcN4KspOmILo';

  constructor(private http: HttpClient) {}

  getMusic = (subject: string): any => {
    return this.http.get(this.baseUrlMusic, {
      params: {
        key: this.auxKey,
        q: subject,
        part: 'snippet',
        maxResults: '15',
      },
    });
  };
}
