import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parcial2808';
  nomap =  ' Adriana Marcela Cortes Vela ' ;
  correo =  ' adrianam-cortesv@unilibre.edu.co ' ;
  Quimicos :  any  = [
    {nombre: ' Nombre elemento ' , simbolo: ' Simbolo ' , numero: ' Numero atomico ' , peso: ' Peso atomico ' , metal: 3 },
    {nombre: ' Titanio ' , simbolo: ' Ti ' , numero: 22 , peso: 47.867 , metal: 1 , categoria: ' alcalino ' },
    {nombre: ' Calcio ' , simbolo: ' Ca ' , numero: 20 , peso: 40.078 , metal: 2 , categoria: ' noble ' },
    {nombre: ' Litio ' , simbolo: ' Li ' , numero: 3 , peso: 6.94 , metal: 1 , categoria: ' noble ' },
    {nombre: ' Helio ' , simbolo: ' He ' , numero: 2 , peso: 4.0026 , metal: 2 , categoria: ' alcalino ' },
    {nombre: ' Hidrogeno ' , simbolo: ' H ' , numero: 1 , peso: 1.008 , metal: 1 , categoria: ' alcalino ' },
    {nombre: ' Oxigeno ' , simbolo: ' O ' , numero: 8 , peso: 15.999 , metal: 1 , categoria: ' noble ' },
    {nombre: ' Tantalo ' , simbolo: ' Ta ' , numero: 73 , peso: 180.95 , metal: 2 , categoria: ' noble ' },
    {nombre: ' Francio ' , simbolo: ' Fr ' , numero: 87 , peso: 223 , metal: 2 , categoria: ' alcalino ' },
    {nombre: ' Fosforo ' , simbolo: ' P ' , numero: 15 , peso: 30.974 , metal: 1 , categoria: ' noble ' },
  ]
}
