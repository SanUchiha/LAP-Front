export interface Campus {
  idCampus: number;
  nombre: string;
  direccion: string;
  localidad: string;
  ciudad: string;
  pais: string;
  precio: number;
  edadMinima: number;
  edadMaxima: number;
  aforoMaximo: number;
  descuentoHermano: number;
  descuentoJugador: number;
  descripcionCampus: string;
  imagenCampus: string;
  diaInicio: Date;
  diaFinal: Date;
  horaInicio: string;
  horaFinal: string;
  formaPagoUno: string;
  formaPagoDos: string;
  formaPagoTres: string;
}

export interface CampusResponse {
  isSuccess: boolean;
  data: Campus[];
  message: string;
  errors: any;
}

export interface CampusResponseById {
  isSuccess: boolean;
  data: Campus;
  message: string;
  errors: any;
}

export interface CampusShow{
  idCampus: number,
  nombre: string,
  descripcion: string,
  fechas: string,
  horario: string,
  numeroPlazas: number,
  numeroPlazasRestantes: number,
  precio: number,
  descuento: number
  imagen: string
}