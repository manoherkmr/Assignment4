import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
 
 

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    EvenComponent,
    OddComponent 
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
