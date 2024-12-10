import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  operandoA: number=0;
  operandoB: number=0;
  resultado: number=0;
  borrar:number=0;

  sumar():void{
    this.resultado=this.operandoA+this.operandoB
  }
  restar():void{
    this.resultado=this.operandoA-this.operandoB
  }
  multiplicar():void{
    this.resultado=this.operandoA*this.operandoB
  }
  dividir():void{
    this.resultado=this.operandoA/this.operandoB
  }
  borra():void{
    this.resultado=0
    this.operandoA=0
    this.operandoB=0
  } 

}
