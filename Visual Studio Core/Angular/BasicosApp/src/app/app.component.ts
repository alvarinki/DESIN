import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';
import { EJ1Component } from './ej1/ej1.component';
import { Ejercicio3Component } from './ejercicio3/ejercicio3.component';
import { Ejercicio4Component } from './ejercicio4/ejercicio4.component';
import { Ejercicio5Component } from './ejercicio5/ejercicio5.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ejercicio2Component, EJ1Component, Ejercicio3Component, Ejercicio4Component, Ejercicio5Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BasicosApp';
}
