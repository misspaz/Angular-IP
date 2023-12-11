import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { IProject } from '../models/project.model';
import { PROJECTS } from '../../projects/projects-data';
import { Router } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();
declare let VanillaTilt: any;

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent implements AfterViewInit {
  projects: IProject[] = PROJECTS;
  animated = false;

  constructor(private elementRef: ElementRef, private router: Router) {}

  navigateToProjectDetail(project: IProject) {
    this.router.navigate(['project', project.id], { state: { project } });
  }

  ngAfterViewInit(): void {
    this.checkIfInView();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.checkIfInView();
  }

  checkIfInView(): void {
    if (!this.animated) {
      const element = this.elementRef.nativeElement.querySelector('.projects-section');
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
  
      if (isVisible) {
        this.animateCards();
        this.animated = true;
        // Remove the event listener after the animation
        window.removeEventListener('scroll', this.onScroll, true);
      }
    }
  }

  animateCards(): void {
    const cards = this.elementRef.nativeElement.querySelectorAll('.card');
    cards.forEach((card: HTMLElement, index: number) => {
      setTimeout(() => {
        VanillaTilt.init(card, {
          max: 25,
          speed: 400,
          glare: true,
          'max-glare': 1,
        });
        card.classList.add('glow', `delay-${index + 1}`);
      }, (index + 1) * 1000); 
    });
  }

  // ngAfterViewInit(): void {
  //   VanillaTilt.init(this.elementRef.nativeElement.querySelectorAll('.card'), {
  //     max: 25,
  //     speed: 400,
  //     glare: true,
  //     'max-glare': 1,
  //   });
  // }
}
