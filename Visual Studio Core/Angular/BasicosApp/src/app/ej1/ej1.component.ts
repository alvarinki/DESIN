import { Component } from '@angular/core';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [],
  templateUrl: './ej1.component.html',
  styleUrl: './ej1.component.css'
})
export class EJ1Component {
  parrafo: String="Este es un párrafo"
  cambiarTexto(){
    if(this.parrafo=== "Este es un párrafo"){
      this.parrafo= "Este es otro párrafo"
    }
    else{
      this.parrafo="Este es un párrafo"
    }
  }
}
