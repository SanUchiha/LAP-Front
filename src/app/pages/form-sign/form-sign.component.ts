import { CommonModule } from '@angular/common';
import {
  Participante,
  ParticipanteResponse,
} from '../../interfaces/participante';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CampusService } from '../../services/campus.service';
import {
  Campus,
  CampusResponse,
  CampusResponseById,
} from '../../interfaces/campus';
import { ParticipantesService } from '../../services/participantes.service';
import { DialogReporteComponent } from '../../component/dialog-reporte/dialog-reporte.component';
import { MatDialog } from '@angular/material/dialog';
import { Reporte } from '../../interfaces/reporte';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-sign',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './form-sign.component.html',
  styleUrl: './form-sign.component.css',
})
export class FormSignComponent implements OnInit {
  resultado!: string;
  idCampus?: number;

  formularioContacto = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    primerApellido: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    segundoApellido: new FormControl('', [Validators.maxLength(30)]),
    dniParticipante: new FormControl('', [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(9),
    ]),
    fechaNacimiento: new FormControl('', [
      Validators.required,
      this.formatoFechaValido(),
    ]),
    direccion: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    localidad: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    codigoPostal: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(5),
      this.formatoCodigoPostalValido(),
    ]),
    lesiones: new FormControl('', [Validators.maxLength(255)]),
    tomaMedicacion: new FormControl('', [
      Validators.required,
      Validators.maxLength(2),
    ]),
    descripcionMedicacion: new FormControl('', [Validators.maxLength(255)]),
    alergias: new FormControl('', [
      Validators.required,
      Validators.maxLength(2),
    ]),
    descripcionAlergias: new FormControl('', [Validators.maxLength(255)]),
    nombreTutor: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    primerApellidoTutor: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    segundoApellidoTutor: new FormControl('', [Validators.maxLength(30)]),
    dnitutor: new FormControl('', [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(9),
    ]),
    telefonoPrincipal: new FormControl('', [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(9),
    ]),
    telefonoSecundario: new FormControl('', [
      Validators.minLength(9),
      Validators.maxLength(9),
    ]),
    correoParticipante: new FormControl('', [
      Validators.required,
      Validators.maxLength(70),
      Validators.email,
    ]),
    permiteFotos: new FormControl('', [
      Validators.required,
      Validators.maxLength(2),
    ]),
    tallaCamiseta: new FormControl('', [
      Validators.required,
      Validators.maxLength(5),
    ]),
    esJugador: new FormControl('', [
      Validators.required,
      Validators.maxLength(2),
    ]),
  });

  participante: Participante = {
    nombre: '',
    primerApellido: '',
    dniParticipante: '',
    añoNacimiento: '',
    direccionParticipante: '',
    localidad: '',
    codigoPostal: 0,
    tomaMedicacion: '',
    alergias: '',
    nombreTutor: '',
    primerApellidoTutor: '',
    dniTutor: '',
    telefonoPrincipal: 0,
    correoParticipante: '',
    permiteFotos: '',
    firma: 'Firmado',
    idCampus: 1,
    tallaCamiseta: '',
    esJugador: '',
  };

  participanteResponse?: ParticipanteResponse;
  campusResponse?: CampusResponse;
  campus?: Campus;
  reporte?: Reporte;
  campusResponseById?: CampusResponseById;

  constructor(
    private route: ActivatedRoute,
    private campusService: CampusService,
    private participanteService: ParticipantesService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.idCampus = params['id'];
    });
  }

  formatoFechaValido(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const formatoFecha = /^\d{2}\/\d{2}\/\d{4}$/;

      if (control.value && !formatoFecha.test(control.value)) {
        return { formatoFechaInvalido: true };
      }

      return null;
    };
  }

  formatoCodigoPostalValido(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const formatoCodigoPostal = /^\d+$/;

      if (control.value && !formatoCodigoPostal.test(control.value)) {
        return { formatoCodigoPostalInvalido: true };
      }

      return null;
    };
  }

  async submit() {
    if (this.formularioContacto.valid) {
      this.resultado = 'Todos los campos han sido rellenados correctamente';

      const fechaNacimiento = this.formularioContacto.value.fechaNacimiento!;
      const fechaYear = new Date(fechaNacimiento).getFullYear().toString();

      this.participante = {
        nombre: this.formularioContacto.value.nombre!,
        primerApellido: this.formularioContacto.value.primerApellido!,
        segundoApellido: this.formularioContacto.value.segundoApellido!,
        dniParticipante: this.formularioContacto.value.dniParticipante!,
        añoNacimiento: fechaYear,
        direccionParticipante: this.formularioContacto.value.direccion!,
        localidad: this.formularioContacto.value.localidad!,
        codigoPostal: parseInt(this.formularioContacto.value.codigoPostal!),
        tomaMedicacion: this.formularioContacto.value.tomaMedicacion!,
        alergias: this.formularioContacto.value.alergias!,
        nombreTutor: this.formularioContacto.value.nombreTutor!,
        primerApellidoTutor: this.formularioContacto.value.primerApellidoTutor!,
        dniTutor: this.formularioContacto.value.dnitutor!,
        telefonoPrincipal: parseInt(
          this.formularioContacto.value.telefonoPrincipal!
        ),
        correoParticipante: this.formularioContacto.value.correoParticipante!,
        permiteFotos: this.formularioContacto.value.permiteFotos!,
        firma: 'Firmado',
        idCampus: 1,
        descripcionAlergias: this.formularioContacto.value.descripcionAlergias!,
        descripcionMedicacion:
          this.formularioContacto.value.descripcionMedicacion!,
        tallaCamiseta: this.formularioContacto.value.tallaCamiseta!,
        lesiones: this.formularioContacto.value.lesiones!,
        segundoApellidoTutor:
          this.formularioContacto.value.segundoApellidoTutor!,
        telefonoSecundario: parseInt(
          this.formularioContacto.value.telefonoSecundario!
        ),
        esJugador: this.formularioContacto.value.esJugador!,
      };

      try {
        await this.registrarParticipante().toPromise();
        await this.obtenerCampus();
        this.openDialog();
      } catch (error) {
        this.handleServiceError(error);
      }
    } else {
      this.resultado = 'Rellena correctamente todos los campos.';
    }
  }

  registrarParticipante(): Observable<ParticipanteResponse> {
    return this.participanteService.RegistrarPartcipante(this.participante);
  }

  async obtenerCampus() {
    try {
      this.campusResponseById = await this.campusService
        .ObtenerCampus(this.participante.idCampus)
        .toPromise();
    } catch (error) {
      console.error('Error al buscar el campus por Id', error);
      alert('Disculpe.');
    }
  }

  handleServiceError(error: any) {
    alert('SERVICIO NO DISPONIBLE CONTACTA CON EL COORDINADOR. 638017265.');
  }

  openDialog() {
    this.dialog.open(DialogReporteComponent, {
      data: {
        participante: this.participante,
        campus: this.campusResponseById?.data,
      },
    });
  }
}
