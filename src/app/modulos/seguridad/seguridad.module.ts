import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { SeguridadRoutingModule } from './seguridad-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CambiarClaveComponent,
    RecuperarClaveComponent,
    CerrarSesionComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CambiarClaveComponent,
    RecuperarClaveComponent,
    CerrarSesionComponent,
    LoginComponent,
  ]
})
export class SeguridadModule { }
