import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RutasModelo } from '../modelos/rutas.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class RutasService {
  token: string = ''
  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService
  ) {
    this.token = this.seguridadService.getToken();
  }

  store(ruta: RutasModelo): Observable<RutasModelo> {
    return this.http.post<RutasModelo>(environment.servicios.rutas, {
      id: ruta.id,
    });
  }

  getAll(): Observable<RutasModelo[]> {
    return this.http.get<RutasModelo[]>(environment.servicios.rutas, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }

  update(ruta: RutasModelo): Observable<RutasModelo> {
    return this.http.patch<RutasModelo>(`${environment.servicios.rutas}${ruta.id}`, {
      id: ruta.id,
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  delete(id: string): Observable<RutasModelo[]> {
    return this.http.delete<RutasModelo[]>(`${environment.servicios.rutas}${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }

  getWithId(id: string): Observable<RutasModelo> {
    return this.http.get<RutasModelo>(`${environment.servicios.rutas}${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }
}
