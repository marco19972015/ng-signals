import { Component, DoCheck, signal } from '@angular/core';


@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent implements DoCheck {
  // We use signal as a function (so we call the signal)
  // A signal takes two arguments
  // A signal returns us an object which is a wrapper around the data we assign it to 
  // Whenever the value in counter changes, signal will notify angular about that change and tell it to render the new value in the UI

  // Create a signal and assign it to counter prop
  // NOTE counter is now a signal function which returns an object
  counter = signal(0);
  message: string[] = [];

  increment(){
    this.counter;
  }

  decrement(){
    this.counter;
  }

  ngDoCheck(){
    console.log('Angular change detection called');
    
  }
}
