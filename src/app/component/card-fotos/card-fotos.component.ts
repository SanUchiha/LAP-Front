import { Component, Input, OnInit } from '@angular/core';
import { CampusShow } from '../../interfaces/campus';
import { ActivatedRoute } from '@angular/router';
import { Imagen, ImagenShow } from '../../interfaces/imagen';
import { SpinnerBallComponent } from '../spinner/spinner-ball/spinner-ball.component';

@Component({
  selector: 'app-card-fotos',
  standalone: true,
  templateUrl: './card-fotos.component.html',
  styleUrl: './card-fotos.component.css',
  imports: [SpinnerBallComponent],
})
export class CardFotosComponent implements OnInit {
  @Input() listaCampusIn?: CampusShow[] = [];

  nombreCampus: string = 'Campus de primavera Tiñosa F.C.';

  objImagenesShow?: ImagenShow;

  listaImagenes: Imagen[] = [
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0003.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0014.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0016.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0017.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0020.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0028.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0043.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0050.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0051.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0054.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0055.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0056.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0057.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0058.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0059.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0060.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0061.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0063.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0064.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0065.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0066.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0067.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0068.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0071.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0072.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0073.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0077.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0092.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0093.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0094.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0096.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0097.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0099.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0101.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0110.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0112.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0113.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0114.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0115.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0116.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0117.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0118.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0119.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0120.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0121.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0122.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0123.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0124.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0125.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0126.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0127.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0128.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0130.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0131.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0132.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0134.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0135.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0139.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0140.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0141.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0142.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0143.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0286.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0287.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0288.jpg',
      nombreImagen: '001',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0294.jpg',
      nombreImagen: '002',
    },
    {
      urlImagen: './assets/images/GaleriaFotosSS24/IMG-20240401-WA0295.jpg',
      nombreImagen: '001',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    this.route.params.subscribe((params) => {
      this.nombreCampus = params['nombreCampus'];
    });

    await this.cargarImagenes(this.nombreCampus!);
  }
  async cargarImagenes(nombreCampus: string) {}
}
