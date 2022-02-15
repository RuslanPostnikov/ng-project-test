import { Component, OnInit } from '@angular/core';
import {GameModel} from "../../shared/game.model";
import {GamesService} from "../../shared/games.service";


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games!: any;

  constructor(private GamesService: GamesService) { }

  ngOnInit(): void {
    this.games = this.GamesService.getGames();

  }

}
