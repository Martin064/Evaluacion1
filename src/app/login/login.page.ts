import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';  // Nombre de usuario
  password: string = '';  // Contraseña

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) { }

  ngOnInit() { }

  onSubmit() {
    // Validar credenciales temporales
    if (this.username === 'Usuario1' && this.password === 'MiClav3') {
      console.log('Inicio de sesión exitoso');
      this.navCtrl.navigateForward('/inicio');
    } else {
      this.showAlert('Error', 'Usuario o contraseña incorrectos');
    }
  }

  async resetPassword() {
    // Mensaje simulado para restablecer contraseña
    const alert = await this.alertCtrl.create({
      header: 'Restablecer contraseña',
      message: 'Se ha enviado un correo para restablecer la contraseña',
      buttons: ['OK']
    });
    await alert.present();
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
