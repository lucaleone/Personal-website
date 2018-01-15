import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactsComponent} from './Components/contacts/contacts.component';
import {SkillsComponent} from './Components/skills/skills.component';
import {ProjectsListComponent} from './Components/projects-list/projects-list.component';

export const routes: Routes = [
  {
    path: '',
    component: SkillsComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'skills',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    pathMatch: 'full',
  },
  {
    path: 'about',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
  {
    path: 'projects',
    component: ProjectsListComponent,
    pathMatch: 'full',
  },
  {
    path: 'work',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
