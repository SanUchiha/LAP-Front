import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campus, CampusResponse, CampusResponseById } from '../interfaces/campus';

@Injectable({
  providedIn: 'root'
})
export class CampusService {

  constructor(private httpClient: HttpClient) { }

  private apiUrlBase = 'https://www.likeaproevent.somee.com/api/';

  //Obtener todos los campus
  ObtenerTodosCampus(): Observable<CampusResponse> {
    return this.httpClient.get<CampusResponse>(`${this.apiUrlBase}campus`);
  }

  //Obtener un campus
  ObtenerCampus(id: number): Observable<CampusResponseById> {
    return this.httpClient.get<CampusResponseById>(`${this.apiUrlBase}campus/${id}`);
  }

  //Obtener pdf del campus
  ObtenerPdfCampus(id: number): Observable<Blob> {
    return this.httpClient.get(`${this.apiUrlBase}campus/pdf/${id}`, { responseType: 'blob' });
  }
}
