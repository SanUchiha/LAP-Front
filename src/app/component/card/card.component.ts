import { Component, Input, OnInit, Output, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CampusShow } from '../../interfaces/campus';
import { CampusService } from '../../services/campus.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  constructor(private campusService: CampusService, private router: Router, private route: ActivatedRoute) { }

  MasInformacion(idCampus: number) {
    this.campusService.ObtenerPdfCampus(idCampus).subscribe(
      (data: Blob) => {
        const url = window.URL.createObjectURL(data);
        window.open(url);
      },
      (error) => {
        console.error('Error al descargar el PDF', error);
        alert("Disculpe. No se puede descargar la información.")
      }
    );
  }
  GoToForm(idCampus: number) {
      this.router.navigate(["formSign", {id: idCampus}]);
  }

  @Input() listaCampusIn?: CampusShow[] = [];
}
