import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ejemplo',
  standalone: true,
  imports: [],
  templateUrl: './ejemplo.component.html',
  styleUrl: './ejemplo.component.css'
})
export class EjemploComponent {
  //Propiedades y métodos del componente
  titulo = "Ejemplo de componente Angular";
  contador = 0;
  
  incrementarContador(){
    this.contador++;
  }

  decrementarContador(){
    this.contador--;
  }
}
