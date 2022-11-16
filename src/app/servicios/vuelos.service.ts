import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VuelosModelo } from '../modelos/vuelos.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {
  token: string = ''
  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService
  ) {
    this.token = this.seguridadService.getToken();
  }

  store(vuelo: VuelosModelo): Observable<VuelosModelo> {
    return this.http.post<VuelosModelo>(environment.servicios.vuelos, {
      fechaInicio:vuelo.fechaInicio,
      horaInicio:vuelo.horaInicio,
      fechaFin:vuelo.fechaFin,
      horaFin:vuelo.horaFin,
      asientosVendidos:vuelo.asientosVendidos,
      nombrePiloto:vuelo.nombrePiloto,
      ruta:vuelo.ruta,
    });
  }

  getAll(): Observable<VuelosModelo[]> {
    return this.http.get<VuelosModelo[]>(environment.servicios.vuelos, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }

  update(vuelo: VuelosModelo): Observable<VuelosModelo> {
    return this.http.patch<VuelosModelo>(`${environment.servicios.vuelos}${vuelo.id}`, {
      fechaInicio:vuelo.fechaInicio,
      horaInicio:vuelo.horaInicio,
      fechaFin:vuelo.fechaFin,
      horaFin:vuelo.horaFin,
      asientosVendidos:vuelo.asientosVendidos,
      nombrePiloto:vuelo.nombrePiloto,
      ruta:vuelo.ruta,
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  delete(id: string): Observable<VuelosModelo[]> {
    return this.http.delete<VuelosModelo[]>(`${environment.servicios.vuelos}${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }

  getWithId(id: string): Observable<VuelosModelo> {
    return this.http.get<VuelosModelo>(`${environment.servicios.vuelos}${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }
}
