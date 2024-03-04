import { Component } from '@angular/core';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrl: './texto.component.css'
})
export class TextoComponent {
  number : number = 16;
  text : string = 'Tamaño de texto: ';
  size : string = 'font-size: 20px';

  decrement() {
    if(this.number > 10) {
      this.number--;
    }
  }

  increment() {
    this.number++; 
  }
}
