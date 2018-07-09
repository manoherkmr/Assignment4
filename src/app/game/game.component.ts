import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Output() OddNumberGet = new EventEmitter<number>();
  @Output() EvenNumberGet = new EventEmitter<number>();
  IndxNumber: number = 0;
  intervalHandler: any;

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.intervalHandler = setInterval(() => {
      this.IndxNumber = this.IndxNumber + 1;
      if (this.IndxNumber % 2 == 0) {
        
        this.OddNumberGet.emit(this.IndxNumber);
      } else {
        
        
        this.EvenNumberGet.emit(this.IndxNumber);
      }
    }, 1000);

  }
  stop() {
    clearInterval(this.intervalHandler);
  }
}
