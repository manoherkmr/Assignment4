import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  OddComponentList: number[]=[];
  EvenComponentList: number[]=[];

  OnEvenNumber(num:number){
    console.log(num);
    this.EvenComponentList.push(num);
  }
  OnOddNumber(num:number){
    console.log("odd"+num);this.OddComponentList.push(num);
  }
}
