import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RutasModelo } from 'src/app/modelos/rutas.model';
import { VuelosModelo } from 'src/app/modelos/vuelos.model';
import { RutasService } from 'src/app/servicios/rutas.service';
import { VuelosService } from 'src/app/servicios/vuelos.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  listadoRutas: RutasModelo[] = []
  fgValidacion = this.fb.group({
    id: ['', [Validators.required]],
    nombrePiloto: ['', [Validators.required]],
    fechaInicio: ['', [Validators.required]],
    horaInicio: ['', [Validators.required]],
    fechaFin: ['', [Validators.required]],
    horaFin: ['', [Validators.required]],
    asientosVendidos: ['', [Validators.required]],
    ruta: ['', [Validators.required]],
  });
  id: string = ''

  constructor(
    private fb: FormBuilder,
    private rutasService: RutasService,
    private vuelosService: VuelosService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }



  ngOnInit(): void {
    this.getAllRutas();
    this.id = this.route.snapshot.params["id"]
    this.buscarRegistro(this.id);
  }
  buscarRegistro(id: string) {
    this.vuelosService.getWithId(id).subscribe((data: any) => {
      console.log(data)
      this.fgValidacion.controls["id"].setValue(id);
      this.fgValidacion.controls["nombrePiloto"].setValue(data.nombrePiloto);
      this.fgValidacion.controls["fechaInicio"].setValue(data.fechaInicio);
      this.fgValidacion.controls["horaInicio"].setValue(data.horaInicio);

      this.fgValidacion.controls["fechaFin"].setValue(data.fechaFin);
      this.fgValidacion.controls["horaFin"].setValue(data.horaFin);
      this.fgValidacion.controls["asientosVendidos"].setValue(data.asientosVendidos);

      this.fgValidacion.controls["ruta"].setValue(data.ruta);


    })
  }

  getAllRutas(){
    this.rutasService.getAll().subscribe((data: RutasModelo[]) => {
      this.listadoRutas = data
      // console.log(data)
    })
  }

  edit() {
    let vuelo = new VuelosModelo();
    vuelo.id = this.fgValidacion.controls["id"].value + "";
    vuelo.nombrePiloto = this.fgValidacion.controls["nombrePiloto"].value + "";
    vuelo.fechaInicio = this.fgValidacion.controls["fechaInicio"].value + "";
    vuelo.horaInicio = this.fgValidacion.controls["horaInicio"].value + "";

    vuelo.fechaFin = this.fgValidacion.controls["fechaFin"].value + "";
    vuelo.horaFin = this.fgValidacion.controls["horaFin"].value + "";
    vuelo.asientosVendidos = this.fgValidacion.controls["asientosVendidos"].value + "";
    vuelo.ruta = this.fgValidacion.controls["ruta"].value + "";
    this.vuelosService.update(vuelo).subscribe((data: VuelosModelo) => {
      Swal.fire('Creado correctamente!', '', 'success')
      this.router.navigate(['/vuelos/get']);
    },
      (error: any) => {
        console.log(error)
        alert("Error en el envio");
      })
  }

}
