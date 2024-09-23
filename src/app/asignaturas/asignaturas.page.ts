import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  asignaturas: string[] = ['Programacion de aplicaciones moviles', 'Bases de datos', 'Matemetica Aplicada' , 'Ingles intermedio 2']; 

  constructor() { }

  ngOnInit() { }

}