import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})



export class PlayerComponent implements OnInit {
  @Input() name: string;
  @Input() color: string;
  @Input() xPos: string;
  @Input() yPos: string;

  position = { "x": this.xPos, "y": this.yPos };
  constructor() { }

  ngOnInit() {

  }

}
