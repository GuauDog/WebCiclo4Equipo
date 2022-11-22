import { Component, OnInit } from '@angular/core';
import { VuelosModelo } from 'src/app/modelos/vuelos.model';
import { VuelosService } from 'src/app/servicios/vuelos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {


  listado: VuelosModelo[] = []
  constructor(private vueloService: VuelosService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.vueloService.getAll().subscribe((data: VuelosModelo[]) => {
      this.listado = data
    })
  }

  delete(id?: any) {
    Swal.fire({
      title: '¿Esta seguro de eliminar este registro?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.vueloService.delete(id).subscribe((data: any) => {
          Swal.fire('¡Eliminado correctamente!', '', 'success')
          this.getAll();
        })
      }
    })
  }


}
