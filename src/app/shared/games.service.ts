import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GameModel} from "./game.model";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get<GameModel[]>('http://localhost:3000/games', this.httpOptions);
  }
}
