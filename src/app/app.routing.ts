import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DayComponent } from './day/day.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: ':dayid',
    component: DayComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
