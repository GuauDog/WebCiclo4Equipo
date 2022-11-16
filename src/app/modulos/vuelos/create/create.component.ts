import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RutasModelo } from 'src/app/modelos/rutas.model';
import { VuelosModelo } from 'src/app/modelos/vuelos.model';
import { RutasService } from 'src/app/servicios/rutas.service';
import { VuelosService } from 'src/app/servicios/vuelos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  listadoRutas: RutasModelo[] = []
  fgValidacion = this.fb.group({
    nombrePiloto: ['', [Validators.required]],
    fechaInicio: ['', [Validators.required]],
    horaInicio: ['', [Validators.required]],
    fechaFin: ['', [Validators.required]],
    horaFin: ['', [Validators.required]],
    asientosVendidos: ['', [Validators.required]],
    ruta: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private rutasService: RutasService,
    private vuelosService: VuelosService,
    private router: Router,
  ) { }



  ngOnInit(): void {
    this.getAllRutas();
  }

  getAllRutas(){
    this.rutasService.getAll().subscribe((data: RutasModelo[]) => {
      this.listadoRutas = data
      // console.log(data)
    })
  }

  store() {
    let vuelo = new VuelosModelo();
    vuelo.nombrePiloto = this.fgValidacion.controls["nombrePiloto"].value + "";
    vuelo.fechaInicio = this.fgValidacion.controls["fechaInicio"].value + "";
    vuelo.horaInicio = this.fgValidacion.controls["horaInicio"].value + "";

    vuelo.fechaFin = this.fgValidacion.controls["fechaFin"].value + "";
    vuelo.horaFin = this.fgValidacion.controls["horaFin"].value + "";
    vuelo.asientosVendidos = this.fgValidacion.controls["asientosVendidos"].value + "";
    vuelo.ruta = this.fgValidacion.controls["ruta"].value + "";
    this.vuelosService.store(vuelo).subscribe((data: VuelosModelo) => {
      Swal.fire('Creado correctamente!', '', 'success')
      this.router.navigate(['/vuelos/get']);
    },
      (error: any) => {
        console.log(error)
        alert("Error en el envio");
      })
  }


}
