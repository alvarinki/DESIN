import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {
    parrafo: string=" "
    textoInput: string=""
    cambiarTexto(textoInput: string){
      this.parrafo= textoInput
    }
}
