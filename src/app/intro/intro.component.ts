import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {
  menuOpen = false;
  screenSize = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenSize = window.innerWidth;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
