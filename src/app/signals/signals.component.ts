import { Component, DoCheck } from '@angular/core';


@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent implements DoCheck {
  counter: number = 0;
  message: string[] = [];

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

  ngDoCheck(){
    console.log('Angular change detection called');
    
  }
}
