import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Adriana Marcela Cortes Vela';
  correo = 'adrianam-cortesv@unilibre.edu.co';
  Quimicos: any = [
    {nombre: 'Nombre elemento', simbolo: 'Simbolo', numero : 'Numero atomico', peso: 'Peso atomico', metal: 3,categoria:'Categoria'},
    {nombre: 'Sodio', simbolo: 'Na', numero : 11, peso: 22.990, metal: 1, categoria: 'alcalino'},
    {nombre: 'Calcio', simbolo: 'Ca', numero : 20, peso: 40.078, metal: 2, categoria: 'gas noble'},
    {nombre: 'Litio', simbolo: 'Li', numero : 3, peso: 6.94, metal: 1, categoria: 'gas noble'},
    {nombre: 'Helio', simbolo: 'He', numero : 2, peso: 4.0026, metal: 2, categoria: 'alcalino' },
    {nombre: 'Hidrogeno', simbolo: 'H', numero : 1, peso: 1.008, metal: 1, categoria: 'alcalino'},
    {nombre: 'Oxigeno', simbolo: 'O', numero : 8, peso: 15.999, metal: 1, categoria: 'gas noble'},
    {nombre: 'Tantalo', simbolo: 'Ta', numero : 73, peso: 180.95, metal: 2, categoria: 'gas noble'},
    {nombre: 'Francio', simbolo: 'Fr', numero : 87, peso: 223, metal: 2, categoria: 'alcalino'},
    {nombre: 'Fosforo', simbolo: 'P', numero : 15, peso: 30.974, metal: 1, categoria: 'gas noble'},
    {nombre: 'Potasio', simbolo: 'K', numero : 19, peso: 39.098, metal: 1, categoria: 'alcalino'},
    {nombre: 'Rubidio', simbolo: 'Rb', numero : 37, peso: 85.468, metal: 1, categoria: 'alcalino'},
    {nombre: 'Cesio', simbolo: 'Cs', numero : 55, peso: 132.91, metal: 1, categoria: 'alcalino'},
    {nombre: 'Francio', simbolo: 'Fr', numero : 87, peso: 223, metal: 1, categoria: 'alcalino'},
    {nombre: 'Berilio', simbolo: 'Be', numero : 4, peso: 9.0122, metal: 1, categoria: 'alcalino'},
    {nombre: 'Magnesio', simbolo: 'Mg', numero : 12, peso: 24.305, metal: 1, categoria: 'alcalino'},
    {nombre: 'Estroncio', simbolo: 'Sr', numero : 38, peso: 87.62, metal: 1, categoria: 'alcalino'},
    {nombre: 'Bario', simbolo: 'Ba', numero : 56, peso: 137.33, metal: 1, categoria: 'alcalino'},
    {nombre: 'Radio', simbolo: 'Ra', numero : 88, peso: 226, metal: 1, categoria: 'alcalino'},
    {nombre: 'Escandio', simbolo: 'Sc', numero : 21, peso: 44.956, metal: 1, categoria: 'alcalino'},
    {nombre: 'Carbono', simbolo: 'C', numero : 6, peso: 12.011, metal: 2, categoria: 'gas noble'},
    {nombre: 'Nitrogeno', simbolo: 'N', numero : 7, peso: 14.007, metal: 2, categoria: 'gas noble'},
    {nombre: 'Oxigeno', simbolo: 'O', numero : 8, peso: 15.999, metal: 2, categoria: 'gas noble'},
    {nombre: 'Azufre', simbolo: 'S', numero : 16, peso: 32.06, metal: 2, categoria: 'gas noble'},
    {nombre: 'Selenio', simbolo: 'Se', numero : 34, peso: 78.971, metal: 2, categoria: 'gas noble'},
    {nombre: 'Fluor', simbolo: 'F', numero : 9, peso: 18.998, metal: 2, categoria: 'gas noble'},
    {nombre: 'Cloro', simbolo: 'Cl', numero : 17, peso: 35.45, metal: 2, categoria: 'gas noble'},
    {nombre: 'Bromo', simbolo: 'Br', numero : 35, peso: 79.904, metal: 2, categoria: 'gas noble'},
    {nombre: 'Yodo', simbolo: 'I', numero : 53, peso: 126.90, metal: 2, categoria: 'gas noble'},
    {nombre: 'Neon', simbolo: 'Ne', numero : 10, peso: 20.180, metal: 2, categoria: 'gas noble'},
    {nombre: 'Argon', simbolo: 'Ar', numero : 18, peso: 39.948, metal: 2, categoria: 'gas noble'},
    {nombre: 'Kripton', simbolo: 'Kr', numero : 36, peso: 83.798, metal: 2, categoria: 'gas noble'},
    {nombre: 'Xenon', simbolo: 'Xe', numero : 54, peso: 131.29, metal: 2, categoria: 'gas noble'},
    {nombre: 'Radon', simbolo: 'Rn', numero : 86, peso: 222, metal: 2, categoria: 'gas noble'},
    {nombre: 'Boro', simbolo: 'B', numero : 5, peso: 10.81, metal: 4, categoria: 'metaloides'},
    {nombre: 'Silicio', simbolo: 'Si', numero : 14, peso: 28.085, metal: 4, categoria: 'metaloides'},
    {nombre: 'Germanio', simbolo: 'Ge', numero : 32, peso: 72.630, metal: 4, categoria: 'metaloides'},
    {nombre: 'Arsenico', simbolo: 'As', numero : 33, peso: 74.922, metal: 4, categoria: 'metaloides'},
    {nombre: 'Antimonio', simbolo: 'Sb', numero : 51, peso: 121.76, metal: 4, categoria: 'metaloides'},
    {nombre: 'Telurio', simbolo: 'Te', numero : 52, peso: 127.60, metal: 4, categoria: 'metaloides'},
    {nombre: 'Astato', simbolo: 'At', numero : 85, peso: 210, metal: 4, categoria: 'metaloides'},
  ]
  getColor(categoria){
    switch(categoria){
      case 'alcalino':
        return 'green';
      case 'gas noble':
        return 'blue';
      case 'metaloides':
        return 'red';
    }
  }
}
