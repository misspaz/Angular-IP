import { Component, NgModule, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ivan-perez';
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      this.showScrollButton = true;
    } else {
      this.showScrollButton = false;
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
