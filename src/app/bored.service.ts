import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BoredService {
  baseUrlBored: string = 'https://www.boredapi.com/api/activity';
  constructor(private http: HttpClient) {}
}
