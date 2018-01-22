import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './Components/profile/profile.component';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { ProjectsListComponent } from './Components/projects-list/projects-list.component';
import { SkillsComponent } from './Components/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ContactsComponent,
    ProjectsListComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
