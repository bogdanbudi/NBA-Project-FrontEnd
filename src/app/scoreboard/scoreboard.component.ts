import { Component, OnInit } from '@angular/core';
import { IGame } from '../Models/game';
import { ScoreboardService } from './scoreboard.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  games: IGame[] | undefined;

  constructor(private scoreboardService: ScoreboardService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this.scoreboardService.getScoreboard().subscribe(response => {
      this.games = response;
      console.log(response);
    },
      error => {
        console.log(error);
      })
  }
}
