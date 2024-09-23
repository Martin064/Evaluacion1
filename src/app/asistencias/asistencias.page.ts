import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {

  asistencias = [
    { asignatura: 'Bases de datos', fecha: '2024-09-01', presente: true },
    { asignatura: 'Matematica', fecha: '2024-09-02', presente: false },
    { asignatura: 'Programación', fecha: '2024-09-03', presente: true },
    { asignatura: 'Ingles ', fecha: '2024-09-03', presente: false }
  ];  

  constructor() { }

  ngOnInit() { }

}
