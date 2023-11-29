import { Component, DoCheck, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent implements DoCheck {
  // Using the set() method to increment the value of the signal
  // Using the update() method to increment the value of the signal


  // Create a signal and assign it to counter prop
  counter = signal(0);
  message: string[] = [];

  // Method to increment counter
  increment(){
    // set method is being used to update the value of the counter signal based on the previous value
    // set method should be used whenenever we want to set a new value and that new value does not depend on the previous value
    // this.counter.set(this.counter() + 1);

    // We should be using update method instead of set method because the update method receives the previous signal value so it depends on that prev value
    // to the update method we need to pass a callback function
    // the call back function receives the previous value of the counter, so angular sets that value as an argument
    this.counter.update((prevValue) => prevValue + 1);
  }

  decrement(){
    this.counter;
  }

  ngDoCheck(){
    console.log('Angular change detection called');
    
  }
}
