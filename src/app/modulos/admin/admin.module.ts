import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './usuarios/create/create.component';
import { EditComponent } from './usuarios/edit/edit.component';
import { GetComponent } from './usuarios/get/get.component';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    GetComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }