import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ContentComponent } from "./content/content.component";
import { ContactComponent } from './pages/contact/contact.component';
import { SpinnerBallComponent } from "./component/spinner/spinner-ball/spinner-ball.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
        ContentComponent,
        ContactComponent,
        SpinnerBallComponent
    ]
})
export class AppComponent {
  title = 'LAP_Campus';
}
