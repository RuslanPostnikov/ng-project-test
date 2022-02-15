import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {GameModel} from "./game.model";
import {catchError, Observable, of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get<GameModel[]>('http://localhost:3000/games');
  }

  addGame(game: GameModel) {
    return this.http.post('http://localhost:3000/library', game);
  }

  getLibrary() {
    return this.http.get<GameModel[]>('http://localhost:3000/library');
  }
}
