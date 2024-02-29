import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Participante } from '../../interfaces/participante';
import { Campus, CampusResponseById } from '../../interfaces/campus';
import { Reporte } from '../../interfaces/reporte';
import { EmailService } from '../../services/email.service';


@Component({
  selector: 'app-dialog-reporte',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle],
  templateUrl: './dialog-reporte.component.html',
  styleUrl: './dialog-reporte.component.css'
})
export class DialogReporteComponent {
  campusResponseById?: CampusResponseById;
  reporte?: Reporte

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { participante: Participante, campus: Campus }, 
    private router: Router,
    public dialogRef: MatDialogRef<DialogReporteComponent>,
    private emailService: EmailService) { }

  CerrarTodo() {
    this.dialogRef.close();

    //llamar al back para enviar correo electronico con el reporte de la inscripcion

    this.enviarCorreo();

    this.dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['home']);
    });
  }

  async enviarCorreo(){
    this.reporte!.correoParticipante = this.data.participante.correoParticipante;
    this.reporte!.descuentoJugador = this.data.campus.descuentoJugador;
    this.reporte!.esJugador = this.data.participante.esJugador;
    this.reporte!.formaPagoDos= this.data.campus.formaPagoDos;
    this.reporte!.formaPagoTres = this.data.campus.formaPagoTres;
    this.reporte!.formaPagoUno = this.data.campus.formaPagoUno;
    this.reporte!.idCampus = this.data.participante.idCampus;
    this.reporte!.nombreCampus = this.data.campus.nombre;
    this.reporte!.nombreParticipante = this.data.participante.nombre;
    this.reporte!.precio = this.data.campus.precio;
    this.reporte!.primerApellido = this.data.participante.primerApellido;

    try{
      await this.emailService.SendMail(this.reporte!).toPromise();
      alert("Revisa tu correo electronico donde tienes toda la información.")
    }
    catch{

    }
    

  }
}

