import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardFotosComponent } from '../../component/card-fotos/card-fotos.component';
import { SpinnerBallComponent } from '../../component/spinner/spinner-ball/spinner-ball.component';

@Component({
  selector: 'app-galeria-imagenes',
  standalone: true,
  templateUrl: './galeria-imagenes.component.html',
  styleUrl: './galeria-imagenes.component.css',
  imports: [MatGridListModule, CardFotosComponent, SpinnerBallComponent],
})
export class GaleriaImagenesComponent {}
