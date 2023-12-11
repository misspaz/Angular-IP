import { Component, OnInit } from '@angular/core';
import { IProject } from '../models/project.model';
import { ActivatedRoute } from '@angular/router';
import { PROJECTS } from '../../projects/projects-data';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent implements OnInit {
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  projectId: number | undefined;
  project!: IProject;
  projects: IProject[] = PROJECTS;
  otherProjects: IProject[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.paramMap.subscribe((params) => {
      this.projectId = +params.get('id')!;
      this.project = this.projects.find(
        (project) => project.id === this.projectId
      )!;

      this.otherProjects = this.projects.filter(
        (project) => project.id !== this.projectId
      );
    });
  }

  getSecondaryPicturesArray(): string[] {
    if (this.project && this.project.secondaryPictures) {
      return Object.values(this.project.secondaryPictures);
    }
    return [];
  }

  goToProject(id: number) {
    this.router.navigate(['project', id]);
  }

  navigateToProjectDetail(project: IProject) {
    this.router.navigate(['project', project.id], { state: { project } });
  }
}
