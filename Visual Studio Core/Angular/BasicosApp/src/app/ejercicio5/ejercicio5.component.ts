import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio5.component.html',
  styleUrl: './ejercicio5.component.css'
})
export class Ejercicio5Component {
  entradas: string[]=[]
  posicion: number=0

  anadirNombre(nombre: string){
    if(this.entradas.length< 4)
    this.entradas.push(nombre)
  
  }

  eliminarNombre(nombre: string){
    const posicion= this.entradas.indexOf(nombre)
    if(posicion !== -1){
    this.entradas.splice(posicion, 1)
    this.posicion=posicion-1
    }
    
  }
}
