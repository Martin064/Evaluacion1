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

  ngOnInit() {}

  changePassword() {
    if (this.currentPassword && this.newPassword) {
      // Aquí podrías agregar la lógica para cambiar la contraseña en tu backend
      alert('Clave cambiada exitosamente.');
      this.navCtrl.navigateBack('login'); // Volver a la página de inicio
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}
