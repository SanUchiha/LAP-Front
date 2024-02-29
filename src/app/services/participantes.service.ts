import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participante, ParticipanteResponse } from '../interfaces/participante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantesService {

  constructor(private httpClient: HttpClient) { }

  private apiUrlBase = 'http://www.likeaproevent.somee.com/api/participante/';

  //Registrar un participante.
  RegistrarPartcipante(participante: Participante): Observable<ParticipanteResponse> {
    return this.httpClient.post<ParticipanteResponse>(`${this.apiUrlBase}register`, participante);
  }

  //Obtener un participante por id.

  //Obtener todos los participantes de un campus.
  ParticipantesByCampus(campusId: number): Observable<ParticipanteResponse> {
    return this.httpClient.get<ParticipanteResponse>(`${this.apiUrlBase}campus/${campusId}`);
  }
}
