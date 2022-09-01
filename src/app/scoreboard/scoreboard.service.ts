import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IGame } from '../Models/game';

@Injectable({
  providedIn: 'root'
})
export class ScoreboardService {

  baseUrl = 'http://localhost:5116/api/v1/Game';

  constructor(private http: HttpClient){}

  getScoreboard() {
    return this.http.get<IGame[]>(this.baseUrl);
  }
}
