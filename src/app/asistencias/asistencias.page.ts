import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {

  asistencias = [
    { asignatura: 'Bases de datos', fecha: '2024-09-01' ,Seccion:'006d', presente: true },
    { asignatura: 'Matemática', fecha: '2024-09-02', Seccion:'004d', presente: false },
    { asignatura: 'Programación', fecha: '2024-09-03',Seccion:'003d', presente: true },
    { asignatura: 'Inglés', fecha: '2024-09-03', Seccion:'009d',presente: false }
  ];  

  constructor() { }

  ngOnInit() {
    this.loadAsistencias();
  }

  loadAsistencias() {
    console.log('Asistencias cargadas:', this.asistencias);
  }
}
