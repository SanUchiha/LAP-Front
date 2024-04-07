export interface Imagen {
  urlImagen: string;
  nombreImagen: string;
}

export interface ImagenShow {
  nombreCampus: string;
  listaImagenes: Imagen[];
}
