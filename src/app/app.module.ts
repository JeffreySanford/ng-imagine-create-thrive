import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavigationComponent } from './page/navigation/navigation.component';
import { FooterComponent } from './page/footer/footer.component';

import { MastheadComponent } from './landing/masthead/masthead.component';
import { ServicesComponent } from './landing/services/services.component';
import { ProjectsComponent } from './landing/projects/projects.component';
import { TeamComponent } from './landing/team/team.component';
import { ContactComponent } from './landing/contact/contact.component';
import { AboutComponent } from './landing/about/about.component';
import { ClientsComponent } from './landing/clients/clients.component';
import { PortfolioModalsComponent } from './landing/projects/portfolio-modals/portfolio-modals.component';

import { CmsComponent } from './cms/cms.component';
import { CatagoriesComponent } from './cms/catagories/catagories.component';
import { EntitiesComponent } from './cms/entities/entities.component';
import { LandingComponent } from './landing/landing.component';
import { NewsComponent } from './cms/news/news.component';
import { PersonDetailsComponent } from './cms/person-details/person-details.component';

const appRoutes: Routes = [
  { path: 'cms', component: CmsComponent },
  { path: 'cms/:id', component: CmsComponent },
  { path: 'landing', component: LandingComponent },
  { path: '*', redirectTo: '/landing', pathMatch: 'full'},
  { path: '**', component: LandingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MastheadComponent,
    FooterComponent,
    ServicesComponent,
    ProjectsComponent,
    TeamComponent,
    ContactComponent,
    NavigationComponent,
    AboutComponent,
    ClientsComponent,
    PortfolioModalsComponent,
    CmsComponent,
    CatagoriesComponent,
    EntitiesComponent,
    LandingComponent,
    NewsComponent,
    PersonDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
