import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent {
  // effect function is used when we want to execute some extra logic code when the value of a signal changes

  counter = signal(0);  
  message = signal<string[]>([]);

  // We are computing a value from the counter signal
  doubleCounter = computed(() => this.counter() * 2)


  constructor(){
    // if there is no signal inside the callback function then effect won't run
    effect(() => console.log('New counter value is: ' + this.counter()))
  }

  increment(){
    this.counter.update((prevValue) => prevValue + 1);  

    // With this code we are not creating a new array, instead we are pushing the new element to the same existing array
    this.message.mutate((prevMessage) => prevMessage.push('Current value of counter is: ' + this.counter()));
  }

  decrement(){
    this.counter.update((prevValue) => prevValue - 1);

    // remove the last element when the decrement button is clicked
    this.message.mutate((prevMessage) => prevMessage.pop());
  }

}
