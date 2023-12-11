import { Component, NgModule, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProjectCardComponent,
    IntroComponent,
    AboutComponent,
    ContactComponent,
    FormsModule,
    FooterComponent,
    ProjectDetailComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ivan-perez';
 
}
