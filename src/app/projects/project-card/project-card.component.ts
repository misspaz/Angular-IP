import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IProject } from '../models/project.model';
import { PROJECTS } from '../../projects/projects-data';
import { Router } from '@angular/router';

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

  constructor(private elementRef: ElementRef, private router: Router) {}

  navigateToProjectDetail(project: IProject) {
    this.router.navigate(['project', project.id], { state: { project } });
  }

  ngAfterViewInit(): void {
    VanillaTilt.init(this.elementRef.nativeElement.querySelectorAll('.card'), {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 1,
    });
  }
}
