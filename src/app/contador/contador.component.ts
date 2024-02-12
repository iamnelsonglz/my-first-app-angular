import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
  
})

export class ContadorComponent {
  person = {
    name: 'Nelson',
    age: 24
  }

  number : number = 1;

  decrement() {
    if(this.number > 0) {
      this.number--;
    }
  }

  increment() {
    if(this.number < 20){
      this.number++;
    }
  }
}