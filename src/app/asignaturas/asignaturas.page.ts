import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  asignaturas: string[] = [
    'Programación de aplicaciones móviles',
    'Bases de datos',
    'Matemática Aplicada',
    'Inglés intermedio 2'
  ];

  constructor() { }

  ngOnInit() {
    this.loadAsignaturas();
  }
  loadAsignaturas() {
    console.log('Asignaturas cargadas:', this.asignaturas);
  }
}
