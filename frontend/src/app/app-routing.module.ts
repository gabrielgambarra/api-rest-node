import { Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AdminGuard } from './security/admin.guard';
import { LoginGuard } from './security/login.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./web/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'doctors',
        loadChildren: () => import('./web/doctors/doctors.module').then(m => m.DoctorsModule)
      },
      {
        path: 'patients',
        loadChildren: () => import('./web/patients/patients.module').then(m => m.PatientsModule)
      }
    ]
  },
  {
    path: 'pages',
    component: PagesComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      }
    ]
  }
];
