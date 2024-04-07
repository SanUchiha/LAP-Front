import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { CampusService } from '../services/campus.service';
import { CampusShow, CampusResponse, Campus } from '../interfaces/campus';
import { ParticipanteResponse } from '../interfaces/participante';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    MatMenuModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private campusService: CampusService) {}

  listaCampusOut?: CampusShow[];
  campusResponse?: CampusResponse;
  participanteResponse?: ParticipanteResponse;
  isFull: boolean = false;
  isSidenavOpen: boolean = false;

  ngOnInit() {
    this.ObtenerTodosCampus();
  }

  GoToHome() {
    this.router.navigate(['home']);
  }

  GoToEventos() {
    this.GoToHome();
  }

  GoToContact() {
    this.router.navigate(['contact']);
  }

  GoToImages(nombreCampus: string) {
    this.router.navigate(['galeria', { nombreCampus: nombreCampus }]);
  }

  async ObtenerTodosCampus() {
    try {
      this.campusResponse = await this.campusService
        .ObtenerTodosCampus()
        .toPromise();

      if (this.campusResponse?.isSuccess) {
      } else {
        console.error(
          'Error al obtener campus: ',
          this.campusResponse?.message
        );
      }
    } catch (error) {
      this.EnviarCorreoError(error);
      console.error('Error al obtener campus: ', error);
    }
  }

  async ProcesarCampus(campusList: Campus[]) {
    for (const element of campusList) {
      //const obj: CampusShow = await this.CrearObjetoCampusShow(element);
      //this.listaCampusOut.push(obj);
    }
  }

  EnviarCorreoError(error: any) {
    //Tiene que enviarme un correo con el error para avisarme
  }

  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
