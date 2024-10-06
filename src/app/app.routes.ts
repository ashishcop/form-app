import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateDetailComponent } from './template-detail/template-detail.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'template', component: TemplateDrivenComponent },
  { path: 'template/:id', component: TemplateDetailComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
