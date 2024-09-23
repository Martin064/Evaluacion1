import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'asistencias',
    loadChildren: () => import('./asistencias/asistencias.module').then(m => m.AsistenciasPageModule)
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./asignaturas/asignaturas.module').then(m => m.AsignaturasPageModule)
  },
  {
    path: 'cambiar-clave',
    loadChildren: () => import('./cambiar-clave/cambiar-clave.module').then(m => m.CambiarClavePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'registrar-asistencia',
    loadChildren: () => import('./registrar-asistencia/registrar-asistencia.module').then( m => m.RegistrarAsistenciaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
