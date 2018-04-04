import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maze',
  templateUrl: './maze.component.html',
  styleUrls: ['./maze.component.css']
})



export class MazeComponent implements OnInit {

  constructor() { }
  players: Player[];
  playing: Player[];
  ngOnInit() {
    this.players = [];
    this.playing = [];
    this.addPlayer('p1');
  }

  createPlayer(name, color) {
    return {xPos: 0, yPos: 0, name: name, color: color};
  }

  addPlayer(name) {
    const color = '#'+((1<< 24) * Math.random() | 0).toString(16);
    this.players.push(this.createPlayer(name , color));
    console.log('player added');
  }
  startPlaying(player) {
    this.playing.push(player);
    this.players.splice(this.players.indexOf(player), 1);
    console.log(player , ' entered the game');
    this.makeDragable(player);
    // this.dragElement(document.getElementById(player.name));
  }

  makeDragable(player) {
    console.log('makeDraggable');

  }
  
}


export interface Player {
  xPos: number;
  yPos: number;
  name: string | null;
  color: string;
}
