import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.page.html',
  styleUrls: ['./cambiar-clave.page.scss'],
})
export class CambiarClavePage implements OnInit {
  currentPassword: string = '';
  newPassword: string = '';

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.loadUserInfo();
  }
  loadUserInfo() {
    console.log('Información del usuario cargada.');
  }

  changePassword() {
    if (this.currentPassword && this.newPassword) {
 
      alert('Clave cambiada exitosamente.');
      this.navCtrl.navigateBack('inicio'); 
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}


