import { Component, Input, OnInit, Output } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Campus, CampusResponse, CampusShow } from '../interfaces/campus';
import { CardComponent } from "../component/card/card.component";
import { CampusService } from '../services/campus.service';
import moment from 'moment';
import { ParticipantesService } from '../services/participantes.service';
import { ParticipanteResponse } from '../interfaces/participante';

@Component({
  selector: 'app-content',
  standalone: true,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
  imports: [MatGridListModule, CardComponent]
})
export class ContentComponent implements OnInit {
  imageUrl: any;

  constructor(private campusService: CampusService, private participanteService: ParticipantesService) {
    this.listaCampusOut = [];
  }

  listaCampusOut: CampusShow[];
  campusResponse?: CampusResponse;
  participanteResponse?: ParticipanteResponse;

  ngOnInit() {
    this.ObtenerTodosCampus();
  }

  async ObtenerTodosCampus() {
    try {
      this.campusResponse = await this.campusService.ObtenerTodosCampus().toPromise();

      if (this.campusResponse?.isSuccess) {
        await this.ProcesarCampus(this.campusResponse.data);
      } else {
        console.error('Error al obtener campus: ', this.campusResponse?.message);
      }
    } catch (error) {
      this.EnviarCorreoError(error);
      console.error('Error al obtener campus: ', error);
    }
  }

  async ProcesarCampus(campusList: Campus[]) {
    for (const element of campusList) {
      const obj: CampusShow = await this.CrearObjetoCampusShow(element);
      this.listaCampusOut.push(obj);
    }
  }

  async CrearObjetoCampusShow(campus: Campus): Promise<CampusShow> {
    moment.locale();   
    const fechaInicio = moment(campus.diaInicio).format('DD/MM/YYYY');
    const fechaFinal = moment(campus.diaFinal).format('DD/MM/YYYY');

    //Imagen
    var imagen = `./assets/images/${campus.idCampus}.jpg`;

    //Numero de plazas restantes
    this.participanteResponse = await this.participanteService.ParticipantesByCampus(campus.idCampus).toPromise();
    var restantes;
    if(this.participanteResponse?.isSuccess){
      restantes = campus.aforoMaximo - this.participanteResponse.data.length;
    }
    else {
      restantes = campus.aforoMaximo;
    }

    return {
      idCampus: campus.idCampus,
      nombre: campus.nombre,
      descripcion: campus.descripcionCampus,
      fechas: `Del ${fechaInicio} al ${fechaFinal}.`,
      horario: `Desde las ${campus.horaInicio}:00 hasta las ${campus.horaFinal}:00`,
      numeroPlazas: campus.aforoMaximo,
      numeroPlazasRestantes: restantes,
      precio: campus.precio,
      descuento: campus.precio-campus.descuentoJugador,
      imagen: imagen
    };
  }

  EnviarCorreoError(error: any) {
    //Tiene que enviarme un correo con el error para avisarme
  }

}
