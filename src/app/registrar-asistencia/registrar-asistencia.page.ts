import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registrar-asistencia',
  templateUrl: './registrar-asistencia.page.html',
  styleUrls: ['./registrar-asistencia.page.scss'],
})
export class RegistrarAsistenciaPage implements OnInit {
  codigoQR: string = 'assets/qr-placeholder.png'; 

  constructor(private alertCtrl: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  registrarAsistencia() {
    console.log('Asistencia registrada');
    this.showAlert('Éxito', 'Tu asistencia ha sido registrada correctamente.');
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  volver() {
    this.navCtrl.navigateBack('/inicio'); // Redirigir al menú principal
  }
}
