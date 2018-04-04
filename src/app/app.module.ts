import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MazeComponent } from './maze/maze.component';
import {PlayerComponent} from './player/player.component';


@NgModule({
  declarations: [
    AppComponent,
    MazeComponent,
    PlayerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
