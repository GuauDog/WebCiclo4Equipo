import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// Componentes
import { AppComponent } from './app.component';
// Assets
import { NavbarComponent } from './assets/navbar/navbar.component';
import { FooterComponent } from './assets/footer/footer.component';
import { ErrorComponent } from './assets/error/error.component';
import { IndexComponent } from './assets/index/index.component';
// Modulos
import { AdminModule } from './modulos/admin/admin.module';
import { SeguridadModule } from './modulos/seguridad/seguridad.module';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ErrorComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SeguridadModule,
    AdminModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
