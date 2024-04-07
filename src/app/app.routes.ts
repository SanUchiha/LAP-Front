import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { FormSignComponent } from './pages/form-sign/form-sign.component';
import { ContentComponent } from './content/content.component';
import { GaleriaImagenesComponent } from './pages/galeria-imagenes/galeria-imagenes.component';

export const routes: Routes = [
   { path: '', title: 'Inicio', component: ContentComponent },
   { path: 'home', title: 'Inicio', component: ContentComponent },
   { path: 'formSign', title: 'Inscripción', component: FormSignComponent },
   { path: 'contact', title: 'Contact', component: ContactComponent },
   { path: 'galeria', title: 'Galeria de imagenes', component: GaleriaImagenesComponent },

];
