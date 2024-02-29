import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reporte } from '../interfaces/reporte';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient) { }

  private apiUrlBase = 'http://www.likeaproevent.somee.com/api/';

  //Enviar email
  SendMail(reporte: Reporte): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrlBase}/email`, reporte);
  }

}
