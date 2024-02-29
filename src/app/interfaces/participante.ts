export interface ParticipanteResponse {
    isSuccess: boolean;
    data: Participante[];
    message: string;
    errors: any;
  }

  export interface Participante {
    nombre: string;
    primerApellido: string;
    segundoApellido?: string;
    dniParticipante: string;
    añoNacimiento: string;
    direccionParticipante: string;
    localidad: string;
    codigoPostal: number;
    lesiones?: string;
    tomaMedicacion: string;
    descripcionMedicacion?: string;
    alergias: string;
    descripcionAlergias?: string;
    nombreTutor: string;
    primerApellidoTutor: string;
    segundoApellidoTutor?: string;
    dniTutor: string;
    telefonoPrincipal: number;
    telefonoSecundario?: number;
    correoParticipante: string;
    permiteFotos: string;
    firma: string;
    idCampus: number;
    tallaCamiseta: string;
    esJugador: string
  }
  