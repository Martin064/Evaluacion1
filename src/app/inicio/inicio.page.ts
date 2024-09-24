import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  username: string = 'Usuario1'; 

  constructor() {}

  ngOnInit() {
    this.logUsername();
  }

  logUsername() {
    console.log(`El usuario actual es: ${this.username}`);
  }
}
