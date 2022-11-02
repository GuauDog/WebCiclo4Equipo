import { Component, OnInit } from '@angular/core';
import { AeropuertosModelo } from 'src/app/modelos/aeropuertos.model';

import { AeropuertoService } from 'src/app/servicios/aeropuerto.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  listado: AeropuertosModelo[] = []
  constructor(private aeropuertoService: AeropuertoService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.aeropuertoService.getAll().subscribe((data: AeropuertosModelo[]) => {
      this.listado = data
      console.log(data)
    })
  }

  delete(id?: any) {
    console.log(id)
    Swal.fire({
      title: '¿Esta seguro de eliminar este registro?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.aeropuertoService.delete(id).subscribe((data: any) => {
          Swal.fire('¡Eliminado correctamente!', '', 'success')
          this.getAll();
        })
      }
    })
  }


}
