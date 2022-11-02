import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AeropuertosModelo } from '../modelos/aeropuertos.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {
  token: string = ''
  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService
  ) {
    this.token = this.seguridadService.getToken();
  }

  store(aeropuerto: AeropuertosModelo): Observable<AeropuertosModelo> {
    return this.http.post<AeropuertosModelo>(environment.servicios.aeropuertos, {
      nombre: aeropuerto.nombre,
      ciudad: aeropuerto.ciudad,
      pais: aeropuerto.pais,
      coordX: aeropuerto.coordX,
      coordY: aeropuerto.coordY,
      siglas: aeropuerto.siglas,
      tipo: aeropuerto.tipo,
    });
  }

  getAll(): Observable<AeropuertosModelo[]> {
    return this.http.get<AeropuertosModelo[]>(environment.servicios.aeropuertos, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }

  update(aeropuerto: AeropuertosModelo): Observable<AeropuertosModelo> {
    return this.http.patch<AeropuertosModelo>(`${environment.servicios.aeropuertos}${aeropuerto.id}`, {
      nombre: aeropuerto.nombre,
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  delete(id: string): Observable<AeropuertosModelo[]> {
    return this.http.delete<AeropuertosModelo[]>(`${environment.servicios.aeropuertos}${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }

  getWithId(id: string): Observable<AeropuertosModelo> {
    return this.http.get<AeropuertosModelo>(`${environment.servicios.aeropuertos}${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }

}
