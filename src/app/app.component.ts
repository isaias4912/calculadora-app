import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CalculadoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private titulo= 'Calculadora con Angular';
  // realizando encapsulamiento de datos
   get mostrarTitulo(){
    return this.titulo
  }
}
