import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BoredService {
  baseUrlBored: string =
    'https://www.boredapi.com/api/activity?type=relaxation';

  constructor(private http: HttpClient) {}

  getActivities = (): any => {
    return this.http.get(this.baseUrlBored);
  };
}
