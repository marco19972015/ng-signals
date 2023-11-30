import { Component, DoCheck, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent implements DoCheck {

  counter = signal(0);

  // Create a signal and assign it to the message prop 
  // we can specify the type since it is generic type at first
  message = signal<string[]>([]);

  // Method to increment counter
  increment(){
    this.counter.update((prevValue) => prevValue + 1);

    // Problem with the code below is that it's creating a new array everytime we increment the size

    // ...prevMessage extracts all the elements from the prevMessage array
    // and those element then become an element of the new array
    // then in that new array we can add that new value we want to push
    this.message.update((prevMessage) => [...prevMessage, 'Current value of counter is: ' + this.counter()]);

    // With this code we are not creating a new array, instead we are pushing the new element to the same existing array
    this.message.mutate((prevMessage) => prevMessage.push('Current value of counter is: ' + this.counter()));
  }

  decrement(){
    this.counter.update((prevValue) => prevValue - 1);

    // remove the last element when the decrement button is clicked
    this.message.mutate((prevMessage) => prevMessage.pop());
  }

  ngDoCheck(){
    console.log('Angular change detection called');
  }
}
