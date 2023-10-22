import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
            <h3>Counter: {{counter}}</h3>
            <button (click)="increaseBy(+1)" >+1</button>
            <button (click)="resetBut()">Reset</button>
            <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy(value:number):void{
    this.counter = this.counter + value;
  }

  resetBut():void{
    this.counter = 10;
  }

}
