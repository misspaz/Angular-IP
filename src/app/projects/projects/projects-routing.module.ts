import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';


const routes: Routes = [
  { path: 'project/:id', component: ProjectDetailComponent },
//   { path: '', redirectTo: '/projects', pathMatch: 'full' },
//   { path: 'projects', component: ProjectListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }