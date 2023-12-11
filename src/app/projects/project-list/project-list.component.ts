import { Component } from '@angular/core';
import { IProject } from '../models/project.model';
import { PROJECTS } from '../../projects/projects-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {

  projects: IProject[] = PROJECTS

  constructor(private router: Router) { }

  navigateToProjectDetail(id: number) {
    this.router.navigate(['project', id]);
  }

}
